'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Voluntary', href: '/voluntary' },
  { label: 'Certificates', href: '/certificates' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/30 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Portrait and Name */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            {/* Small Portrait */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="w-full h-full rounded-[40%_60%_50%_50%/60%_30%_70%_40%] 
                            bg-gradient-to-br from-cyan-400/20 via-violet-600/20 to-pink-600/20 
                            backdrop-blur-xl border border-white/10 shadow-lg
                            overflow-hidden relative
                            transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/pictures/mustafa-akar-portrait.webp" 
                  alt="Mustafa Akar" 
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
            </div>
            
            {/* Name - hidden on mobile */}
            <div className="hidden sm:block">
              <h1 className="text-white font-semibold text-lg">Mustafa Akar</h1>
            </div>
          </Link>

          {/* Center/Right: Navigation */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${pathname === item.href
                        ? 'bg-white/10 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
          }
        `}>
          <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
            <ul className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                      ${pathname === item.href
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}