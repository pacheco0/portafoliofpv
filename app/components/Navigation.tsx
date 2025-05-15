'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useBackgroundMode } from './BackgroundContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { mode, toggleMode } = useBackgroundMode();
  const isLight = mode === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white shadow-md'
            : 'bg-black/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Fernando Pacheco
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className={`${isLight ? 'text-gray-900 hover:text-blue-600 drop-shadow-none' : 'text-white hover:text-blue-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'}`}>About</Link>
              <Link href="#skills" className={`${isLight ? 'text-gray-900 hover:text-blue-600 drop-shadow-none' : 'text-white hover:text-blue-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'}`}>Skills</Link>
              <Link href="#projects" className={`${isLight ? 'text-gray-900 hover:text-blue-600 drop-shadow-none' : 'text-white hover:text-blue-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'}`}>Projects</Link>
              <Link href="#contact" className={`${isLight ? 'text-gray-900 hover:text-blue-600 drop-shadow-none' : 'text-white hover:text-blue-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'}`}>Contact</Link>
            </div>
            <button
              onClick={toggleMode}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`ml-4 p-2 rounded-full border transition ${isLight ? 'bg-white border-gray-800 text-gray-800 hover:bg-gray-100' : 'bg-black/30 border-transparent text-white hover:bg-blue-400/30'}`}
            >
              {isLight ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 