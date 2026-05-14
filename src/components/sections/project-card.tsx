import { Card } from '@/components/ui/card';

export function ProjectCard({ title, category }: { title: string; category: string }) {
  return (
    <Card className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{category}</p>
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="text-sm text-muted">A high-impact delivery case focused on speed, scale, and reliability.</p>
    </Card>
  );
}
