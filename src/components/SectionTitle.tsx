'use client';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isInView?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, isInView = true, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-8 lg:mb-12 ${className}`}>
      <div 
        className={`
          inline-block transform transition-all duration-1000
          ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {subtitle && (
          <p className="text-lg lg:text-xl text-gray-400 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}