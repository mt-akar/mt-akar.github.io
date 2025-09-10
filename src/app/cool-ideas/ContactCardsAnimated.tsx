'use client';

import { useCallback } from 'react';
import { Mail, MessageSquare, Calendar, Linkedin, Twitter, Send } from 'lucide-react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  responseTime: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'Direct line for detailed discussions',
    icon: Mail,
    href: 'mailto:m@akar.im',
    color: 'cyan',
    responseTime: 'Response time: < 24 hours',
  },
  {
    id: 'calendar',
    title: 'Book a Call',
    description: 'Schedule a 15-minute intro call',
    icon: Calendar,
    href: 'https://calendly.com/m-akar',
    color: 'pink',
    responseTime: 'Calendly - Next available slot',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Professional networking and updates',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/m-akar/',
    color: 'blue',
    responseTime: 'Response time: < 24 hours',
  },
  {
    id: 'discord',
    title: 'Discord',
    description: 'Quick chats and real-time collaboration',
    icon: MessageSquare,
    href: 'https://discord.com/users/232187411386335232',
    color: 'violet',
    responseTime: 'Response time: < 24 hours',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    description: 'Quick messages and updates',
    icon: Send,
    href: 'https://t.me/mtfakar',
    color: 'sky',
    responseTime: 'Response time: < 24 hours',
  },
  {
    id: 'twitter',
    title: 'X (Twitter)',
    description: 'Public discussions and thoughts',
    icon: Twitter,
    href: 'https://x.com/mtf_akar',
    color: 'gray',
    responseTime: 'Public platform',
  },
];

interface ContactCardsAnimatedProps {
  onHoverMethod: (method: string | null) => void;
  isInView: boolean;
}

export default function ContactCardsAnimated({ onHoverMethod, isInView }: ContactCardsAnimatedProps) {

  const handleCardClick = useCallback((method: ContactMethod) => {
    if (method.id === 'email') {
      window.location.href = method.href;
    } else {
      window.open(method.href, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const colorClasses = {
    cyan: 'from-cyan-400/30 via-cyan-500/20 to-blue-600/30 group-hover:from-cyan-400/40 group-hover:via-cyan-500/30 group-hover:to-blue-600/40',
    blue: 'from-blue-400/30 via-indigo-500/20 to-purple-600/30 group-hover:from-blue-400/40 group-hover:via-indigo-500/30 group-hover:to-purple-600/40',
    violet: 'from-violet-400/30 via-purple-500/20 to-pink-600/30 group-hover:from-violet-400/40 group-hover:via-purple-500/30 group-hover:to-pink-600/40',
    gray: 'from-slate-400/30 via-gray-500/20 to-zinc-600/30 group-hover:from-slate-400/40 group-hover:via-gray-500/30 group-hover:to-zinc-600/40',
    pink: 'from-pink-400/30 via-rose-500/20 to-red-600/30 group-hover:from-pink-400/40 group-hover:via-rose-500/30 group-hover:to-red-600/40',
    sky: 'from-sky-400/30 via-cyan-500/20 to-teal-600/30 group-hover:from-sky-400/40 group-hover:via-cyan-500/30 group-hover:to-teal-600/40',
  };

  const iconColorClasses = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    violet: 'text-violet-400',
    gray: 'text-gray-400',
    pink: 'text-pink-400',
    sky: 'text-sky-400',
  };

  return (
    <>
      {/* Contact Method Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <MagneticCard
              key={method.id}
              method={method}
              Icon={Icon}
              index={index}
              isInView={isInView}
              onHoverMethod={onHoverMethod}
              handleCardClick={handleCardClick}
              colorClasses={colorClasses}
              iconColorClasses={iconColorClasses}
            />
          );
        })}
      </div>
    </>
  );
}

// Separate component for each card to handle its own magnetic effect
function MagneticCard({ 
  method, 
  Icon, 
  index, 
  isInView, 
  onHoverMethod, 
  handleCardClick,
  colorClasses,
  iconColorClasses
}: {
  method: ContactMethod;
  Icon: any;
  index: number;
  isInView: boolean;
  onHoverMethod: (method: string | null) => void;
  handleCardClick: (method: ContactMethod) => void;
  colorClasses: any;
  iconColorClasses: any;
}) {
  const magnetic = useMagneticEffect({
    strength: 0.3,
    maxDistance: 250
  });

  return (
    <div
      ref={magnetic.ref}
      className={`group relative cursor-pointer transition-opacity duration-700 w-full ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${0.4 + index * 0.1}s`,
        ...magnetic.style
      }}
      onMouseEnter={() => onHoverMethod(method.id)}
      onMouseLeave={() => onHoverMethod(null)}
      onClick={() => handleCardClick(method)}
    >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[method.color as keyof typeof colorClasses]} rounded-2xl transition-all duration-500 blur-sm group-hover:blur-none`} />
              
              {/* Additional Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${colorClasses[method.color as keyof typeof colorClasses]} rounded-2xl opacity-50 group-hover:opacity-70 transition-all duration-500`} />
              
              {/* Glass Effect Border with enhanced glow */}
              <div className="absolute inset-0 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 group-hover:border-white/30 transition-all duration-300" />
              
              {/* Card Content */}
              <div className="relative p-6 space-y-4">
                {/* Icon Container with gradient */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center ${iconColorClasses[method.color as keyof typeof iconColorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 drop-shadow-lg" />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold text-white transition-all duration-300 ${
                  method.color === 'cyan' ? 'group-hover:text-cyan-400' :
                  method.color === 'blue' ? 'group-hover:text-blue-400' :
                  method.color === 'violet' ? 'group-hover:text-violet-400' :
                  method.color === 'gray' ? 'group-hover:text-gray-400' :
                  method.color === 'pink' ? 'group-hover:text-pink-400' :
                  method.color === 'sky' ? 'group-hover:text-sky-400' :
                  'group-hover:text-white'
                }`}>
                  {method.title}
                </h3>
                
                {/* Response Time */}
                <p className="text-sm text-gray-400">
                  {method.responseTime}
                </p>
                
                
                {/* Hover Action Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Send className="w-4 h-4 text-white/50" />
                </div>
              </div>
            </div>
  );
}