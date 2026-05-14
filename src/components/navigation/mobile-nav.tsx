'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { siteConfig } from '@/constants/site';

import { Button } from '../ui/button';
import { NavLink } from './nav-link';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="outline" aria-label="Toggle menu" onClick={() => setOpen((state) => !state)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-0 right-0 top-20 z-50 border-y border-slate-200 bg-white p-6 shadow-soft"
          >
            <nav className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
