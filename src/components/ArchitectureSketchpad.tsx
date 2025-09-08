'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Node {
  id: string;
  x: number;
  y: number;
  text: string;
}

interface Arrow {
  id: string;
  from: string;
  to: string;
}

const patterns = {
  eventSourcing: {
    name: 'InclusAI - Event Sourcing',
    nodes: [
      { id: '1', x: 60, y: 100, text: 'API Gateway' },
      { id: '2', x: 200, y: 60, text: 'Command Handler' },
      { id: '3', x: 200, y: 140, text: 'Event Bus' },
      { id: '4', x: 360, y: 100, text: 'Event Store' },
      { id: '5', x: 360, y: 200, text: 'Snapshot Store' },
      { id: '6', x: 520, y: 60, text: 'Projection' },
      { id: '7', x: 520, y: 140, text: 'Read Model' },
      { id: '8', x: 680, y: 100, text: 'Query API' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '2', to: '3' },
      { id: 'a3', from: '3', to: '4' },
      { id: 'a4', from: '4', to: '5' },
      { id: 'a5', from: '4', to: '6' },
      { id: 'a6', from: '6', to: '7' },
      { id: 'a7', from: '7', to: '8' },
      { id: 'a8', from: '5', to: '4' }
    ]
  },
  cqrs: {
    name: 'Bottom Nav - CQRS',
    nodes: [
      { id: '1', x: 60, y: 100, text: 'UI Layer' },
      { id: '2', x: 200, y: 40, text: 'Command Bus' },
      { id: '3', x: 200, y: 160, text: 'Query Bus' },
      { id: '4', x: 360, y: 40, text: 'Command Handler' },
      { id: '5', x: 360, y: 160, text: 'Query Handler' },
      { id: '6', x: 520, y: 40, text: 'Write Model' },
      { id: '7', x: 520, y: 160, text: 'Read Model' },
      { id: '8', x: 440, y: 100, text: 'Event Dispatcher' },
      { id: '9', x: 680, y: 100, text: 'Database' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '1', to: '3' },
      { id: 'a3', from: '2', to: '4' },
      { id: 'a4', from: '3', to: '5' },
      { id: 'a5', from: '4', to: '6' },
      { id: 'a6', from: '5', to: '7' },
      { id: 'a7', from: '6', to: '9' },
      { id: 'a8', from: '7', to: '9' },
      { id: 'a9', from: '6', to: '8' },
      { id: 'a10', from: '8', to: '7' }
    ]
  },
  sagaOrchestration: {
    name: 'Cointribute - Saga Orchestration',
    nodes: [
      { id: '1', x: 360, y: 40, text: 'Saga Orchestrator' },
      { id: '2', x: 100, y: 140, text: 'Order Service' },
      { id: '3', x: 260, y: 140, text: 'Payment Service' },
      { id: '4', x: 420, y: 140, text: 'Inventory Service' },
      { id: '5', x: 580, y: 140, text: 'Shipping Service' },
      { id: '6', x: 180, y: 240, text: 'Compensation' },
      { id: '7', x: 360, y: 240, text: 'State Machine' },
      { id: '8', x: 540, y: 240, text: 'Event Log' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '1', to: '3' },
      { id: 'a3', from: '1', to: '4' },
      { id: 'a4', from: '1', to: '5' },
      { id: 'a5', from: '2', to: '6' },
      { id: 'a6', from: '3', to: '6' },
      { id: 'a7', from: '1', to: '7' },
      { id: 'a8', from: '7', to: '8' },
      { id: 'a9', from: '4', to: '7' },
      { id: 'a10', from: '5', to: '8' }
    ]
  },
  circuitBreaker: {
    name: 'Kinesis Explorer - Circuit Breaker',
    nodes: [
      { id: '1', x: 60, y: 100, text: 'Client App' },
      { id: '2', x: 200, y: 100, text: 'Circuit Breaker' },
      { id: '3', x: 360, y: 60, text: 'Primary Service' },
      { id: '4', x: 360, y: 140, text: 'Fallback Service' },
      { id: '5', x: 200, y: 200, text: 'Health Check' },
      { id: '6', x: 520, y: 100, text: 'Database' },
      { id: '7', x: 360, y: 260, text: 'Metrics Store' },
      { id: '8', x: 520, y: 200, text: 'Cache' },
      { id: '9', x: 680, y: 100, text: 'External API' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '2', to: '3' },
      { id: 'a3', from: '2', to: '4' },
      { id: 'a4', from: '2', to: '5' },
      { id: 'a5', from: '5', to: '3' },
      { id: 'a6', from: '3', to: '6' },
      { id: 'a7', from: '5', to: '7' },
      { id: 'a8', from: '4', to: '8' },
      { id: 'a9', from: '3', to: '9' },
      { id: 'a10', from: '8', to: '6' }
    ]
  },
  fanOutFanIn: {
    name: 'Pathology AI - Fan-out/Fan-in',
    nodes: [
      { id: '1', x: 60, y: 160, text: 'Orchestrator' },
      { id: '2', x: 200, y: 160, text: 'Task Queue' },
      { id: '3', x: 360, y: 60, text: 'Worker Pool 1' },
      { id: '4', x: 360, y: 140, text: 'Worker Pool 2' },
      { id: '5', x: 360, y: 220, text: 'Worker Pool 3' },
      { id: '6', x: 520, y: 160, text: 'Result Queue' },
      { id: '7', x: 680, y: 160, text: 'Aggregator' },
      { id: '8', x: 520, y: 280, text: 'Dead Letter' },
      { id: '9', x: 680, y: 60, text: 'Monitor' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '2', to: '3' },
      { id: 'a3', from: '2', to: '4' },
      { id: 'a4', from: '2', to: '5' },
      { id: 'a5', from: '3', to: '6' },
      { id: 'a6', from: '4', to: '6' },
      { id: 'a7', from: '5', to: '6' },
      { id: 'a8', from: '6', to: '7' },
      { id: 'a9', from: '5', to: '8' },
      { id: 'a10', from: '7', to: '9' },
      { id: 'a11', from: '3', to: '9' }
    ]
  },
  microservices: {
    name: 'RPC Studio - Microservices',
    nodes: [
      { id: '1', x: 60, y: 100, text: 'API Gateway' },
      { id: '2', x: 200, y: 40, text: 'Auth Service' },
      { id: '3', x: 200, y: 160, text: 'Load Balancer' },
      { id: '4', x: 360, y: 40, text: 'User Service' },
      { id: '5', x: 360, y: 120, text: 'Order Service' },
      { id: '6', x: 360, y: 200, text: 'Product Service' },
      { id: '7', x: 520, y: 80, text: 'Message Bus' },
      { id: '8', x: 520, y: 160, text: 'Cache' },
      { id: '9', x: 680, y: 120, text: 'Database' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '1', to: '3' },
      { id: 'a3', from: '2', to: '4' },
      { id: 'a4', from: '3', to: '4' },
      { id: 'a5', from: '3', to: '5' },
      { id: 'a6', from: '3', to: '6' },
      { id: 'a7', from: '4', to: '7' },
      { id: 'a8', from: '5', to: '7' },
      { id: 'a9', from: '6', to: '7' },
      { id: 'a10', from: '5', to: '8' },
      { id: 'a11', from: '8', to: '9' },
      { id: 'a12', from: '4', to: '9' },
      { id: 'a13', from: '6', to: '9' }
    ]
  },
  hexagonal: {
    name: 'Web3 Studio - Hexagonal',
    nodes: [
      { id: '1', x: 60, y: 120, text: 'REST API' },
      { id: '2', x: 60, y: 200, text: 'GraphQL' },
      { id: '3', x: 200, y: 80, text: 'Input Port' },
      { id: '4', x: 200, y: 240, text: 'Output Port' },
      { id: '5', x: 360, y: 160, text: 'Domain Core' },
      { id: '6', x: 520, y: 80, text: 'Use Cases' },
      { id: '7', x: 520, y: 240, text: 'Repository' },
      { id: '8', x: 680, y: 120, text: 'Database' },
      { id: '9', x: 680, y: 200, text: 'External API' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '3' },
      { id: 'a2', from: '2', to: '3' },
      { id: 'a3', from: '3', to: '5' },
      { id: 'a4', from: '5', to: '4' },
      { id: 'a5', from: '5', to: '6' },
      { id: 'a6', from: '6', to: '5' },
      { id: 'a7', from: '4', to: '7' },
      { id: 'a8', from: '7', to: '8' },
      { id: 'a9', from: '7', to: '9' }
    ]
  },
  securityAutomation: {
    name: 'C0D3R - Security Automation',
    nodes: [
      { id: '1', x: 60, y: 140, text: 'Code Push' },
      { id: '2', x: 200, y: 60, text: 'SAST Scanner' },
      { id: '3', x: 200, y: 120, text: 'Dependency Check' },
      { id: '4', x: 200, y: 220, text: 'Secret Scanner' },
      { id: '5', x: 360, y: 100, text: 'Policy Engine' },
      { id: '6', x: 360, y: 180, text: 'Risk Assessment' },
      { id: '7', x: 520, y: 60, text: 'Alert Manager' },
      { id: '8', x: 520, y: 140, text: 'Auto Remediation' },
      { id: '9', x: 520, y: 220, text: 'Audit Log' },
      { id: '10', x: 680, y: 140, text: 'Security Dashboard' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '1', to: '3' },
      { id: 'a3', from: '1', to: '4' },
      { id: 'a4', from: '2', to: '5' },
      { id: 'a5', from: '3', to: '5' },
      { id: 'a6', from: '4', to: '5' },
      { id: 'a7', from: '5', to: '6' },
      { id: 'a8', from: '6', to: '7' },
      { id: 'a9', from: '6', to: '8' },
      { id: 'a10', from: '6', to: '9' },
      { id: 'a11', from: '7', to: '10' },
      { id: 'a12', from: '8', to: '10' },
      { id: 'a13', from: '9', to: '10' },
      { id: 'a14', from: '8', to: '1' }
    ]
  },
  cryptoPayments: {
    name: 'Cointribute - Payments Gateway',
    nodes: [
      { id: '1', x: 60, y: 120, text: 'Donor Wallet' },
      { id: '2', x: 200, y: 60, text: 'Web3 Provider' },
      { id: '3', x: 200, y: 180, text: 'Price Oracle' },
      { id: '4', x: 360, y: 120, text: 'Smart Contract' },
      { id: '5', x: 360, y: 220, text: 'Escrow Pool' },
      { id: '6', x: 520, y: 60, text: 'Milestone Tracker' },
      { id: '7', x: 520, y: 120, text: 'Voting Module' },
      { id: '8', x: 520, y: 180, text: 'Release Logic' },
      { id: '9', x: 680, y: 120, text: 'Recipient Wallet' },
      { id: '10', x: 360, y: 20, text: 'IPFS Metadata' }
    ],
    arrows: [
      { id: 'a1', from: '1', to: '2' },
      { id: 'a2', from: '2', to: '4' },
      { id: 'a3', from: '3', to: '4' },
      { id: 'a4', from: '4', to: '5' },
      { id: 'a5', from: '4', to: '10' },
      { id: 'a6', from: '5', to: '6' },
      { id: 'a7', from: '5', to: '7' },
      { id: 'a8', from: '6', to: '8' },
      { id: 'a9', from: '7', to: '8' },
      { id: 'a10', from: '8', to: '9' },
      { id: 'a11', from: '10', to: '6' },
      { id: 'a12', from: '8', to: '5' }
    ]
  }
};

const GRID_SIZE = 20;

export default function ArchitectureSketchpad() {
  const [isInView, setIsInView] = useState(false);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [editingNode, setEditingNode] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [arrowStart, setArrowStart] = useState<string | null>(null);
  const [currentPattern, setCurrentPattern] = useState('');
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [addNodeSlot, setAddNodeSlot] = useState(0);
  const [isCanvasDragging, setIsCanvasDragging] = useState(false);
  const [canvasDragStart, setCanvasDragStart] = useState({ x: 0, scrollLeft: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Snap to grid
  const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;

  // Load next pattern in cycle
  const loadNextPattern = useCallback(() => {
    const patternKeys = Object.keys(patterns);
    const nextIndex = (currentPatternIndex + 1) % patternKeys.length;
    const patternKey = patternKeys[nextIndex] as keyof typeof patterns;
    
    const pattern = patterns[patternKey];
    setNodes([...pattern.nodes]);
    setArrows([...pattern.arrows]);
    setCurrentPattern(pattern.name);
    setCurrentPatternIndex(nextIndex);
    setSelectedNode(null);
    setEditingNode(null);
    setArrowStart(null);
    setAddNodeSlot(0); // Reset the add node position
  }, [currentPatternIndex]);

  // Initialize with random pattern
  useEffect(() => {
    const patternKeys = Object.keys(patterns);
    const randomIndex = Math.floor(Math.random() * patternKeys.length);
    const randomPatternKey = patternKeys[randomIndex] as keyof typeof patterns;
    const pattern = patterns[randomPatternKey];
    setNodes([...pattern.nodes]);
    setArrows([...pattern.arrows]);
    setCurrentPattern(pattern.name);
    setCurrentPatternIndex(randomIndex);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedNode) {
        setNodes(prev => prev.filter(n => n.id !== selectedNode));
        setArrows(prev => prev.filter(a => a.from !== selectedNode && a.to !== selectedNode));
        setSelectedNode(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNode]);

  // Add node
  const addNode = useCallback(() => {
    // Base position (left side of canvas)
    const baseX = 60;
    const baseY = 240;
    
    // Calculate offset based on current slot (0-4)
    const offsetX = addNodeSlot * GRID_SIZE;
    const offsetY = addNodeSlot * GRID_SIZE;
    
    const newNode: Node = {
      id: `node-${Date.now()}`,
      x: snapToGrid(baseX + offsetX),
      y: snapToGrid(baseY + offsetY),
      text: 'New Node'
    };
    
    setNodes(prev => [...prev, newNode]);
    
    // Move to next slot, reset after 5 nodes
    setAddNodeSlot((prev) => (prev + 1) % 5);
  }, [addNodeSlot]);

  // Delete node
  const deleteNode = useCallback((nodeId: string) => {
    setNodes(prev => prev.filter(n => n.id !== nodeId));
    setArrows(prev => prev.filter(a => a.from !== nodeId && a.to !== nodeId));
    setSelectedNode(null);
  }, []);

  // Start editing node text
  const startEditingNode = useCallback((nodeId: string, currentText: string) => {
    setEditingNode(nodeId);
    setEditText(currentText);
  }, []);

  // Save node text
  const saveNodeText = useCallback(() => {
    if (editingNode) {
      setNodes(prev => prev.map(n => 
        n.id === editingNode ? { ...n, text: editText } : n
      ));
      setEditingNode(null);
      setEditText('');
    }
  }, [editingNode, editText]);

  // Handle node drag
  const handleMouseDown = useCallback((e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    setSelectedNode(nodeId);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left - node.x,
      y: e.clientY - rect.top - node.y
    });
  }, [nodes]);

  // Handle canvas drag for scrolling
  const handleCanvasMouseDown = useCallback((e: React.MouseEvent) => {
    // Check if clicking on empty canvas (not on a node or UI element)
    const target = e.target as HTMLElement;
    if (target === canvasRef.current || target.closest('svg')) {
      if (!isDragging && !editingNode && !arrowStart) {
        setIsCanvasDragging(true);
        const container = canvasRef.current?.parentElement;
        if (container) {
          setCanvasDragStart({
            x: e.clientX,
            scrollLeft: container.scrollLeft
          });
        }
      }
    }
  }, [isDragging, editingNode, arrowStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Handle canvas scrolling
    if (isCanvasDragging) {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const deltaX = e.clientX - canvasDragStart.x;
        container.scrollLeft = canvasDragStart.scrollLeft - deltaX;
      }
      return;
    }
    
    // Handle node dragging
    if (!isDragging || !selectedNode) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = snapToGrid(e.clientX - rect.left - dragOffset.x);
    const y = snapToGrid(e.clientY - rect.top - dragOffset.y);

    setNodes(prev => prev.map(n => 
      n.id === selectedNode ? { ...n, x, y } : n
    ));
  }, [isDragging, selectedNode, dragOffset, isCanvasDragging, canvasDragStart]);

  // Handle arrow connection start/complete
  const handleArrowConnection = useCallback((e: React.MouseEvent | React.TouchEvent, nodeId: string) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (arrowStart === null) {
      // Start arrow creation
      setArrowStart(nodeId);
    } else if (arrowStart === nodeId) {
      // Cancel if clicking the same node
      setArrowStart(null);
    }
  }, [arrowStart]);

  // Handle node click for arrow completion
  const handleNodeClick = useCallback((nodeId: string) => {
    if (arrowStart && arrowStart !== nodeId) {
      // Complete arrow creation
      const newArrow: Arrow = {
        id: `arrow-${Date.now()}`,
        from: arrowStart,
        to: nodeId
      };
      setArrows(prev => [...prev, newArrow]);
      setArrowStart(null);
    }
    setSelectedNode(nodeId);
  }, [arrowStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Reset canvas dragging state
    setIsCanvasDragging(false);
  }, []);

  // Touch event handlers for mobile support
  const handleTouchStart = useCallback((e: React.TouchEvent, nodeId: string) => {
    // Don't start node dragging if we're in arrow creation mode
    if (arrowStart) return;
    
    e.stopPropagation();
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    setSelectedNode(nodeId);
    setIsDragging(true);
    setDragOffset({
      x: touch.clientX - rect.left - node.x,
      y: touch.clientY - rect.top - node.y
    });
  }, [nodes, arrowStart]);

  const handleCanvasTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target === canvasRef.current || target.closest('svg')) {
      if (!isDragging && !editingNode && !arrowStart) {
        const touch = e.touches[0];
        setIsCanvasDragging(true);
        const container = canvasRef.current?.parentElement;
        if (container) {
          setCanvasDragStart({
            x: touch.clientX,
            scrollLeft: container.scrollLeft
          });
        }
      }
    }
  }, [isDragging, editingNode, arrowStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    // Prevent default to avoid scrolling while dragging
    e.preventDefault();
    const touch = e.touches[0];
    
    // Handle canvas scrolling
    if (isCanvasDragging) {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const deltaX = touch.clientX - canvasDragStart.x;
        container.scrollLeft = canvasDragStart.scrollLeft - deltaX;
      }
      return;
    }
    
    // Handle node dragging
    if (!isDragging || !selectedNode) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = snapToGrid(touch.clientX - rect.left - dragOffset.x);
    const y = snapToGrid(touch.clientY - rect.top - dragOffset.y);

    setNodes(prev => prev.map(n => 
      n.id === selectedNode ? { ...n, x, y } : n
    ));
  }, [isDragging, selectedNode, dragOffset, isCanvasDragging, canvasDragStart]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsCanvasDragging(false);
  }, []);

  // Delete arrow
  const deleteArrow = useCallback((arrowId: string) => {
    setArrows(prev => prev.filter(a => a.id !== arrowId));
  }, []);

  // Take screenshot of canvas
  const takeScreenshot = useCallback(() => {
    if (!canvasRef.current) return;
    
    // Create a temporary canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 400;

    // Draw background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw arrows
    arrows.forEach(arrow => {
      const fromNode = nodes.find(n => n.id === arrow.from);
      const toNode = nodes.find(n => n.id === arrow.to);
      if (!fromNode || !toNode) return;

      // Calculate edge points (simplified version)
      const fromCenterX = fromNode.x + 50;
      const fromCenterY = fromNode.y + 20;
      const toCenterX = toNode.x + 50;
      const toCenterY = toNode.y + 20;

      // Draw arrow line
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(fromCenterX, fromCenterY);
      ctx.lineTo(toCenterX, toCenterY);
      ctx.stroke();

      // Draw arrowhead
      const angle = Math.atan2(toCenterY - fromCenterY, toCenterX - fromCenterX);
      ctx.save();
      ctx.translate(toCenterX, toCenterY);
      ctx.rotate(angle);
      ctx.fillStyle = 'rgba(124, 58, 237, 0.8)';
      ctx.beginPath();
      ctx.moveTo(-10, -5);
      ctx.lineTo(0, 0);
      ctx.lineTo(-10, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });

    // Draw nodes
    nodes.forEach(node => {
      // Draw node background
      const gradient = ctx.createLinearGradient(node.x, node.y, node.x + 100, node.y + 40);
      gradient.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
      gradient.addColorStop(1, 'rgba(124, 58, 237, 0.2)');
      ctx.fillStyle = gradient;
      ctx.fillRect(node.x, node.y, 100, 40);

      // Draw node border
      ctx.strokeStyle = selectedNode === node.id ? 'rgba(34, 211, 238, 1)' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(node.x, node.y, 100, 40);

      // Draw node text
      ctx.fillStyle = 'white';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.text, node.x + 50, node.y + 20);
    });

    // Add pattern name watermark
    if (currentPattern) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(currentPattern, 10, 20);
    }

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `architecture-${currentPattern.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  }, [nodes, arrows, selectedNode, currentPattern]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(10, 8, 20, 0.5), rgba(20, 10, 30, 0.3), rgba(10, 8, 20, 0.5))'
      }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Playful title */}
        <div 
          className={`mb-8 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 1rem, 0)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          <SectionTitle 
            title="Proven Architectures"
            subtitle="Check out the architectural patterns I applied on real life projects. You can modify and export them too!"
            isInView={isInView}
          />
        </div>

        {/* Controls */}
        <div 
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 1rem, 0)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
          }}
        >
          <button
            onClick={loadNextPattern}
            className="px-3 sm:px-4 py-2 bg-violet-600/20 hover:bg-violet-600/30 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Next diagram</span>
            <span className="sm:hidden">Next</span>
          </button>
          <button
            onClick={addNode}
            className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base"
          >
            Add Node
          </button>
          {selectedNode && (
            <button
              onClick={() => deleteNode(selectedNode)}
              className="px-3 sm:px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Delete
            </button>
          )}
        </div>

        {/* Canvas Container with horizontal scroll */}
        <div 
          className={`w-full overflow-x-auto overflow-y-hidden ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 2rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Canvas */}
          <div 
            ref={canvasRef}
            className="relative h-[400px] bg-black/40 border border-white/10 rounded-xl mx-auto"
            style={{
              width: '800px',
              minWidth: '800px',
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
              cursor: isCanvasDragging ? 'grabbing' : (isDragging || arrowStart || editingNode) ? 'default' : 'grab',
              touchAction: 'none'
            }}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleCanvasTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
          {/* Pattern name badge */}
          {currentPattern && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg z-10">
              <span className="text-xs text-gray-400">{currentPattern}</span>
            </div>
          )}
          
          {/* Screenshot button */}
          <button
            onClick={takeScreenshot}
            className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-black/80 hover:border-white/20 transition-all duration-300 z-10 group"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Screenshot</span>
            </div>
          </button>
          {/* Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  fill="rgba(124, 58, 237, 0.8)"
                />
              </marker>
            </defs>
            {arrows.map(arrow => {
              const fromNode = nodes.find(n => n.id === arrow.from);
              const toNode = nodes.find(n => n.id === arrow.to);
              if (!fromNode || !toNode) return null;

              // Calculate center points
              const fromCenterX = fromNode.x + 50;
              const fromCenterY = fromNode.y + 20;
              const toCenterX = toNode.x + 50;
              const toCenterY = toNode.y + 20;

              // Calculate angle and distance
              const dx = toCenterX - fromCenterX;
              const dy = toCenterY - fromCenterY;
              const angle = Math.atan2(dy, dx);
              
              // Calculate intersection points with rectangle edges
              // From node edge intersection
              const fromHalfWidth = 50;
              const fromHalfHeight = 20;
              let x1, y1;
              
              // Determine which edge of the from rectangle to use
              const fromTanAngle = Math.abs(Math.tan(angle));
              if (fromTanAngle <= fromHalfHeight / fromHalfWidth) {
                // Intersects with left or right edge
                if (Math.cos(angle) > 0) {
                  x1 = fromCenterX + fromHalfWidth;
                  y1 = fromCenterY + fromHalfWidth * Math.tan(angle);
                } else {
                  x1 = fromCenterX - fromHalfWidth;
                  y1 = fromCenterY - fromHalfWidth * Math.tan(angle);
                }
              } else {
                // Intersects with top or bottom edge
                if (Math.sin(angle) > 0) {
                  x1 = fromCenterX + fromHalfHeight / Math.tan(angle);
                  y1 = fromCenterY + fromHalfHeight;
                } else {
                  x1 = fromCenterX - fromHalfHeight / Math.tan(angle);
                  y1 = fromCenterY - fromHalfHeight;
                }
              }
              
              // To node edge intersection
              const toHalfWidth = 50;
              const toHalfHeight = 20;
              let x2, y2;
              
              // Calculate angle from destination to source (reverse)
              const reverseAngle = angle + Math.PI;
              const toTanAngle = Math.abs(Math.tan(reverseAngle));
              
              if (toTanAngle <= toHalfHeight / toHalfWidth) {
                // Intersects with left or right edge
                if (Math.cos(reverseAngle) > 0) {
                  x2 = toCenterX + toHalfWidth;
                  y2 = toCenterY + toHalfWidth * Math.tan(reverseAngle);
                } else {
                  x2 = toCenterX - toHalfWidth;
                  y2 = toCenterY - toHalfWidth * Math.tan(reverseAngle);
                }
              } else {
                // Intersects with top or bottom edge
                if (Math.sin(reverseAngle) > 0) {
                  x2 = toCenterX + toHalfHeight / Math.tan(reverseAngle);
                  y2 = toCenterY + toHalfHeight;
                } else {
                  x2 = toCenterX - toHalfHeight / Math.tan(reverseAngle);
                  y2 = toCenterY - toHalfHeight;
                }
              }

              return (
                <g key={arrow.id}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(124, 58, 237, 0.5)"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="cursor-pointer transition-all duration-300 hover:stroke-violet-400"
                    style={{
                      pointerEvents: 'stroke'
                    }}
                    onClick={() => deleteArrow(arrow.id)}
                  />
                </g>
              );
            })}
            
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <div
              key={node.id}
              className={`absolute group ${selectedNode === node.id ? 'z-20' : 'z-10'}`}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: 'translate3d(0, 0, 0)',
                transition: isDragging && selectedNode === node.id ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div
                className={`
                  relative w-[100px] h-[40px] 
                  bg-gradient-to-br from-cyan-400/20 to-violet-600/20 
                  border-2 rounded-lg cursor-move
                  flex items-center justify-center
                  ${selectedNode === node.id ? 'border-cyan-400 shadow-lg shadow-cyan-400/30' : 'border-white/30 hover:border-white/50'}
                  ${arrowStart && arrowStart !== node.id ? 'border-cyan-400/50 cursor-pointer' : ''}
                  ${arrowStart === node.id ? 'border-pink-500 shadow-lg shadow-pink-500/30' : ''}
                  transition-all duration-300
                `}
                onMouseDown={(e) => !arrowStart && handleMouseDown(e, node.id)}
                onTouchStart={(e) => !arrowStart && handleTouchStart(e, node.id)}
                onClick={() => arrowStart && handleNodeClick(node.id)}
                onDoubleClick={() => !arrowStart && startEditingNode(node.id, node.text)}
              >
                {editingNode === node.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={saveNodeText}
                    onKeyDown={(e) => e.key === 'Enter' && saveNodeText()}
                    className="w-full px-2 bg-transparent text-white text-xs text-center outline-none"
                    autoFocus
                  />
                ) : (
                  <span className="text-white text-xs px-2 text-center">
                    {node.text}
                  </span>
                )}

                {/* Arrow indicator when this is the start node */}
                {arrowStart === node.id && (
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-pink-500 animate-pulse">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}

                {/* Connection point - visible on hover or when selected */}
                {!arrowStart && (
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 
                      rounded-full cursor-pointer
                      bg-violet-600/50 hover:bg-violet-600
                      border-2 border-white/30
                      ${selectedNode === node.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                      transition-all duration-300
                      w-6 h-6 -right-3 sm:w-4 sm:h-4 sm:-right-2
                    `}
                    onClick={(e) => handleArrowConnection(e, node.id)}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      handleArrowConnection(e, node.id);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Instructions */}
        <div 
          className={`mt-6 text-center text-gray-500 text-sm ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 1rem, 0)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
            minHeight: '20px' // Prevent layout shift
          }}
        >
          {arrowStart ? (
            <span className="text-cyan-400">Click another node to connect</span>
          ) : (
            <span>Drag nodes • Double-click to edit • Click dots to connect • Click arrows to delete</span>
          )}
        </div>
      </div>
    </section>
  );
}