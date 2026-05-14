import type { Metadata } from 'next';

import { ContactForm } from '@/components/forms/contact-form';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Bolunga Systems to discuss your next project.',
};

export default function ContactPage() {
  return (
    <section className="py-section">
      <Container className="grid gap-8 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Contact"
          title="Speak with the Bolunga Systems team"
          description="We respond quickly with a practical plan and recommended engagement format."
        />
        <ContactForm />
      </Container>
    </section>
  );
}
