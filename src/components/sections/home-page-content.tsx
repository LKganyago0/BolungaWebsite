import Link from 'next/link';

import { FadeIn } from '@/components/animations/fade-in';
import { ContactForm } from '@/components/forms/contact-form';
import { CtaBlock } from '@/components/sections/cta-block';
import { ProjectCard } from '@/components/sections/project-card';
import { ServiceCard } from '@/components/sections/service-card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { featuredProjects, servicesPreview } from '@/data/home';

export function HomePageContent() {
  return (
    <>
      <section className="py-section">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Modern Enterprise Engineering</p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building resilient technology that drives business growth.
              </h1>
              <p className="max-w-xl text-lg text-muted">
                Bolunga Systems crafts modern web platforms, digital products, and scalable engineering ecosystems for
                ambitious organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Start your project</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Explore services</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Company Introduction</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">Engineering confidence for every launch.</h2>
              <p className="mt-4 text-muted">
                We partner with product teams and executives to design, build, and optimize systems that are clean,
                secure, and prepared for long-term evolution.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Services Preview"
            title="End-to-end services for modern organizations"
            description="From discovery to deployment, our teams deliver outcomes with high accountability."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesPreview.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <ServiceCard title={service.title} description={service.description} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work focused on measurable outcomes"
            description="Representative implementation patterns from our consulting and product engagements."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <ProjectCard title={project.title} category={project.category} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for scale, delivered with discipline"
            description="We combine technical depth, business context, and reliable delivery operations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {['Architecture-first approach', 'Transparent communication', 'Long-term maintainability', 'Performance and security by default'].map((point) => (
              <div key={point} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-base font-medium text-slate-900">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock />

      <section className="py-section pt-0">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Contact Preview"
            title="Tell us what you are building"
            description="Share your goals, timeline, and requirements. Our team will respond with a clear next step."
          />
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
