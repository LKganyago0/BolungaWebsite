import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ServiceCard } from '@/components/sections/service-card';
import { Container } from '@/components/ui/container';
import Robot from '../../../public/image/TabletRobot.png';
import { servicesPreview } from '@/data/home';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Bolunga Systems services for enterprise and product engineering.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center pt-20 pb-0"
        style={{ background: 'linear-gradient(135deg, #1C2237 0%, #3B1F6B 55%, #6B3FA0 100%)', overflow: 'visible' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-8">
                <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Our Professional Line</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="text-[#F7941D]">Engineered for</span>
                <br />
                <span className="text-white">Momentum.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                We don't just provide services; we architect the digital future of your enterprise with engineered precision and kinetic velocity.
              </p>
            </div>
            {/* Robot image positioned to span across hero and core expertise sections */}
            <div className="hidden lg:block absolute pointer-events-none" style={{ bottom: '-150px', right: '5%', width: '42%', height: '700px', zIndex: 20 }}>
              <Image
                src={Robot}
                alt="Professional services robot illustration"
                className="object-contain object-bottom w-full h-full"
                priority
              />
            </div>
            {/* Mobile robot image */}
            <div className="flex lg:hidden justify-center">
              <Image
                src={Robot}
                alt="Professional services robot illustration"
                className="object-contain w-full h-auto max-w-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20" style={{ background: '#F5F0FF' }}>
        <Container className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950">
              Core Expertise
            </h2>
            <p className="text-lg text-slate-600">
              Specialized solutions designed to catalyze growth and secure operational integrity across your entire digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Technology Consulting',
                description: 'Strategic roadmap development to align your tech stack with long-term business objectives.',
              },
              {
                title: 'Cybersecurity Solutions',
                description: 'Enterprise-grade protection frameworks including threat detection and response architectures.',
              },
              {
                title: 'Fiber & Telecommunications',
                description: 'High-performance fiber infrastructure and unified communication services for high-demand environments.',
              },
              {
                title: 'E-waste Management',
                description: 'Sustainable IT asset disposition and ethical recycling programs for modern corporate responsibility.',
              },
              {
                title: 'AI Training & Consultation',
                description: 'Empowering your workforce through hands-on AI literacy and deployment of custom LLM solutions.',
              },
              {
                title: 'Tracking Systems',
                description: 'Real-time asset visibility and logistics management through advanced IoT sensor integration.',
              },
              {
                title: 'Database Services',
                description: 'Scalable architecture, migration, and optimization for legacy and cloud-native databases.',
              },
              {
                title: 'Web Development',
                description: 'Custom scalable development utilizing high-performance frameworks and editorial UI design.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#6B3FA0]/10 mb-4">
                  <svg className="w-6 h-6 text-[#6B3FA0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href="#" className="text-[#6B3FA0] hover:text-[#5a2f80] font-semibold text-sm transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Methodology Section */}
      <section className="py-20 bg-white">
        <Container className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950">
              The Methodology
            </h2>
            <p className="text-lg text-slate-600">
              Our four-stage process ensures every technical deployment is rooted in business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Audit',
                description: 'Deep analysis of current infrastructure and pain points.',
                borderColor: '#6B3FA0',
                numberColor: '#6B3FA0',
              },
              {
                number: '02',
                title: 'Architect',
                description: 'Designing high-momentum systems with zero friction.',
                borderColor: '#F7941D',
                numberColor: '#F7941D',
              },
              {
                number: '03',
                title: 'Deploy',
                description: 'Precision execution with minimal operational downtime.',
                borderColor: '#6B3FA0',
                numberColor: '#6B3FA0',
              },
              {
                number: '03',
                title: 'Optimize',
                description: 'Continuous iteration and scaling based on performance data.',
                borderColor: '#F7941D',
                numberColor: '#F7941D',
              },
            ].map((stage, index) => (
              <div 
                key={index} 
                className="rounded-xl p-8 bg-white border-l-8 hover:shadow-lg transition-all duration-300"
                style={{ borderLeftColor: stage.borderColor }}
              >
                <div className="space-y-4">
                  <h3 
                    className="text-4xl font-black"
                    style={{ color: stage.numberColor }}
                  >
                    {stage.number}
                  </h3>
                  <h4 className="text-xl font-bold text-slate-950">
                    {stage.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>

      </section>

      {/* Systems in Action Section */}
      <section className="py-20" style={{ background: '#6B3FA0' }}>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Systems in Action</h2>
            <p className="text-lg text-white/80 font-medium">
              Real-world impact across diverse industries, from telecommunications giants to boutique tech startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="rounded-2xl bg-[#8B3FFC] p-8 shadow-xl flex flex-col gap-4 min-h-[260px] relative">
              <div className="absolute -top-6 left-6 bg-[#6B3FA0] rounded-full p-2">
                <svg className="w-7 h-7 text-[#F7941D]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17v2h6v-2H3zm0-5v2h12v-2H3zm0-5v2h18V7H3zm16.59 7.41L21 12l-4-4-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.59z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-4">Financial Sector Transformation</h3>
              <p className="text-white/90 text-base font-medium">
                Implemented a multi-layered cybersecurity framework and tracking system for a regional bank, reducing data vulnerability by 85% while optimizing asset logistics.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Cybersecurity</span>
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Tracking Systems</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-[#8B3FFC] p-8 shadow-xl flex flex-col gap-4 min-h-[260px] relative">
              <div className="absolute -top-6 left-6 bg-[#F7941D] rounded-full p-2">
                <svg className="w-7 h-7 text-[#6B3FA0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.285 6.709l-3-3A.996.996 0 0 0 16 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8a.997.997 0 0 0-.293-.707zM17 5.414L18.586 7H17V5.414zM19 19H5V5h10v4h4v10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-4">Industrial Sustainable Scaling</h3>
              <p className="text-white/90 text-base font-medium">
                Overhauled a manufacturing plant’s E-waste lifecycle and network backbone with fiber solutions, resulting in 40% lower hardware waste and gigabit-speed operational monitoring.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">Fiber Tech</span>
                <span className="bg-[#6B3FA0] text-white text-xs font-semibold rounded-full px-3 py-1">E-waste</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-3xl p-16 text-center max-w-4xl mx-auto" style={{ background: '#E0D9FF' }}>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6">
              Ready to Architect Your Future?
            </h2>
            <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Get in touch with our specialist team for a comprehensive audit of your current service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="px-8 py-3 bg-[#6B3FA0] hover:bg-[#5a2f80] text-white font-bold rounded-lg transition-colors duration-300"
              >
                Get A Consultation
              </button>
              <button 
                className="px-8 py-3 bg-white hover:bg-slate-100 text-[#6B3FA0] font-bold rounded-lg border-2 border-[#6B3FA0] transition-colors duration-300"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
