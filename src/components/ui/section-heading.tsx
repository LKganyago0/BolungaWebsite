import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: ReactNode }) {
  return (
    <header className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-muted sm:text-lg">{description}</p> : null}
    </header>
  );
}
