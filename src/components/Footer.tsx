'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: 'Dashboard', href: '/', external: false },
      { name: 'Work', href: '/work', external: false },
      { name: 'Education', href: '/education', external: false },
      { name: 'Projects', href: '/projects', external: false },
      { name: 'Voluntary', href: '/voluntary', external: false },
      { name: 'Certificates', href: '/certificates', external: false }
    ],
    Services: [
      { name: 'Advisory', href: '/services#advisory', external: false },
      { name: 'Consulting', href: '/services#consulting', external: false },
      { name: 'Development', href: '/services#development', external: false },
      { name: 'Speaking', href: '/speaking', external: false }
    ],
    Resources: [
      { name: 'Blog', href: '/blog', external: false },
      { name: 'Case Studies', href: '/case-studies', external: false },
      { name: 'Press Kit', href: '/press', external: false },
      { name: 'CV/Resume', href: '/public/docs/mustafa-akar-cv.pdf' }
    ],
    Contact: [
      { name: 'Email', href: 'mailto:m@akar.im', external: false },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/m-akar/', external: true },
      { name: 'Discord', href: 'https://discord.com/users/232187411386335232', external: true }
    ]
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* About Column - Takes different spans based on screen size */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-4">Mustafa Akar</h3>
            <p className="text-gray-400 text-sm leading-relaxed lg:pr-4">
              This portfolio captures my journey through every stage of the software and product lifecycle. 
              I've been grateful for the opportunity to work alongside so many brilliant domain experts and the opportunity to mentor so many talented people.
              I strive for making a meaningful impact through what I have been given the privilege to do.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Mustafa Akar. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="mailto:m@akar.im"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <div className="w-4 h-4 bg-white/50 rounded-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/m-akar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-4 h-4 bg-white/50 rounded-sm" />
              </a>
              <a
                href="https://discord.com/users/232187411386335232"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Discord"
              >
                <div className="w-4 h-4 bg-white/50 rounded" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}