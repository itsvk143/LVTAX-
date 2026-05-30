import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {
  FiDownload,
  FiCheckCircle,
  FiUsers,
  FiFileText,
  FiAward,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
  FiShield,
  FiArrowRight,
  FiPhone,
  FiBriefcase
} from "react-icons/fi";
import { FaStar, FaWhatsapp, FaRegHandshake } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MarqueeNews from "@/components/MarqueeNews";

const Home = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-[#F8FAFC] overflow-x-hidden font-sans">
      <MarqueeNews />

      {/* 1. Hero Section (Left/Right Grid) */}
      <div className="container mx-auto px-4 pt-12 pb-16 xl:pt-20 xl:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center max-w-7xl mx-auto mb-16">

          {/* Left Panel: High-Impact Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
              Serving 1,200+ Clients Across India
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              India's Trusted <br />
              <span className="text-[#00F5A0] bg-gradient-to-r from-[#00F5A0] to-[#38BDF8] bg-clip-text text-transparent">
                Tax & Compliance
              </span> <br />
              Partner
            </h1>

            <p className="text-[#94A3B8] text-lg font-medium tracking-wide uppercase">
              Tax <span className="text-sky-400">•</span> GST <span className="text-sky-400">•</span> MCA <span className="text-sky-400">•</span> ROC <span className="text-sky-400">•</span> Company Secretarial
            </p>

            <p className="text-[#94A3B8] text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Get elite dual-layer support spanning corporate governance, legal secretarial filings, and strategic tax advisory. We ensure seamless regulatory compliance to fuel your growth.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-[#00F5A0] hover:bg-[#00e187] text-[#020617] font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-[#00F5A0]/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Schedule Consultation</span>
                  <FiArrowRight className="text-lg" />
                </Button>
              </Link>
              <Link href="#practices">
                <Button variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 text-[#F8FAFC] px-8 py-6 rounded-full transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Panel: Premium Interactive Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5A0]/10 to-[#38BDF8]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-slate-900 group">
              <div className="absolute inset-0 bg-[#020617]/40 z-10 mix-blend-multiply group-hover:bg-[#020617]/20 transition-all duration-500" />
              <Image
                src="/assets/hero_graphic.png"
                alt="Premium Fintech & Compliance Data Visual"
                fill
                className="scale-100 group-hover:scale-105 transition-all duration-700 opacity-90 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Compliance Index</span>
                  <span className="text-[#00F5A0] font-bold">99.8% Active</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#00F5A0] to-[#38BDF8] h-full w-[99.8%]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Trust Bar (Below Hero) */}
        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-10 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">

            {/* Left: Star Review */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-1">
              <div className="flex gap-1 text-[#00F5A0]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="text-xs text-slate-400 tracking-wider uppercase font-semibold">
                Rated ★★★★★ by Businesses Across India
              </p>
            </div>

            {/* Center: Numeric Badges */}
            <div className="lg:col-span-8 flex flex-wrap justify-center lg:justify-end gap-6 md:gap-12">
              <div className="text-center">
                <span className="text-2xl font-extrabold text-[#F8FAFC]">1,200+</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Clients</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-[#F8FAFC]">2,500+</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Filings</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-[#F8FAFC]">10+ Years</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Experience</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-extrabold text-[#00F5A0]">99.8%</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Success</p>
              </div>
            </div>

          </div>

          {/* Authority Logos representations */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 py-3 px-6 bg-slate-900/40 rounded-2xl border border-white/5 max-w-5xl mx-auto">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mr-4">Authorized Filings & Gateway support:</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5">MCA Portal</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5">GSTN Gateway</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5">Income Tax Dept</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5">MSME Regd</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5">Startup India</span>
          </div>
        </div>
      </div>

      {/* 3. Service Categories Grid */}
      <div id="practices" className="container mx-auto px-4 max-w-7xl mb-28 scroll-mt-24">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Solutions We Provide</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Practice Specializations</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Category 1: Tax & GST */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#00F5A0]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#00F5A0]/10 flex items-center justify-center text-[#00F5A0] text-2xl font-bold group-hover:bg-[#00F5A0]/25 transition-all duration-300">
                <FiTrendingUp />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">Tax & GST</h3>
                <p className="text-xs text-slate-400 font-light">Custom tax strategies, return filings, and regular compliance audits.</p>
              </div>
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>Strategic Tax Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>ITR Filings (Individual & Firm)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>GST Filings & Audit Support</span>
                </li>
              </ul>
            </div>
            <Link href="/services/tax-planning" className="pt-8 block">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Category 2: Corporate Compliance */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#38BDF8]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] text-2xl font-bold group-hover:bg-[#38BDF8]/25 transition-all duration-300">
                <FiBriefcase />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">Corporate Compliance</h3>
                <p className="text-xs text-slate-400 font-light">Incorporations, regulatory filings, and board management services.</p>
              </div>
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#38BDF8] shrink-0" />
                  <span>Company Incorporation</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#38BDF8] shrink-0" />
                  <span>Annual MCA & ROC Filings</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#38BDF8] shrink-0" />
                  <span>Statutory Board Meetings</span>
                </li>
              </ul>
            </div>
            <Link href="/services/company-incorporation" className="pt-8 block">
              <Button className="w-full bg-slate-950 hover:bg-[#38BDF8] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Category 3: Business Advisory */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#00F5A0]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-[#00F5A0] text-2xl font-bold group-hover:bg-emerald-500/25 transition-all duration-300">
                <FaRegHandshake />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F8FAFC]">Business Advisory</h3>
                <p className="text-xs text-slate-400 font-light">Strategic frameworks for startups, LLPs, and growth advisory.</p>
              </div>
              <ul className="space-y-3 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>Startup Advisory & MSME</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>LLP Agreements & Structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#00F5A0] shrink-0" />
                  <span>Secretarial Auditing</span>
                </li>
              </ul>
            </div>
            <Link href="/services" className="pt-8 block">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Learn More
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* 4. Expert Team Section (Authority-First Profiles) */}
      <div className="container mx-auto px-4 max-w-7xl mb-28">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">The Leadership</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Advisory Partners</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Practitioner 1 Card: Vikash Kumar */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between items-center text-center hover:border-[#00F5A0]/20 transition-all duration-500 group shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F5A0]/5 rounded-full blur-[40px]" />

            <div className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] relative mb-6">
              <div className="absolute inset-0 border border-[#00F5A0]/20 rounded-full animate-pulse pointer-events-none" />
              <Photo src="/assets/photo.png" strokeColor="#00F5A0" objectPosition="top" />
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-[10px] text-[#00F5A0] font-bold tracking-widest uppercase bg-[#00F5A0]/10 px-3 py-1 rounded-full">
                Senior Tax Consultant
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00F5A0] transition-colors pt-2">
                Vikash Kumar
              </h3>
              <p className="text-[#94A3B8] text-xs font-mono bg-slate-950 py-1.5 px-3 rounded-md border border-white/5 inline-block">
                Income Tax • GST • Audits
              </p>
            </div>

            <div className="flex-grow w-full max-w-sm mb-6 text-center text-slate-400 text-sm font-light">
              Specialized in legal compliance frameworks, optimizing individual and corporate liability, and guiding firms through complex tax assessments.
            </div>

            <Link href="/contact?expert=vikash" className="w-full">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] hover:text-[#020617] border border-white/5 hover:border-[#00F5A0] text-slate-300 font-bold py-4 rounded-xl transition-all duration-300">
                Consult Vikash
              </Button>
            </Link>
          </div>

          {/* Practitioner 2 Card: CS Jyoti Kiran Tulshyan */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between items-center text-center hover:border-[#38BDF8]/20 transition-all duration-500 group shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 rounded-full blur-[40px]" />

            <div className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] relative mb-6">
              <div className="absolute inset-0 border border-[#38BDF8]/20 rounded-full animate-pulse pointer-events-none" />
              <Photo src="/assets/jyoti_profile.png" strokeColor="#38BDF8" />
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-[10px] text-[#38BDF8] font-bold tracking-widest uppercase bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                Qualified Company Secretary
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors pt-2">
                CS Jyoti Kiran Tulshyan
              </h3>
              <p className="text-[#94A3B8] text-sm">Qualified CS & M.Com</p>
              <p className="text-[#94A3B8] text-xs font-mono bg-slate-950 py-1.5 px-3 rounded-md border border-white/5 inline-block">
                Company Law • ROC • MCA
              </p>
            </div>

            <div className="flex-grow w-full max-w-sm mb-6 text-center text-slate-400 text-sm font-light">
              Handling Company Compliances for over 5 years. Specializes in board resolutions, incorporations, corporate governance advisory, and legal board structures.
            </div>

            <Link href="/contact?expert=jyoti" className="w-full">
              <Button className="w-full bg-slate-950 hover:bg-[#38BDF8] hover:text-[#020617] border border-white/5 hover:border-[#38BDF8] text-slate-300 font-bold py-4 rounded-xl transition-all duration-300">
                Consult CS Jyoti
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* 5. Why Choose Us Section */}
      <div className="bg-slate-900/40 border-y border-slate-900 py-24 mb-28">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-2 mb-16">
            <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Why Businesses Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Distinct Value</h2>
            <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#00F5A0]/10 flex items-center justify-center text-[#00F5A0] text-xl">
                <FiShield />
              </div>
              <h4 className="font-bold text-lg text-slate-100">Dual Expertise</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Simultaneous support for Tax Advisory (Vikash) and Corporate Legal Compliance (CS Jyoti).</p>
            </div>

            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-[#38BDF8] text-xl">
                <FiUsers />
              </div>
              <h4 className="font-bold text-lg text-slate-100">Dedicated Expert</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Work directly with certified specialists, not account managers, ensuring precise resolution.</p>
            </div>

            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#00F5A0]/10 flex items-center justify-center text-[#00F5A0] text-xl">
                <FiClock />
              </div>
              <h4 className="font-bold text-lg text-slate-100">Fast Turnaround</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Rapid digital processing workflows for name approvals, GST issues, and annual MCA returns.</p>
            </div>

            <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-[#38BDF8] text-xl">
                <FiDollarSign />
              </div>
              <h4 className="font-bold text-lg text-slate-100">Transparent Pricing</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Flat upfront consultancy quotes for startups and annual compliance contracts. No hidden charges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Process Flow Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-28">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sleek Compliance Process</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          {/* Step 1 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 text-center relative group">
            <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 text-[#00F5A0] font-bold flex items-center justify-center mx-auto mb-4 border border-[#00F5A0]/40">
              01
            </div>
            <h4 className="font-bold text-lg mb-2">Book Consultation</h4>
            <p className="text-xs text-slate-400 font-light">Schedule a target consultation via phone, WhatsApp, or email form.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 text-center relative group">
            <div className="w-10 h-10 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-bold flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/40">
              02
            </div>
            <h4 className="font-bold text-lg mb-2">Document Review</h4>
            <p className="text-xs text-slate-400 font-light">Quick digital review of financial ledgers or incorporation prerequisites.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 text-center relative group">
            <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 text-[#00F5A0] font-bold flex items-center justify-center mx-auto mb-4 border border-[#00F5A0]/40">
              03
            </div>
            <h4 className="font-bold text-lg mb-2">Expert Analysis</h4>
            <p className="text-xs text-slate-400 font-light">We formulate custom strategy or handle filings securely through government gateways.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 text-center relative group">
            <div className="w-10 h-10 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-bold flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/40">
              04
            </div>
            <h4 className="font-bold text-lg mb-2">Compliance Completed</h4>
            <p className="text-xs text-slate-400 font-light">Get certified filing reports, tax refunds, or dynamic incorporation certificates.</p>
          </div>

        </div>
      </div>

      {/* 7. Client Testimonials Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-28">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Trusted By Dynamic Brands</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#00F5A0]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
              <p className="text-sm italic text-slate-300 leading-relaxed font-light">
                "Vikash Kumar's strategic tax planning saved our business over ₹8 Lakhs in corporate filings and structure planning. Outstanding support!"
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Managing Director</h5>
              <p className="text-xs text-slate-400">ABC Manufacturing Corp</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#00F5A0]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
              <p className="text-sm italic text-slate-300 leading-relaxed font-light">
                "CS Jyoti made our multi-state Pvt Ltd company incorporation and ROC annual filings incredibly smooth. Highly professional secretarial audits."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Tech Startup Founder</h5>
              <p className="text-xs text-slate-400 font-sans">Neopulse Software LLP</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#00F5A0]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
              <p className="text-sm italic text-slate-300 leading-relaxed font-light">
                "Having both Tax Consulting and Corporate secretary support integrated into a single team saved us months of coordinate legal audits."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Retail Partner</h5>
              <p className="text-xs text-slate-400">Zenith Retail Outlets</p>
            </div>
          </div>

        </div>
      </div>

      {/* 8. Resource Center (Outline downloads) */}
      <div className="container mx-auto px-4 max-w-4xl border-t border-slate-900 pt-16 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/assets/incometaxrule.pdf"
            download="Income_Tax_Rules.pdf"
            className="w-full md:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center justify-center gap-2 w-full border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0] hover:text-[#020617] transition-all duration-500 rounded-full py-5 px-8 text-sm"
            >
              <span>Download Tax Rule Books</span>
              <FiDownload className="text-lg" />
            </Button>
          </a>

          <Link href="/assets/jyoti_work.png" target="_blank" className="w-full md:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center justify-center gap-2 w-full border-white/10 text-white hover:bg-white/5 transition-all duration-500 rounded-full py-5 px-8 text-sm"
            >
              <span>View CS Work Experience</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 9. Final CTA Block (Premium Glassmorphism Center) */}
      <div className="container mx-auto px-4 max-w-5xl mb-24">
        <div className="bg-gradient-to-tr from-slate-900 to-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00F5A0]/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-[80px]" />

          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Simplify Your Compliance?
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Book a secure consultation call today. Let our expert partners handle your filings, incorporations, and governance protocols with extreme accuracy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="tel:+918457876843" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#38BDF8] hover:bg-sky-400 text-[#020617] font-bold px-8 py-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <FiPhone className="text-lg" />
                <span>Call An Expert</span>
              </Button>
            </Link>

            <Link href="https://wa.me/918457876843" target="_blank" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 py-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Consult</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
