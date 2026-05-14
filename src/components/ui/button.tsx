import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-blue-700'
          : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
        className,
      )}
      {...props}
    />
  );
}
