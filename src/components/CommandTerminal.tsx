'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal } from 'lucide-react';

interface Command {
  input: string;
  output: string | string[];
}

const COMMANDS: { [key: string]: string | string[] | (() => string | string[]) } = {
  help: [
    'Available commands:',
    '  whoami       - Learn about Mustafa Akar',
    '  projects     - View recent projects',
    '  skills       - Technical expertise',
    '  availability - Current availability status',
    '  contact      - Get contact information',
    '  surprise-me  - Random fact or easter egg',
    '  clear        - Clear terminal',
    '  exit         - Close terminal'
  ],
  whoami: [
    'Mustafa Akar',
    'Builder • Systems Thinker • Mentor',
    '',
    'I design dependable systems that scale human impact.',
    'Specializing in AI, Web3, Cloud Architecture, and UX.',
    '',
    'Type "projects" to see what I\'ve built.'
  ],
  projects: [
    'Recent Projects:',
    '',
    '• Cointribute - Web3 collaboration platform',
    '• InclusAI - AI-powered accessibility tools',
    '• RPC Studio - Blockchain development environment',
    '',
    'Type "contact" to discuss your project.'
  ],
  skills: [
    'Technical Stack:',
    '',
    'Languages: TypeScript, Python, Rust, Go',
    'Frontend: React, Next.js, Vue, Three.js',
    'Backend: Node.js, FastAPI, GraphQL',
    'Cloud: AWS, GCP, Kubernetes, Docker',
    'AI/ML: TensorFlow, PyTorch, LangChain',
    'Blockchain: Ethereum, Solana, Web3.js',
    '',
    'Type "availability" to check my current status.'
  ],
  availability: () => {
    const hour = new Date().getHours();
    const isWorkingHours = hour >= 9 && hour < 18;
    return [
      'Current Status:',
      '',
      isWorkingHours 
        ? '🟢 Available for consultation'
        : '🟡 Outside regular hours (but feel free to reach out)',
      '',
      'Response time: < 24 hours',
      'Booking: calendly.com/m-akar',
      '',
      'Type "contact" for all contact methods.'
    ];
  },
  contact: [
    'Contact Methods:',
    '',
    '📧 Email: m@akar.im',
    '💼 LinkedIn: linkedin.com/in/m-akar',
    '💬 Discord: @m.akar',
    '🐙 GitHub: github.com/mt-akar',
    '📅 Calendar: calendly.com/m-akar',
    '',
    'I respond fastest via email.'
  ],
  'surprise-me': () => {
    const surprises = [
      ['🎮 Fun fact: I speedrun code reviews.'],
      ['🚀 I once deployed to production on a Friday... and nothing broke!'],
      ['☕ My code runs on coffee and determination.'],
      ['🎯 Achievement unlocked: You found the terminal!'],
      ['💡 "The best code is no code." - But here we are...'],
      ['🏗️ Currently building: The future, one commit at a time.'],
      ['🎪 Welcome to the developer circus! I\'m the juggler.'],
    ];
    return surprises[Math.floor(Math.random() * surprises.length)];
  },
  clear: 'CLEAR',
  exit: 'EXIT',
  
  // Hidden easter eggs
  'sudo rm -rf /': ['Nice try! 😄 This isn\'t that kind of terminal.'],
  'hack': ['I\'m in! Just kidding. Try "help" for real commands.'],
  'coffee': ['☕ Here\'s your virtual coffee! Now we can build anything.'],
  'vim': [':q!', 'Just kidding. This isn\'t vim. You\'re safe.'],
  'emacs': ['C-x C-c', 'Wrong editor war. Try "vim" instead.'],
  '42': ['The answer to life, the universe, and everything!'],
  'ping': ['pong! 🏓'],
  'hello': ['Hello there! 👋 Type "help" to get started.'],
};

export default function CommandTerminal() {
  const [isOpen, setIsOpen] = useState(true);
  const [history, setHistory] = useState<Command[]>([
    { input: '', output: ['Welcome to mustafa@akar terminal v1.0.0', 'Type "help" for available commands.', ''] }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;
    
    let output: string | string[];
    
    if (trimmedInput === 'clear') {
      setHistory([{ input: '', output: ['Terminal cleared.', ''] }]);
      return;
    }
    
    if (trimmedInput === 'exit') {
      setIsOpen(false);
      return;
    }
    
    const command = COMMANDS[trimmedInput];
    
    if (command) {
      output = typeof command === 'function' ? command() : command;
    } else {
      output = [`Command not found: ${trimmedInput}`, 'Type "help" for available commands.'];
    }
    
    setHistory(prev => [...prev, { input, output }]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(currentInput);
    setCurrentInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commandHistory = history.filter(h => h.input).map(h => h.input);
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const commandHistory = history.filter(h => h.input).map(h => h.input);
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-xl border border-cyan-400/30 rounded-lg hover:border-cyan-400/60 transition-all duration-300 group"
        aria-label="Open terminal"
      >
        <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="text-cyan-400 text-sm">Reopen Terminal</span>
      </button>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-black/80 border-b border-cyan-400/20">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-mono">mustafa@akar:~$</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => executeCommand('clear')}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"
                aria-label="Close terminal"
              />
            </div>
          </div>
          
          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-4 h-80 overflow-y-auto font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.input && (
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">$</span>
                    <span className="text-white">{entry.input}</span>
                  </div>
                )}
                <div className="text-gray-300 whitespace-pre-wrap">
                  {Array.isArray(entry.output) 
                    ? entry.output.map((line, i) => (
                        <div key={i} className={line.startsWith('  ') ? 'text-gray-400' : ''}>
                          {line || '\u00A0'}
                        </div>
                      ))
                    : entry.output
                  }
                </div>
              </div>
            ))}
            
            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="flex items-start gap-2">
              <span className="text-cyan-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none caret-cyan-400"
                placeholder="Type 'help' for commands..."
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}