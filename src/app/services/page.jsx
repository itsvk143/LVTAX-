"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "TAX PLANNING",
    description: "Strategic tax planning & financial advisory to legally optimize tax liability and maximize savings.",
    href: "/services/tax-planning",
  },
  {
    num: "02",
    title: "INCOME TAX RETURN",
    description: "Error-free filing of Income Tax Returns (ITR) for individuals, partnerships, HUFs, and corporations.",
    href: "/services/income-tax-return",
  },
  {
    num: "03",
    title: "GST REGISTRATION",
    description: "Seamless and prompt GST registration process with complete documentation support for new businesses.",
    href: "/services/gst-registration",
  },
  {
    num: "04",
    title: "GST RETURN FILING",
    description: "Regular filing of monthly & quarterly GST returns (GSTR-1, GSTR-3B) with accurate reconciliation.",
    href: "/services/gst-return",
  },
  {
    num: "05",
    title: "COMPANY INCORPORATION",
    description: "End-to-end formation & incorporation services for Private, Public, One Person (OPC), Section-8 Companies, and LLPs.",
    href: "/services/company-incorporation",
  },
  {
    num: "06",
    title: "ANNUAL MCA & ROC FILINGS",
    description: "Hassle-free annual compliance filing including AOC-4, MGT-7, ADT-1, and LLP Form 8 & Form 11 to keep your firm compliant.",
    href: "/services/annual-compliance",
  },
  {
    num: "07",
    title: "CORPORATE GOVERNANCE",
    description: "Professional governance advisory, drafting agendas, minutes of Board/AGM/EGM meetings, and maintaining statutory registers.",
    href: "/services/corporate-governance",
  },
  {
    num: "08",
    title: "DIRECTOR & ALLIED COMPLIANCE",
    description: "Director appointments, resignations, disqualifications solutions, DIN KYC, MSME registrations, and MOA & AOA alterations.",
    href: "/services/director-compliances",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full  items-center">
                  <div className="text-4xl md:text-5xl flex justify-between font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-3xl md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
