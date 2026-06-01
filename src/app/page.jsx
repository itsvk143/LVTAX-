"use client";

import React, { useState, useEffect } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
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
  FiBriefcase,
  FiLock,
  FiMapPin,
  FiChevronDown
} from "react-icons/fi";
import { FaStar, FaWhatsapp, FaRegHandshake } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MarqueeNews from "@/components/MarqueeNews";

// FAQ Data
const faqs = [
  {
    question: "How long does a new GST registration take?",
    answer: "A new GST registration typically takes 3 to 7 working days, depending on the government portal's processing speed and verification of the uploaded documents."
  },
  {
    question: "Can I file revised income tax returns (ITR) if I made a mistake?",
    answer: "Yes, you can file a revised return under Section 139(5) of the Income Tax Act if you notice any omission or wrong statement in your originally filed return. This must be done before the end of the relevant Assessment Year."
  },
  {
    question: "What documents are required to start a Private Limited Company?",
    answer: "You will need identity proofs (PAN card, Aadhaar card/Passport) of directors, address proofs (Bank statement/Electricity bill), passport size photos, and proof of registered office address (NOC from landlord along with utility bill)."
  },
  {
    question: "What happens if I miss the ITR filing due date of 31st July?",
    answer: "Filing after July 31st attracts late fees up to ₹5,000 under Section 234F, interest on any unpaid tax liability, and you lose the benefit of carrying forward certain business/capital losses."
  }
];

const Home = () => {
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Lead Form State
  const [heroFormData, setHeroFormData] = useState({ name: "", phone: "", service: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Calculate Countdown (Dynamic July 31st of the current/next tax year)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear();
      let targetDate = new Date(`July 31, ${currentYear} 23:59:59`);
      
      // If July 31st of current year has passed, target next year's
      if (new Date() > targetDate) {
        targetDate = new Date(`July 31, ${currentYear + 1} 23:59:59`);
      }
      
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Form Submit Handler (Linked to live verified Google Sheet URL)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!heroFormData.name || !heroFormData.phone || !heroFormData.service) {
      alert("Please fill all form fields.");
      return;
    }
    setFormStatus("submitting");
    try {
      const url = "https://script.google.com/macros/s/AKfycbxgHdcxZt2rJnsc2UjfSRwWM10VH-ZaGehvhTOgBIhOiTMMmEudyFXcggMIIqWy_mai/exec";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          firstName: heroFormData.name,
          lastName: "(Request Hero Form)",
          email: "no-email@provided.com",
          phone: heroFormData.phone,
          service: heroFormData.service,
          message: `In-Hero lead: Please callback regarding ${heroFormData.service}`
        }),
        mode: "no-cors",
      });
      
      setFormStatus("success");
      setHeroFormData({ name: "", phone: "", service: "" });
      alert("Your free consultation request is submitted successfully! Our expert will contact you within 30 minutes.");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      alert("Failed to submit request. Please call or WhatsApp us directly.");
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-slate-950 text-[#F8FAFC] overflow-x-hidden font-sans relative">
      
      {/* 1. Dynamic Urgent Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600/90 to-amber-600/90 py-2.5 px-4 text-center text-xs font-semibold tracking-wider flex flex-wrap justify-center items-center gap-2 border-b border-red-500/20 shadow-md">
        <span className="bg-slate-950/40 px-2 py-0.5 rounded text-[10px] uppercase font-bold animate-pulse text-amber-300">
          Urgent Tax Season Update
        </span>
        <span>ITR Filing Deadline: <strong>July 31st</strong></span>
        <span className="text-white/80">|</span>
        <div className="flex gap-1.5 items-center font-mono">
          <span className="bg-slate-950/80 px-1.5 py-0.5 rounded text-white">{timeLeft.days}d</span>:
          <span className="bg-slate-950/80 px-1.5 py-0.5 rounded text-white">{timeLeft.hours}h</span>:
          <span className="bg-slate-950/80 px-1.5 py-0.5 rounded text-white">{timeLeft.minutes}m</span>:
          <span className="bg-slate-950/80 px-1.5 py-0.5 rounded text-red-400">{timeLeft.seconds}s</span>
          <span className="text-[11px] font-sans font-normal text-amber-200">Remaining</span>
        </div>
      </div>

      <MarqueeNews />

      {/* 2. Hero Section (Includes Direct Lead Capture Form) */}
      <div className="container mx-auto px-4 pt-12 pb-16 xl:pt-20 xl:pb-24 relative z-10">
        
        {/* Background Grid Pattern & Glowing Orbs */}
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-[#00F5A0]/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-5%] w-[45%] h-[45%] bg-[#38BDF8]/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center max-w-7xl mx-auto mb-16">

          {/* Left Column: High Impact Content & Reviews */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google Reviews Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <span className="text-white text-xs font-bold ml-1">4.9/5</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <p className="text-xs text-slate-300 font-medium">
                Based on <strong className="text-[#00F5A0]">500+ Google Reviews</strong> across India
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.15] tracking-tight">
              India's Trusted <br />
              <span className="text-[#00F5A0] bg-gradient-to-r from-[#00F5A0] to-[#38BDF8] bg-clip-text text-transparent">
                Tax & Compliance
              </span> <br />
              Partner
            </h1>

            <p className="text-[#94A3B8] text-base md:text-lg font-medium tracking-wide uppercase">
              Tax <span className="text-sky-400">•</span> GST <span className="text-sky-400">•</span> MCA <span className="text-sky-400">•</span> ROC <span className="text-sky-400">•</span> Company Law
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Get corporate-grade dual support spanning company incorporation, GST accounting, legal audit filings, and strategic tax planning. We protect your company from penalties and scale your wealth.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="https://wa.me/918457876843" target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  <span>Chat With Tax Expert</span>
                </Button>
              </Link>
              <Link href="#practices" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5 text-[#F8FAFC] px-8 py-6 rounded-full transition-all duration-300">
                  Explore Specialties
                </Button>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><FiLock className="text-[#00F5A0]" /> 100% Confidential Data Handling</span>
              <span className="flex items-center gap-1.5"><FiCheckCircle className="text-[#38BDF8]" /> Response within 30 Minutes</span>
            </div>
          </div>

          {/* Right Column: Hero High-Conversion Lead Capture Form */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F5A0]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-4">
              <div className="space-y-1 text-center">
                <span className="text-[#00F5A0] text-xs font-bold uppercase tracking-wider block">Limited Free Consultations Today</span>
                <h3 className="text-xl font-bold text-slate-100">Get Free Tax Consultation</h3>
                <p className="text-xs text-slate-400">Submit your mobile number for a callback within 30 mins.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={heroFormData.name}
                    onChange={(e) => setHeroFormData({ ...heroFormData, name: e.target.value })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl h-11 px-4 text-sm text-white placeholder:text-gray-500 focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    placeholder="10-digit mobile number"
                    value={heroFormData.phone}
                    onChange={(e) => setHeroFormData({ ...heroFormData, phone: e.target.value.replace(/[^0-9]/g, "") })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl h-11 px-4 text-sm text-white placeholder:text-gray-500 focus:border-[#00F5A0] focus:ring-1 focus:ring-[#00F5A0] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Service Required</label>
                  <select
                    required
                    value={heroFormData.service}
                    onChange={(e) => setHeroFormData({ ...heroFormData, service: e.target.value })}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl h-11 px-4 text-sm text-slate-300 focus:border-[#00F5A0] outline-none transition-all"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Income Tax Return">Income Tax Return Filing</option>
                    <option value="GST Services">GST Return & Registration</option>
                    <option value="Company Incorporation">Company & LLP Incorporation</option>
                    <option value="Annual Compliance">ROC & MCA Compliance</option>
                    <option value="Tax Planning">Tax Planning & Advisory</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-gradient-to-r from-[#00F5A0] to-[#38BDF8] hover:from-[#00e187] hover:to-sky-400 text-[#020617] font-black h-12 rounded-xl mt-4 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  {formStatus === "submitting" ? "Sending Request..." : "Get Free Consultation"}
                </Button>
              </form>

              <div className="pt-2 text-center text-[10px] text-slate-500">
                🔒 Your privacy is 100% protected. No spam.
              </div>
            </div>
          </div>

        </div>

        {/* 3. Real Faces / Authority Profiles (Builds Instant Trust) */}
        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-16 mt-16">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">People Behind the Service</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Meet Our Partners & Advisory Experts</h2>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">Get advisory directly from licensed CAs, Senior Tax Consultants, and CS professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Consultant 1: Vikash Kumar */}
            <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6 hover:border-[#00F5A0]/20 transition-all duration-500 group shadow-xl">
              <div className="w-[120px] h-[120px] relative shrink-0">
                <div className="absolute inset-0 border border-[#00F5A0]/20 rounded-full animate-pulse" />
                <Photo src="/assets/photo.png" strokeColor="#00F5A0" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] text-[#00F5A0] font-bold tracking-widest uppercase bg-[#00F5A0]/10 px-2.5 py-1 rounded-full">
                  Senior Tax Consultant
                </span>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-[#00F5A0] transition-colors">
                  Vikash Kumar
                </h4>
                <p className="text-xs text-slate-400 font-medium">10+ Years Experience | GST & ITR Expert</p>
                <p className="text-xs text-slate-500 font-light">
                  Spearheads strategic tax auditing, corporate liability restructuring, and litigation representation.
                </p>
              </div>
            </div>

            {/* Consultant 2: CS Jyoti */}
            <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6 hover:border-[#38BDF8]/20 transition-all duration-500 group shadow-xl">
              <div className="w-[120px] h-[120px] relative shrink-0">
                <div className="absolute inset-0 border border-[#38BDF8]/20 rounded-full animate-pulse" />
                <Photo src="/assets/jyoti_profile.png" strokeColor="#38BDF8" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] text-[#38BDF8] font-bold tracking-widest uppercase bg-[#38BDF8]/10 px-2.5 py-1 rounded-full">
                  Qualified Company Secretary
                </span>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-[#38BDF8] transition-colors">
                  CS Jyoti Kiran Tulshyan
                </h4>
                <p className="text-xs text-slate-400 font-medium">Qualified CS & M.Com | 5+ Years Exp</p>
                <p className="text-xs text-slate-500 font-light">
                  Expertise in ROC governance, company incorporation, statutory compliance audits, and secretarial matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Credentials & Authority Logos */}
        <div className="max-w-7xl mx-auto mt-16 py-4 px-6 bg-slate-900/40 rounded-2xl border border-white/5 text-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mr-4 block md:inline mb-2 md:mb-0">
            Authorized Filings & compliance channels:
          </span>
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5 shadow">MCA Portal</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5 shadow">GSTN Gateway</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5 shadow">Income Tax Dept</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5 shadow">MSME Regd</span>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded border border-white/5 shadow">Startup India</span>
          </div>
        </div>

      </div>

      {/* 5. Practice Specializations (6 Professional Cards) */}
      <div id="practices" className="container mx-auto px-4 max-w-7xl mb-28 scroll-mt-24 relative z-10">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Solutions We Provide</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Practice Specializations</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Income Tax Filing */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#00F5A0]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00F5A0]/10 flex items-center justify-center text-[#00F5A0] text-2xl font-bold group-hover:bg-[#00F5A0]/25 transition-all duration-300">
                <FiTrendingUp />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Income Tax</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Secure ITR filings, strategic tax planning, assessment responses, and liability auditing for salaried individuals, NRIs, and business firms.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Book Tax Consult
              </Button>
            </Link>
          </div>

          {/* Card 2: GST Returns & Compliance */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#38BDF8]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] text-2xl font-bold group-hover:bg-[#38BDF8]/25 transition-all duration-300">
                <FiBriefcase />
              </div>
              <h3 className="text-xl font-bold text-slate-100">GST Services</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Hassle-free monthly/quarterly GST returns filing, fresh GST registration, ITC reconciliation, and GST department notice resolution.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#38BDF8] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Handle GST Filing
              </Button>
            </Link>
          </div>

          {/* Card 3: Company Registration */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#00F5A0]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-[#00F5A0] text-2xl font-bold group-hover:bg-emerald-500/25 transition-all duration-300">
                <FaRegHandshake />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Company Registration</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Complete incorporation suite for Private Limited companies, LLPs, One Person Companies (OPC), and partnership deeds.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Incorporate Now
              </Button>
            </Link>
          </div>

          {/* Card 4: Trademark Registration */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#38BDF8]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] text-2xl font-bold group-hover:bg-[#38BDF8]/25 transition-all duration-300">
                <FiAward />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Trademark Filing</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Protect your brand name, logo, or slogan. We offer brand searches, application filing, and trademark objection replies.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#38BDF8] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Protect Brand
              </Button>
            </Link>
          </div>

          {/* Card 5: ROC Filing & Secretarial */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#00F5A0]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-[#00F5A0] text-2xl font-bold group-hover:bg-emerald-500/25 transition-all duration-300">
                <FiFileText />
              </div>
              <h3 className="text-xl font-bold text-slate-100">ROC & MCA Filing</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Seamless corporate compliance. Handling DIR-3 KYC, AOC-4, MGT-7, appointment/resignation of directors, and compliance audit reporting.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#00F5A0] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Fulfill ROC Duties
              </Button>
            </Link>
          </div>

          {/* Card 6: Business Compliance */}
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-[#38BDF8]/20 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-[#38BDF8] text-2xl font-bold group-hover:bg-sky-500/25 transition-all duration-300">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Business Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Ensuring continuous statutory compliance: FSSAI licensing, MSME Udyam credentials, Shop & Establishment registration, and Startup India recognition.
              </p>
            </div>
            <Link href="/contact" className="pt-6 block">
              <Button className="w-full bg-slate-950 hover:bg-[#38BDF8] text-slate-300 hover:text-[#020617] border border-white/5 text-xs font-bold py-3.5 rounded-xl transition-all">
                Complete Compliance
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* 6. Premium Glass Statistics Cards Section */}
      <div className="bg-slate-900/20 border-y border-slate-900 py-20 mb-28 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#38BDF8]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-2 mb-16">
            <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Why Businesses Trust LV Tax Consultants</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Numbers Speak for Themselves</h2>
            <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
          </div>

          {/* 4 Premium Glass Cards with requested HSL/Glass effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-3xl text-center space-y-2 shadow-2xl relative group transition-all duration-300 hover:-translate-y-1"
                 style={{
                   backdropFilter: "blur(20px)",
                   WebkitBackdropFilter: "blur(20px)",
                   background: "rgba(255, 255, 255, 0.04)",
                   border: "1px solid rgba(255, 255, 255, 0.08)",
                 }}>
              <div className="absolute -top-1 right-2 w-8 h-8 rounded-full bg-[#00F5A0]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-black text-[#F8FAFC]">1,200+</div>
              <h4 className="font-bold text-slate-300 text-sm tracking-wider uppercase">Clients Served</h4>
              <p className="text-[11px] text-slate-500 font-light">Startups, SMEs & Corporate Partnerships across India.</p>
            </div>

            <div className="p-8 rounded-3xl text-center space-y-2 shadow-2xl relative group transition-all duration-300 hover:-translate-y-1"
                 style={{
                   backdropFilter: "blur(20px)",
                   WebkitBackdropFilter: "blur(20px)",
                   background: "rgba(255, 255, 255, 0.04)",
                   border: "1px solid rgba(255, 255, 255, 0.08)",
                 }}>
              <div className="absolute -top-1 right-2 w-8 h-8 rounded-full bg-[#38BDF8]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-black text-[#F8FAFC]">2,500+</div>
              <h4 className="font-bold text-slate-300 text-sm tracking-wider uppercase">Returns Filed</h4>
              <p className="text-[11px] text-slate-500 font-light">Flawless, audit-proof income tax & GST returns completed.</p>
            </div>

            <div className="p-8 rounded-3xl text-center space-y-2 shadow-2xl relative group transition-all duration-300 hover:-translate-y-1"
                 style={{
                   backdropFilter: "blur(20px)",
                   WebkitBackdropFilter: "blur(20px)",
                   background: "rgba(255, 255, 255, 0.04)",
                   border: "1px solid rgba(255, 255, 255, 0.08)",
                 }}>
              <div className="absolute -top-1 right-2 w-8 h-8 rounded-full bg-[#00F5A0]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-black text-[#F8FAFC]">10+</div>
              <h4 className="font-bold text-slate-300 text-sm tracking-wider uppercase">Years Experience</h4>
              <p className="text-[11px] text-slate-500 font-light">Decade of high-end advisory in corporate audit & legal matters.</p>
            </div>

            <div className="p-8 rounded-3xl text-center space-y-2 shadow-2xl relative group transition-all duration-300 hover:-translate-y-1"
                 style={{
                   backdropFilter: "blur(20px)",
                   WebkitBackdropFilter: "blur(20px)",
                   background: "rgba(255, 255, 255, 0.04)",
                   border: "1px solid rgba(255, 255, 255, 0.08)",
                 }}>
              <div className="absolute -top-1 right-2 w-8 h-8 rounded-full bg-[#38BDF8]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-black text-[#00F5A0]">99.8%</div>
              <h4 className="font-bold text-slate-300 text-sm tracking-wider uppercase">Success Rate</h4>
              <p className="text-[11px] text-slate-500 font-light">Zero filing penalties or critical compliance defaults.</p>
            </div>

          </div>
        </div>
      </div>

      {/* 7. Client Success Stories (High-End Conversions) */}
      <div className="container mx-auto px-4 max-w-7xl mb-28 relative z-10">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Real Value Delivered</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Client Success Stories</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Story 1 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl flex items-start gap-5 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-[#25D366] text-lg font-bold shrink-0">
              ₹
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-100">Saved ₹2.5 Lakhs in Taxes</h4>
              <p className="text-xs text-[#00F5A0] font-semibold uppercase">For E-Commerce Startup</p>
              <p className="text-xs text-slate-400 font-light">
                We restructured director salaries, optimized Input Tax Credit (ITC) flow, and leveraged export benefits to legally save ₹2.5L in their annual tax filings.
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl flex items-start gap-5 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg font-bold shrink-0">
              ✓
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-100">Reduced GST Penalties by 90%</h4>
              <p className="text-xs text-[#38BDF8] font-semibold uppercase">For Manufacturing Firm</p>
              <p className="text-xs text-slate-400 font-light">
                Resolved a long-pending GST show-cause notice by completing precise reconciliation audits and filing proper representations to the GST department.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Modern Visual Asset (Tax Dashboard Illustration) */}
      <div className="container mx-auto px-4 max-w-7xl mb-28 relative z-10">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-[#00F5A0] text-xs font-bold uppercase tracking-wider block">Enterprise Grade Tooling</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-100">State-Of-The-Art Tax Analytics</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                We provide our advisory clients with dedicated dashboards to review GST performance, upcoming corporate law timelines, and annual capital gains projections seamlessly.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 text-left inline-block">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-[#00F5A0]" /> Seamless GST Ledger reconciliations</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-[#00F5A0]" /> Real-time capital gain tax tracking</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-[#38BDF8]" /> Automatic due-date alert triggers</li>
              </ul>
            </div>
            <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-950">
              <Image
                src="/assets/hero_dashboard_premium.png"
                alt="Premium Tax Analytics and GST filing Dashboard Mockup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 9. Sleek Compliance Process Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-28 relative z-10">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sleek Compliance Process</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl text-center relative group shadow-md hover:border-[#00F5A0]/25 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 text-[#00F5A0] font-bold flex items-center justify-center mx-auto mb-4 border border-[#00F5A0]/40">
              01
            </div>
            <h4 className="font-bold text-lg text-slate-100 mb-2">Submit Details</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Book online consult or share key compliance parameters with us safely via form or WhatsApp.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl text-center relative group shadow-md hover:border-[#38BDF8]/25 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-bold flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/40">
              02
            </div>
            <h4 className="font-bold text-lg text-slate-100 mb-2">Expert Review</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Licensed experts analyze your details and organize mandatory paperwork carefully.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl text-center relative group shadow-md hover:border-[#00F5A0]/25 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#00F5A0]/20 text-[#00F5A0] font-bold flex items-center justify-center mx-auto mb-4 border border-[#00F5A0]/40">
              03
            </div>
            <h4 className="font-bold text-lg text-slate-100 mb-2">Filing & Processing</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We process applications, complete audits, and submit returns securely to direct government gateways.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl text-center relative group shadow-md hover:border-[#38BDF8]/25 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-bold flex items-center justify-center mx-auto mb-4 border border-[#38BDF8]/40">
              04
            </div>
            <h4 className="font-bold text-lg text-slate-100 mb-2">Completion Report</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Receive verified official acknowledgments, formal registrations, and complete corporate health reports.
            </p>
          </div>

        </div>
      </div>

      {/* 10. Industry & Local SEO Coverage */}
      <div className="container mx-auto px-4 max-w-7xl mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Industry Coverage */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
              Industry Coverage
            </h4>
            <p className="text-xs text-slate-400">Tailored advisory mapping perfectly to your sector's regulatory standards:</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["E-Commerce", "Healthcare", "Manufacturing", "Startups", "Freelancers", "IT Services"].map((industry, i) => (
                <span key={i} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Location Coverage (SEO boost) */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
              Serving Clients Nationally
            </h4>
            <p className="text-xs text-slate-400">Fully digital paperless processing and consultations accessible across:</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Kolkata", "Chennai", "Pune", "Ahmedabad", "Bodhgaya", "Bhubaneswar"].map((city, i) => (
                <span key={i} className="text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl flex items-center gap-1">
                  <FiMapPin className="text-[#38BDF8]" /> {city}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 11. Client Testimonials Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-28 relative z-10">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Client Voices</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Trusted By Dynamic Brands</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#00F5A0]/25 transition-all">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#F59E0B]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-xs italic text-slate-300 leading-relaxed font-light">
                "Vikash Kumar's strategic tax planning saved our business over ₹8 Lakhs in corporate filings and structure planning. Outstanding support!"
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Managing Director</h5>
              <p className="text-[11px] text-slate-400">ABC Manufacturing Corp</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#38BDF8]/25 transition-all">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#F59E0B]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-xs italic text-slate-300 leading-relaxed font-light">
                "CS Jyoti made our multi-state Pvt Ltd company incorporation and ROC annual filings incredibly smooth. Highly professional secretarial audits."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Tech Startup Founder</h5>
              <p className="text-[11px] text-slate-400">Neopulse Software LLP</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#00F5A0]/25 transition-all">
            <div className="space-y-4">
              <div className="flex gap-1 text-[#F59E0B]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-xs italic text-slate-300 leading-relaxed font-light">
                "Having both Tax Consulting and Corporate secretary support integrated into a single team saved us months of coordinate legal audits."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-100 text-sm">Retail Partner</h5>
              <p className="text-[11px] text-slate-400">Zenith Retail Outlets</p>
            </div>
          </div>
        </div>
      </div>

      {/* 12. FAQ Section (Accordion) */}
      <div className="container mx-auto px-4 max-w-4xl mb-28 relative z-10">
        <div className="text-center space-y-2 mb-16">
          <span className="text-[#00F5A0] uppercase tracking-widest text-xs font-bold">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Got Questions? We Have Answers</h2>
          <div className="w-16 h-1 bg-[#00F5A0] mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-5 px-6 flex justify-between items-center text-left text-slate-100 font-semibold hover:text-[#00F5A0] transition-colors focus:outline-none"
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                <FiChevronDown className={`text-lg shrink-0 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180 text-[#00F5A0]" : "text-slate-400"}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === index ? "max-h-[200px]" : "max-h-0"}`}>
                <div className="p-6 pt-0 border-t border-white/5 text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 13. Resource Center (Outline downloads) */}
      <div className="container mx-auto px-4 max-w-4xl border-t border-slate-900 pt-16 pb-16 relative z-10">
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

          <Link href="/assets/jyoti_profile.png" target="_blank" className="w-full md:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center justify-center gap-2 w-full border-white/10 text-white hover:bg-white/5 transition-all duration-500 rounded-full py-5 px-8 text-sm"
            >
              <span>View CS Work Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 14. Final Premium CTA Block (With Security Badges) */}
      <div className="container mx-auto px-4 max-w-5xl mb-24 relative z-10">
        <div className="bg-gradient-to-tr from-slate-900 to-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00F5A0]/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-[80px]" />

          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Ready to Simplify Your Compliance?
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-light">
              Get an expert corporate secretary and strategic tax advisor working on your files. Protect your enterprise, save tax legally, and enjoy complete peace of mind.
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

          {/* Security & Confidentiality Badges */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6 text-xs text-slate-500 relative z-10">
            <span className="flex items-center gap-1.5"><FiLock className="text-emerald-500" /> 100% Confidential Data</span>
            <span className="flex items-center gap-1.5"><FiShield className="text-sky-500" /> Secure Document Handling</span>
            <span className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-500" /> Data Privacy Protected</span>
          </div>
        </div>
      </div>

      {/* 15. Mobile Sticky Bottom CTA Bar (Only visible on Mobile viewports) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-white/10 p-3 flex gap-4 md:hidden shadow-lg">
        <a href="https://wa.me/918457876843" target="_blank" className="flex-1">
          <Button className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow">
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </Button>
        </a>
        <a href="tel:+918457876843" className="flex-1">
          <Button className="w-full bg-[#38BDF8] hover:bg-sky-400 text-[#020617] font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow">
            <FiPhone className="text-lg" />
            <span>Call Now</span>
          </Button>
        </a>
      </div>

    </section>
  );
};

export default Home;
