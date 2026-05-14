import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

import { Container } from '../ui/container';

export function Footer() {
  return (
    <footer 
      className="text-white py-16"
      style={{ background: 'linear-gradient(135deg, #1C2237 0%, #3B1F6B 55%, #6B3FA0 100%)' }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-[#F7941D]">◆</span> Bolunga
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Engineering reliable Momentum for the world's most ambitious organizations.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-[#F7941D] transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  Telecommunications
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  E-Waste
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#F7941D] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Get tech insights delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-l-lg text-slate-950 text-sm placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#6B3FA0] hover:bg-[#5a2f80] px-4 py-2 rounded-r-lg text-white font-semibold transition-colors text-sm"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm text-center">
            © 2024 Bolunga Systems. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
