import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function CtaBlock() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl bg-slate-950 px-8 py-10 text-white shadow-soft sm:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold sm:text-3xl">Ready to build with Bolunga Systems?</h2>
              <p className="max-w-2xl text-slate-300">
                Partner with Chester and the team to launch reliable digital systems with measurable impact.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-slate-950 hover:bg-slate-100">Schedule a consultation</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
