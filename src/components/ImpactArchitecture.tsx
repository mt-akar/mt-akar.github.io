'use client';

import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './ImpactArchitecture.css';

interface ImpactStory {
  id: string;
  title: string;
  colorHex: string;
}

const impactStories: ImpactStory[] = [
  {
    id: 'cointribute',
    title: 'Cointribute',
    colorHex: '#22d3ee'
  },
  {
    id: 'inclusai',
    title: 'InclusAI',
    colorHex: '#9333ea'
  },
  {
    id: 'rpcstudio',
    title: 'RPC Studio',
    colorHex: '#ec4899'
  }
];

// Phase timeline definition with exact timing in percentage of total duration
interface PhaseTimeline {
  name: string;
  color: string;
  fadeInStart: number;
  fadeInEnd: number;
  scaleStart: number;
  scaleEnd: number;
  exitStart: number;
  exitEnd: number;
}

// Define the complete timeline for all phases (33 seconds total)
// Timeline: 5s play, 2s pause, 5s play, 2s pause, etc.
const phaseTimelines: PhaseTimeline[] = [
  {
    name: 'problem',
    color: '#6b7280',
    fadeInStart: 0,
    fadeInEnd: 3, // Quick fade in at start
    scaleStart: 0,
    scaleEnd: 15.15, // Scale for 5 seconds (0-5s)
    exitStart: 21.21, // Exit at START of next phase (7s)
    exitEnd: 24.24, // Quick exit over 1 second
  },
  {
    name: 'architecture',
    color: '#22d3ee',
    fadeInStart: 21.21, // Fade in at START of its phase (7s)
    fadeInEnd: 24.24, // Quick fade in over 1 second
    scaleStart: 21.21,
    scaleEnd: 36.36, // Scale for 5 seconds (7-12s)
    exitStart: 42.42, // Exit at START of next phase (14s)
    exitEnd: 45.45, // Quick exit
  },
  {
    name: 'scale',
    color: '#9333ea',
    fadeInStart: 42.42, // Fade in at START of its phase (14s)
    fadeInEnd: 45.45,
    scaleStart: 42.42,
    scaleEnd: 57.57, // Scale for 5 seconds (14-19s)
    exitStart: 63.63, // Exit at START of next phase (21s)
    exitEnd: 66.66,
  },
  {
    name: 'impact',
    color: '#ec4899',
    fadeInStart: 63.63, // Fade in at START of its phase (21s)
    fadeInEnd: 66.66,
    scaleStart: 63.63,
    scaleEnd: 78.78, // Scale for 5 seconds (21-26s)
    exitStart: 84.84, // Exit at START of next phase (28s)
    exitEnd: 87.87,
  },
  {
    name: 'outcome',
    color: '#fbbf24',
    fadeInStart: 84.84, // Fade in at START of its phase (28s)
    fadeInEnd: 87.87,
    scaleStart: 84.84,
    scaleEnd: 100, // Scale for 5 seconds (28-33s)
    exitStart: 100,
    exitEnd: 100, // Never exits
  }
];

// Single phase renderer that calculates its own state based on progress
const PhaseText = memo(({ 
  timeline, 
  progress 
}: { 
  timeline: PhaseTimeline;
  progress: number;
}) => {
  // Calculate visibility - special case for outcome to stay visible at 100%
  const isVisible = progress >= timeline.fadeInStart && 
    (progress < timeline.exitEnd || (timeline.name === 'outcome' && progress >= 100));
  
  if (!isVisible) return null;
  
  // Calculate opacity for fade in/out
  let opacity = 1;
  if (progress < timeline.fadeInEnd) {
    // Fading in
    opacity = (progress - timeline.fadeInStart) / (timeline.fadeInEnd - timeline.fadeInStart);
  } else if (progress >= timeline.exitStart && progress < timeline.exitEnd) {
    // Fading out
    opacity = 1 - ((progress - timeline.exitStart) / (timeline.exitEnd - timeline.exitStart));
  }
  
  // Calculate scale (0.5x to 2.5x during active period)
  let scale = 0.5;
  if (progress >= timeline.scaleStart && progress <= timeline.scaleEnd) {
    const scaleProgress = (progress - timeline.scaleStart) / (timeline.scaleEnd - timeline.scaleStart);
    scale = 0.5 + (scaleProgress * 2); // 0.5x to 2.5x
  } else if (progress > timeline.scaleEnd && progress < timeline.exitStart) {
    scale = 2.5; // Maintain full scale during pause
  } else if (progress >= timeline.exitStart) {
    scale = 2.5; // Keep at full scale while exiting
  }
  
  // During fade in, start smaller
  if (progress >= timeline.fadeInStart && progress < timeline.fadeInEnd) {
    const fadeProgress = (progress - timeline.fadeInStart) / (timeline.fadeInEnd - timeline.fadeInStart);
    if (progress < timeline.scaleStart) {
      scale = 0.3 + (fadeProgress * 0.2); // Start at 0.3, go to 0.5
    }
  }
  
  // Calculate horizontal position for exit
  let translateX = 0;
  if (progress >= timeline.exitStart && progress < timeline.exitEnd) {
    const exitProgress = (progress - timeline.exitStart) / (timeline.exitEnd - timeline.exitStart);
    translateX = exitProgress * 500; // Slide 500px to the right
  }
  
  // For entry, start slightly from left
  if (progress >= timeline.fadeInStart && progress < timeline.fadeInEnd) {
    const entryProgress = (progress - timeline.fadeInStart) / (timeline.fadeInEnd - timeline.fadeInStart);
    translateX = -50 * (1 - entryProgress); // Start 50px from left
  }
  
  return (
    <div
      className="phase-text-timeline"
      style={{
        transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`,
        opacity,
        color: timeline.color,
      }}
    >
      {timeline.name}
    </div>
  );
});

PhaseText.displayName = 'PhaseText';

// Memoized progress segment for performance
const ProgressSegment = memo(({ 
  phase, 
  index, 
  progress,
  onJump 
}: {
  phase: { name: string; color: string; start: number; end: number };
  index: number;
  progress: number;
  onJump: (index: number) => void;
}) => {
  const handleClick = useCallback(() => onJump(index), [index, onJump]);
  
  const segmentProgress = Math.max(0, Math.min(100, 
    ((progress - phase.start) / (phase.end - phase.start)) * 100
  ));
  
  const isActive = progress >= phase.start && progress < phase.end;
  const isComplete = progress >= phase.end;
  const isPending = progress < phase.start;
  
  return (
    <button
      className="progress-segment"
      onClick={handleClick}
      aria-label={`Jump to ${phase.name} phase`}
    >
      <div
        className="progress-fill"
        style={{
          '--segment-width': isPending ? '0%' : isComplete ? '100%' : `${segmentProgress}%`,
          '--segment-color': phase.color,
          '--segment-opacity': isPending ? 0 : 0.9,
        } as React.CSSProperties}
      />
    </button>
  );
});

ProgressSegment.displayName = 'ProgressSegment';

export default function ImpactArchitecture() {
  const [isInView, setIsInView] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);

  const currentStory = impactStories[currentStoryIndex];
  
  // Progress bar phases for display
  const progressPhases = useMemo(() => [
    { name: 'problem', start: 0, end: 15.15, color: '#6b7280' },
    { name: 'architecture', start: 21.21, end: 36.36, color: '#22d3ee' },
    { name: 'scale', start: 42.42, end: 57.57, color: '#9333ea' },
    { name: 'impact', start: 63.63, end: 78.78, color: '#ec4899' },
    { name: 'outcome', start: 84.84, end: 100, color: '#fbbf24' }
  ], []);
  
  const ANIMATION_DURATION = 33000;
  const TARGET_FPS = 60;
  const FRAME_BUDGET = 1000 / TARGET_FPS;
  
  // Get current phase index for stage labels
  const getCurrentPhaseIndex = useCallback((progress: number) => {
    if (progress >= 100) return progressPhases.length - 1;
    
    // Check if we're in a pause period
    const pausePeriods = [
      { start: 15.15, end: 21.21 }, // pause1
      { start: 36.36, end: 42.42 }, // pause2
      { start: 57.57, end: 63.63 }, // pause3
      { start: 78.78, end: 84.84 }, // pause4
    ];
    
    for (const pause of pausePeriods) {
      if (progress >= pause.start && progress < pause.end) {
        // During pause, show the previous phase as current
        const prevPhaseIndex = progressPhases.findIndex(p => p.end === pause.start);
        return prevPhaseIndex >= 0 ? prevPhaseIndex : 0;
      }
    }
    
    // Otherwise find the active phase
    const phaseIndex = progressPhases.findIndex(phase => 
      progress >= phase.start && progress < phase.end
    );
    return phaseIndex >= 0 ? phaseIndex : 0;
  }, [progressPhases]);
  
  const currentPhaseIndex = getCurrentPhaseIndex(animationProgress);

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          if (canvasRef.current) {
            canvasRef.current.style.willChange = 'transform, opacity';
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (canvasRef.current) {
        canvasRef.current.style.willChange = 'auto';
      }
    };
  }, [isInView]);

  // High-performance animation loop
  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        pausedAtRef.current = animationProgress;
      }
      return;
    }

    let frameDropCounter = 0;
    const maxFrameDrops = 2;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - (pausedAtRef.current * ANIMATION_DURATION / 100);
        lastFrameTimeRef.current = timestamp;
      }
      
      const frameDelta = timestamp - lastFrameTimeRef.current;
      
      if (frameDelta < FRAME_BUDGET * 0.75 && frameDropCounter < maxFrameDrops) {
        frameDropCounter++;
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      frameDropCounter = 0;
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min((elapsed / ANIMATION_DURATION) * 100, 100);
      
      const progressDelta = Math.abs(progress - animationProgress);
      if (progressDelta > 0.1 || progress === 100) {
        setAnimationProgress(progress);
      }
      
      lastFrameTimeRef.current = timestamp;
      
      if (progress < 99.9) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setAnimationProgress(100);
        setIsPlaying(false);
        startTimeRef.current = 0;
        pausedAtRef.current = 0;
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, animationProgress]);

  // Handlers
  const handlePlayPause = useCallback(() => {
    if (animationProgress >= 100) {
      setAnimationProgress(0);
      startTimeRef.current = 0;
      pausedAtRef.current = 0;
      setIsPlaying(true);
    } else {
      setIsPlaying(prev => !prev);
    }
  }, [animationProgress]);

  const handleReset = useCallback(() => {
    setAnimationProgress(0);
    setIsPlaying(false);
    startTimeRef.current = 0;
    pausedAtRef.current = 0;
  }, []);
  
  const jumpToPhase = useCallback((phaseIndex: number) => {
    const phase = progressPhases[phaseIndex];
    if (phase) {
      setAnimationProgress(phase.start);
      pausedAtRef.current = phase.start;
      startTimeRef.current = 0;
      setIsPlaying(true);
    }
  }, [progressPhases]);

  const handleNextStory = useCallback(() => {
    setCurrentStoryIndex(prev => (prev + 1) % impactStories.length);
    handleReset();
  }, [handleReset]);

  const handlePrevStory = useCallback(() => {
    setCurrentStoryIndex(prev => (prev - 1 + impactStories.length) % impactStories.length);
    handleReset();
  }, [handleReset]);

  return (
    <section 
      ref={sectionRef}
      className="impact-section"
    >
      {/* Background gradient */}
      <div className="background-gradient">
        <div 
          className="gradient-layer"
          style={{
            '--story-color': currentStory.colorHex,
          } as React.CSSProperties}
        />
      </div>

      <div className="content-container">
        <SectionTitle 
          title="Impact Architecture"
          subtitle="Watch how one user's need becomes thousands served"
          isInView={isInView}
        />

        {/* Story selector */}
        <div className={`story-selector ${isInView ? 'in-view' : ''}`}>
          <button
            onClick={handlePrevStory}
            className="story-nav-button"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="story-info">
            <h3 className="story-title">{currentStory.title}</h3>
            <p className="story-counter">Story {currentStoryIndex + 1} of {impactStories.length}</p>
          </div>
          <button
            onClick={handleNextStory}
            className="story-nav-button"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Main visualization canvas */}
        <div 
          ref={canvasRef}
          className={`visualization-canvas ${isInView ? 'in-view' : ''}`}
        >
          {/* Animation content area - All phases rendered simultaneously */}
          <div className="animation-area">
            {phaseTimelines.map(timeline => (
              <PhaseText 
                key={timeline.name}
                timeline={timeline}
                progress={animationProgress}
              />
            ))}
          </div>

          {/* Progress controls */}
          <div className="progress-controls">
            <div className="progress-bar-container">
              {/* Segmented progress bar */}
              <div className="progress-segments-wrapper">
                <div className="progress-segments">
                  {progressPhases.map((phase) => (
                    <div key={phase.name} className="segment-background" />
                  ))}
                </div>
                
                {/* Animated fill segments */}
                <div className="progress-segments progress-segments-fill">
                  {progressPhases.map((phase, i) => (
                    <ProgressSegment
                      key={phase.name}
                      phase={phase}
                      index={i}
                      progress={animationProgress}
                      onJump={jumpToPhase}
                    />
                  ))}
                </div>
                
                {/* Segment dividers */}
                <div className="segment-dividers">
                  {progressPhases.map((phase, i) => (
                    <div key={phase.name} className="divider-container">
                      {i < progressPhases.length - 1 && <div className="segment-divider" />}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stage labels */}
              <div className="stage-labels">
                {progressPhases.map((phase, i) => {
                  const isActive = currentPhaseIndex === i;
                  
                  return (
                    <button
                      key={phase.name}
                      className={`stage-label ${isActive ? 'active' : ''}`}
                      style={{
                        '--label-color': isActive ? phase.color : '#6b7280',
                      } as React.CSSProperties}
                      onClick={() => jumpToPhase(i)}
                    >
                      {phase.name}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Play controls */}
            <div className="play-controls">
              <button
                onClick={handlePlayPause}
                className="play-button"
                aria-label={isPlaying ? 'Pause' : animationProgress >= 100 ? 'Restart' : 'Play'}
              >
                {animationProgress >= 100 ? (
                  <RotateCcw className="w-4 h-4" />
                ) : isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 play-icon" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}