'use client';

import React from 'react';
import Link from 'next/link';
import { Home, User, FolderGit2, Briefcase, Image, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Projects', icon: FolderGit2, href: '#projects' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const socialItems = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/harkiratchahal' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/harkirat-chahal-66515925a/' },
];

export const Sidebar = () => {
  const [active, setActive] = React.useState('Home');

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col p-6 hidden md:flex"
    >
      <div className="mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neon-green flex items-center justify-center">
          <span className="text-black font-bold text-xl">P</span>
        </div>
        <span className="text-white font-bold text-xl hidden md:block">Portfolio</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            onClick={() => setActive(item.name)}
            className={cn(
              "flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-300 group",
              active === item.name 
                ? "bg-white/10 text-white" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-6 h-6 transition-colors",
              active === item.name ? "text-neon-green" : "group-hover:text-white"
            )} />
            <span className="font-medium hidden md:block">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
        {socialItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-4 py-2 text-gray-400 hover:text-white transition-colors group"
          >
            <item.icon className="w-5 h-5 group-hover:text-neon-green" />
            <span className="text-sm hidden md:block">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.aside>
  );
};
