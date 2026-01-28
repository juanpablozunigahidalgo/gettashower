'use client';

import { TrendingUp, Zap, Building2, Mail, Youtube, Instagram } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '15.6M',
    label: 'Annual Tourists',
    sublabel: 'Barcelona 2025',
  },
  {
    icon: Zap,
    value: '70%',
    label: 'Target Gross Margin',
    sublabel: 'Infrastructure-as-a-Service',
  },
  {
    icon: Building2,
    value: 'Zero',
    label: 'CAPEX Expansion',
    sublabel: 'Asset-light model',
  },
];

export default function Invest() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            The Urban Infrastructure{' '}
            <span className="text-[#0066FF]">Opportunity.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transforming idle gym capacity into a global network of on-demand hygiene infrastructure.
            A capital-efficient play on the future of urban living.
          </p>
        </div>
      </section>

      {/* Bento Grid Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#0066FF] rounded-2xl flex items-center justify-center mb-6">
                  <metric.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-6xl font-bold tracking-tight mb-3 text-[#0066FF]">
                  {metric.value}
                </div>
                <div className="text-xl font-bold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-12 text-center">
            Infrastructure-as-a-Service
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              GettaShower is building the first urban hygiene infrastructure layer—a marketplace
              that unlocks dormant capacity in fitness centers and transforms it into accessible
              "Refresh Nodes" for the modern traveler and urban nomad.
            </p>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">The Model</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Zero CAPEX:</strong> We don't build gyms. We unlock existing infrastructure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Network Effects:</strong> Every new node increases discoverability for all partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>High Margins:</strong> Pure software with transaction fees—minimal operational overhead.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Lead Gen (REEMPLAZADO) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-[3rem] p-16 text-white shadow-xl">
            <h2 className="text-5xl font-bold mb-6">Curious about the project?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Do not hesitate to ask for the <strong>investor desk</strong>. 
              Drop us an email or follow our journey as we build the future of urban freedom.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Email Button */}
              <a 
                href="mailto:info@gettashower.com" 
                className="flex items-center gap-3 bg-white text-[#0066FF] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-6 h-6" />
                info@gettashower.com
              </a>

              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.youtube.com/@GettaShower" 
                  target="_blank" 
                  className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                >
                  <Youtube className="w-7 h-7 text-white" />
                </a>
                <a 
                  href="https://instagram.com/gettashower" 
                  target="_blank" 
                  className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}