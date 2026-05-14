'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm font-semibold transition-all relative pb-1',
        isActive ? 'text-[#F7941D]' : 'text-white hover:text-[#F7941D]',
        isActive && 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F7941D]'
      )}
    >
      {label}
    </Link>
  );
}
