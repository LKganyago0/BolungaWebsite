import { ArrowRight } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Card>
  );
}
