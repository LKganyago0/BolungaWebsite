import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  ClipboardList,
  Lightbulb,
  Wrench,
  BarChart2,
  RefreshCw,
  Shield,
  Zap,
  Users,
  Award,
} from 'lucide-react';
import BRobot from '../../../public/image/BlackRobot.png';

export const metadata = {
  title: 'About Us - Bolunga Systems',
  description:
    'Bolunga Systems - Digital Architects Pioneering Evolution in the South African ICT landscape.',
};

const consultingProcess = [
  {
    Icon: Search,
    title: 'Discovery & Assessment',
    description:
      'We begin by deeply understanding your current infrastructure, pain points, and strategic objectives.',
  },
  {
    Icon: ClipboardList,
    title: 'Strategy & Planning',
    description:
      'Our experts craft a tailored roadmap aligned with your business goals and technical requirements.',
  },
  {
    Icon: Lightbulb,
    title: 'Solution Design',
    description:
      'We architect bespoke solutions that balance innovation with reliability and long-term scalability.',
  },
  {
    Icon: Wrench,
    title: 'Implementation',
    description:
      'Precision-driven deployment with minimal disruption, following industry best practices throughout.',
  },
  {
    Icon: BarChart2,
    title: 'Monitoring & Optimisation',
    description:
      'Continuous performance tracking and fine-tuning to ensure your systems operate at peak efficiency.',
  },
  {
    Icon: RefreshCw,
    title: 'Ongoing Support',
    description:
      'Dedicated post-deployment support and iterative improvements to keep you ahead of the curve.',
  },
];

const dnaValues = [
  {
    Icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency and honesty in every engagement.',
  },
  {
    Icon: Zap,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
  },
  {
    Icon: Users,
    title: 'Collaboration',
    description: 'True partnership with our clients, built on trust and shared goals.',
  },
  {
    Icon: Award,
    title: 'Excellence',
    description: 'Uncompromising quality standards across every project we deliver.',
  },
];

const teamMembers = [
  { name: 'Sipho Dlamini', role: 'Chief Executive Officer' },
  { name: 'Ayanda Nkosi', role: 'Head of Cybersecurity' },
  { name: 'Lerato Mokoena', role: 'Lead Telecoms Engineer' },
  { name: 'Thabo Sithole', role: 'Director of Innovation' },
];

const avatarColors = ['#3B1F6B', '#6B3FA0', '#F7941D', '#1C2237'];

function TeamAvatar({ seed }: { seed: number }) {
  const bg = avatarColors[seed % avatarColors.length];
  const initials = teamMembers[seed]?.name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white text-4xl font-black select-none"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1C2237 0%, #3B1F6B 55%, #6B3FA0 100%)' }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Text content — left ~55% */}
            <div className="lg:w-[55%]">
              {/* Badge */}
              <div className="inline-flex items-center border border-white/50 rounded-md px-4 py-1.5 mb-8">
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Digital Architects
                </span>
              </div>

              {/* Heading — stacked lines */}
              <h1 className="font-black leading-tight mb-6">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">Pioneering</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#F7941D]">Evolution.</span>
              </h1>

              {/* Body text */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
                Bolunga Systems isn&#39;t just an ICT provider; we are the kinetic energy behind digital
                transformation, engineering reliability into the core of your telecommunications infrastructure.
              </p>
            </div>

            {/* Footprint card — positioned in the gap between text and robot hand */}
            <div className="hidden lg:block absolute bottom-8 left-[45%] z-10 bg-[#D4E4F7] rounded-xl px-6 py-4 shadow-lg w-max">
              <p className="text-[#6B3FA0] text-xs font-semibold uppercase tracking-widest mb-1">Our Footprint</p>
              <p className="text-[#1C2237] font-bold text-base leading-snug">
                Leading the ICT &amp; Telecom Revolution
              </p>
            </div>

            {/* Robot hand image — right side of hero section */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[40%] h-full pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/image/ChatGPT Image May 11, 2026, 02_34_24 AM.png"
                  alt="Bolunga Systems Digital Innovation"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Mobile: footprint card + image */}
            <div className="flex lg:hidden flex-col items-center gap-6 mt-8">
              <div className="bg-[#D4E4F7] rounded-xl px-6 py-4 shadow-lg w-full max-w-xs">
                <p className="text-[#6B3FA0] text-xs font-semibold uppercase tracking-widest mb-1">Our Footprint</p>
                <p className="text-[#1C2237] font-bold text-base leading-snug">
                  Leading the ICT &amp; Telecom Revolution
                </p>
              </div>
              <div className="relative w-72 h-72">
                <Image
                  src="/image/ChatGPT Image May 11, 2026, 02_21_54 AM"
                  alt="Bolunga Systems Digital Innovation"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bolunga Narrative */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title row — full width, left-aligned */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C2237] mb-3">The Bolunga Narrative</h2>
              <div className="w-16 h-1 bg-[#F7941D] rounded-full" />
            </div>
            {/* Image left, text right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px]">
                  <Image
                    src={BRobot}
                    alt="Bolunga Systems Team Member"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Founded on the principle of technical precision, Bolunga Systems has emerged as a high-end digital
                  architect in the South African ICT landscape. We bridge the gap between traditional reliability and
                  future-ready innovation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey is defined by a relentless pursuit of excellence in cybersecurity, telecommunications,
                  and sustainable E-waste management. We don&#39;t just solve problems; we engineer systems that
                  catalyze growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B3FA0]">Our Consulting Process</h2>
              <p className="text-gray-500 mt-3 max-w-2xl">
                Our consultancy services are becoming more important and thought provoking everyday. From
                Bolunga&#39;s viewpoint of management, our process can be defined or explained in such a way that it
                would help our clients reach their desired goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingProcess.map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#F5F0FF] rounded-xl flex items-center justify-center group-hover:bg-[#6B3FA0] transition-colors duration-300">
                      <step.Icon className="w-5 h-5 text-[#6B3FA0] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-3xl font-black text-gray-100 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1C2237] text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="bg-[#F5F0FF] rounded-2xl p-10 border border-purple-100">
                <div className="w-14 h-14 bg-[#6B3FA0] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C2237] mb-4">Our Mission</h3>
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  &quot;To achieve the reputation of a quality, high standard, and reliable solution and service
                  provider in the ICT and Telecommunications industry.&quot;
                </p>
              </div>
            </div>

            {/* DNA Values */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase text-[#1C2237]">Our DNA</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dnaValues.map((value, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#6B3FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1C2237] mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2237] mb-2">The Digital Architects</h2>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto">
              Our team brings together decades of collective experience in telecommunications, cybersecurity, and
              enterprise infrastructure.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {i === 0 ? (
                      <Image
                        src="/image/MmaS.jpg"
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : i === 1 ? (
                      <Image
                        src="/image/ChesterP.jpg"
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : i === 2 ? (
                      <Image
                        src="/image/MmaS.jpg"
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : i === 3 ? (
                      <Image
                        src="/image/ChesterP.jpg"
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) :(
                      <div className="w-full h-full flex items-center justify-center">
                        <TeamAvatar seed={i} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F6B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div
            className="max-w-5xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #3B1F6B 0%, #6B3FA0 60%, #F7941D 100%)' }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Engineer Your Future?</h2>
            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
              Join the ranks of leading enterprises who have chosen Bolunga Systems as their architectural partner for
              ICT excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7941D] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Get A Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
