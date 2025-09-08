import { useEffect, useRef, useState } from 'react';

interface MagneticEffectOptions {
  strength?: number;
  maxDistance?: number;
}

export function useMagneticEffect(options: MagneticEffectOptions = {}) {
  const {
    strength = 0.3,
    maxDistance = 100
  } = options;

  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Check if cursor is inside the card's ORIGINAL position (accounting for current offset)
      // This prevents flickering when the card moves and cursor ends up outside
      const originalLeft = rect.left - offset.x;
      const originalRight = rect.right - offset.x;
      const originalTop = rect.top - offset.y;
      const originalBottom = rect.bottom - offset.y;
      
      const isInside = e.clientX >= originalLeft && 
                       e.clientX <= originalRight && 
                       e.clientY >= originalTop && 
                       e.clientY <= originalBottom;
      
      if (isInside) {
        // Inside the card: only move when near edges
        const edgeThreshold = 20; // Distance from edge to start effect
        
        // Calculate distance from ORIGINAL edges (not the moved position)
        const distFromLeft = e.clientX - originalLeft;
        const distFromRight = originalRight - e.clientX;
        const distFromTop = e.clientY - originalTop;
        const distFromBottom = originalBottom - e.clientY;
        
        // Find minimum distance to any edge
        const minEdgeDist = Math.min(distFromLeft, distFromRight, distFromTop, distFromBottom);
        
        if (minEdgeDist < edgeThreshold) {
          // Near edge: card moves slightly AWAY from center (towards the cursor at edge)
          const edgeStrength = (edgeThreshold - minEdgeDist) / edgeThreshold;
          
          // Determine which edge we're near and move accordingly
          let moveX = 0;
          let moveY = 0;
          
          // Maximum movement is 8px when right at the edge
          const maxMove = 8;
          
          if (distFromLeft < edgeThreshold && distFromLeft === minEdgeDist) {
            moveX = -maxMove * edgeStrength; // Move left when cursor near left edge
          } else if (distFromRight < edgeThreshold && distFromRight === minEdgeDist) {
            moveX = maxMove * edgeStrength; // Move right when cursor near right edge
          }
          
          if (distFromTop < edgeThreshold && distFromTop === minEdgeDist) {
            moveY = -maxMove * edgeStrength; // Move up when cursor near top edge
          } else if (distFromBottom < edgeThreshold && distFromBottom === minEdgeDist) {
            moveY = maxMove * edgeStrength; // Move down when cursor near bottom edge
          }
          
          setOffset({ x: moveX, y: moveY });
        } else {
          // Center area: card stays completely still
          setOffset({ x: 0, y: 0 });
        }
      } else {
        // Outside the card: magnetic attraction
        const effectiveMaxX = maxDistance + rect.width / 2;
        const effectiveMaxY = maxDistance + rect.height / 2;
        
        const normalizedX = distanceX / effectiveMaxX;
        const normalizedY = distanceY / effectiveMaxY;
        const ellipticalDistance = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY);
        
        if (ellipticalDistance < 1) {
          const pullStrength = 1 - ellipticalDistance;
          const moveX = distanceX * strength * pullStrength;
          const moveY = distanceY * strength * pullStrength;
          
          setOffset({ x: moveX, y: moveY });
        } else {
          setOffset({ x: 0, y: 0 });
        }
      }
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    // Listen to mouse movements on the entire document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, maxDistance, offset.x, offset.y]);

  return {
    ref: cardRef,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: 'transform 0.2s ease-out',
      willChange: 'transform'
    }
  };
}