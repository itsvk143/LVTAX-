"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const TAX_SLABS_OLD = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 5 },
  { limit: 1000000, rate: 20 },
  { limit: Infinity, rate: 30 },
];

const TAX_SLABS_NEW = [
  { limit: 400000, rate: 0 },
  { limit: 800000, rate: 5 },
  { limit: 1200000, rate: 10 },
  { limit: 1600000, rate: 15 },
  { limit: 2000000, rate: 20 },
  { limit: 2400000, rate: 25 },
  { limit: Infinity, rate: 30 },
];

const calculateTax = (taxableIncome, slabs) => {
  let tax = 0;
  let previousLimit = 0;

  for (let slab of slabs) {
    if (taxableIncome > previousLimit) {
      let taxableAmount = Math.min(slab.limit, taxableIncome) - previousLimit;
      tax += taxableAmount * (slab.rate / 100);
      previousLimit = slab.limit;
    } else {
      break;
    }
  }

  return tax;
};

const calculateOldRegimeTax = (taxableIncome) => {
  let initialTax = calculateTax(taxableIncome, TAX_SLABS_OLD);
  let taxAfterRebate = initialTax;

  // Section 87A Rebate under Old Regime
  if (taxableIncome <= 500000) {
    taxAfterRebate = 0;
  }

  // Add 4% Cess
  const cess = taxAfterRebate * 0.04;
  return taxAfterRebate + cess;
};

const calculateNewRegimeTax = (taxableIncome) => {
  let initialTax = calculateTax(taxableIncome, TAX_SLABS_NEW);
  let taxAfterRebate = initialTax;

  // Section 87A Rebate and Marginal Relief under New Regime (AY 2026-27)
  // Taxable income up to ₹12,75,000 is completely tax-free (rebate reduces tax to ₹0)
  if (taxableIncome <= 1275000) {
    taxAfterRebate = 0;
  } else {
    // Check for Marginal Relief starting above ₹12,75,000
    const excessIncome = taxableIncome - 1275000;
    if (initialTax > excessIncome) {
      taxAfterRebate = excessIncome;
    }
  }

  // Add 4% Cess
  const cess = taxAfterRebate * 0.04;
  return taxAfterRebate + cess;
};




const IncomeTaxCalculator = () => {
  const [ctc, setCtc] = useState("");
  const [hra, setHra] = useState("");
  const [deduction80C, setDeduction80C] = useState("");
  const [deduction80CCD, setDeduction80CCD] = useState("");
  const [deduction80CCD2, setDeduction80CCD2] = useState("");
  const [deduction80Dself, setDeduction80Dself] = useState("");
  const [deduction80Ddependent, setDeduction80Ddependent] = useState("");
  const [donations80G, setDonations80G] = useState("");
  const [donations80GGC, setDonations80GGC] = useState("");
  const [savingsInterest80TTA, setSavingsInterest80TTA] = useState("");
  const [homeLoanInterest, setHomeLoanInterest] = useState("");
  const [otherDeductions, setOtherDeductions] = useState("");

  const [oldRegimeTax, setOldRegimeTax] = useState(null);
  const [newRegimeTax, setNewRegimeTax] = useState(null);
  const [expertOldRegimeTax, setExpertOldRegimeTax] = useState(null);
  const [expertNewRegimeTax, setExpertNewRegimeTax] = useState(null);

  const handleInputChange = (setter) => (e) => {
    let value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      setter(Number(value).toLocaleString("en-IN"));
    } else {
      setter("");
    }
  };

  const handleCalculate = () => {
    const parseNumber = (str) => parseFloat(str.replace(/,/g, "")) || 0;

    const ctcValue = parseNumber(ctc);
    const hraValue = parseNumber(hra);
    const deduction80CValue = Math.min(parseNumber(deduction80C), 150000);
    const deduction80CCDValue = Math.min(parseNumber(deduction80CCD), 50000);
    const deduction80CCD2Value = parseNumber(deduction80CCD2);
    const deduction80DselfValue = Math.min(
      parseNumber(deduction80Dself),
      50000
    );
    const deduction80DdependentValue = Math.min(
      parseNumber(deduction80Ddependent),
      50000
    );
    const donations80GValue = parseNumber(donations80G);
    const donations80GGCValue = parseNumber(donations80GGC);
    const savingsInterest80TTAValue = Math.min(
      parseNumber(savingsInterest80TTA),
      10000
    );
    const homeLoanInterestValue = parseNumber(homeLoanInterest);
    const otherDeductionsValue = parseNumber(otherDeductions);

    const standardDeductionOld = 50000;
    const standardDeductionNew = 75000;

    const totalDeductionsOld =
      standardDeductionOld +
      hraValue +
      deduction80CValue +
      deduction80CCDValue +
      deduction80CCD2Value +
      deduction80DselfValue +
      deduction80DdependentValue +
      donations80GValue +
      savingsInterest80TTAValue +
      homeLoanInterestValue +
      donations80GGCValue +
      otherDeductionsValue;

    const taxableIncomeOld = Math.max(ctcValue - totalDeductionsOld, 0);
    const taxOld = calculateOldRegimeTax(taxableIncomeOld);

    const taxableIncomeNew = Math.max(ctcValue - standardDeductionNew, 0);
    const taxNew = calculateNewRegimeTax(taxableIncomeNew);

    setOldRegimeTax(Math.round(taxOld).toLocaleString("en-IN"));
    setNewRegimeTax(Math.round(taxNew).toLocaleString("en-IN"));

    // Expert Calculation (Maximizing deductions)
    const expert80C = 150000; // Maximize 80C if not already maxed
    const expert80D = 75000; // Health Insurance for family
    const expert80CCD = 50000; // Max NPS Self Contribution
    const expert80G = 50000; // NGO DONATION
    const expertLTA = 80000; // LTA
    const expertsection14 = 150000; // EXPANSES

    const expertDeductionsOld =
      standardDeductionOld +
      hraValue +
      expert80C +
      expert80D +
      expert80CCD +
      expert80G +
      expertLTA +
      expertsection14 +
      homeLoanInterestValue +
      donations80GGCValue +
      otherDeductionsValue +
      deduction80DselfValue;

    const expertTaxableIncomeOld = Math.max(ctcValue - expertDeductionsOld, 0);
    const expertTaxOld = calculateOldRegimeTax(expertTaxableIncomeOld);

    const expertTaxableIncomeNew = Math.max(ctcValue - standardDeductionNew, 0);
    const expertTaxNew = calculateNewRegimeTax(expertTaxableIncomeNew);

    setExpertOldRegimeTax(Math.round(expertTaxOld).toLocaleString("en-IN"));
    setExpertNewRegimeTax(Math.round(expertTaxNew).toLocaleString("en-IN"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/30 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 py-12"
      >

        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center">
          {/* Main Calculator Section */}
          <div className="w-full xl:w-2/3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Income Tax Calculator <br />
              <span className="text-sm md:text-lg font-normal text-gray-400">
                (Salaried • AY 2026-2027 onward)
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Annual CTC", ctc, setCtc],
                ["HRA Exemption", hra, setHra],
                ["80C Deductions", deduction80C, setDeduction80C],
                ["80CCD (NPS Self)", deduction80CCD, setDeduction80CCD],
                ["80CCD2 (NPS Employer)", deduction80CCD2, setDeduction80CCD2],
                ["80D (Self)", deduction80Dself, setDeduction80Dself],
                ["80D (Dependent)", deduction80Ddependent, setDeduction80Ddependent],
                ["80G (Donations)", donations80G, setDonations80G],
                ["80GGC (Pol. Party)", donations80GGC, setDonations80GGC],
                ["80TTA (Savings Int)", savingsInterest80TTA, setSavingsInterest80TTA],
                ["24b (Home Loan Int)", homeLoanInterest, setHomeLoanInterest],
                ["Other Deductions", otherDeductions, setOtherDeductions],
              ].map(([label, value, setter], index) => (
                <div key={index} className="relative group/input">
                  <label className="block text-sm font-medium text-gray-300 mb-1 ml-1 group-focus-within/input:text-blue-400 transition-colors">
                    {label} <span className="text-xs text-gray-500">(₹)</span>
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={handleInputChange(setter)}
                    className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono tracking-wide"
                    placeholder="0"
                  />
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCalculate}
              className="w-full mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all"
            >
              Calculate Tax
            </motion.button>

            {oldRegimeTax !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Standard Results */}
                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">
                    📊 Your Calculation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Old Regime</span>
                      <span className="text-2xl font-bold text-red-400">
                        ₹{oldRegimeTax}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">New Regime</span>
                      <span className="text-2xl font-bold text-green-400">
                        ₹{newRegimeTax}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expert Results */}
                <div className="bg-slate-900/60 p-6 rounded-xl border border-yellow-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-bl-lg">
                    EXPERT OPTIMIZED
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">
                    💡 Potential Savings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Old Regime (Opt)</span>
                      <span className="text-2xl font-bold text-blue-400">
                        ₹{expertOldRegimeTax}
                      </span>
                    </div>
                    {/* <div className="flex justify-between items-center">
                      <span className="text-gray-400">New Regime (Opt)</span>
                      <span className="text-xl font-bold text-gray-300">₹{expertNewRegimeTax}</span>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar Section */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
              <h2 className="text-xl font-bold text-center mb-6 text-blue-200">
                📋 Tax Slabs Reference
              </h2>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">
                  Old Regime
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {TAX_SLABS_OLD.map((slab, index) => {
                    const previousLimit = index === 0 ? 0 : TAX_SLABS_OLD[index - 1].limit;
                    return (
                      <li
                        key={index}
                        className="flex justify-between py-2 border-b border-gray-700/50 last:border-0"
                      >
                        <span>
                          ₹{previousLimit.toLocaleString("en-IN") + 1} -{" "}
                          {slab.limit === Infinity
                            ? "Above"
                            : `₹${slab.limit.toLocaleString("en-IN")}`}
                        </span>
                        <span className="font-mono text-blue-400">{slab.rate}%</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wider">
                  New Regime <br />
                  <span className="normal-case opacity-70 text-xs">(AY 2026-27+)</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {TAX_SLABS_NEW.map((slab, index) => {
                    const previousLimit = index === 0 ? 0 : TAX_SLABS_NEW[index - 1].limit;
                    return (
                      <li
                        key={index}
                        className="flex justify-between py-2 border-b border-gray-700/50 last:border-0"
                      >
                        <span>
                          ₹{previousLimit.toLocaleString("en-IN") + 1} -{" "}
                          {slab.limit === Infinity
                            ? "Above"
                            : `₹${slab.limit.toLocaleString("en-IN")}`}
                        </span>
                        <span className="font-mono text-green-400">{slab.rate}%</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IncomeTaxCalculator;