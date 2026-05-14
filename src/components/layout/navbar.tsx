'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

import { siteConfig } from '@/constants/site';

import { MobileNav } from '../navigation/mobile-nav';
import { NavLink } from '../navigation/nav-link';
import { Button } from '../ui/button';
import { Container } from '../ui/container';

export function Navbar() {
  return (
    <header 
      className="sticky top-0 z-40"
      style={{ background: 'linear-gradient(135deg, #1C2237 0%, #3B1F6B 55%, #6B3FA0 100%)' }}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          <span className="flex items-center gap-2">
            <span className="text-[#F7941D]">◆</span> Bolunga
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.slice(0, 4).map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Button className="bg-[#F7941D] hover:bg-orange-600 text-white font-semibold px-6 py-2">
            Request Quote
          </Button>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
