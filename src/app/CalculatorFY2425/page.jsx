"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TAX_SLABS_OLD = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 5 },
  { limit: 1000000, rate: 20 },
  { limit: Infinity, rate: 30 },
];

const TAX_SLABS_NEW = [
  { limit: 300000, rate: 0 },
  { limit: 700000, rate: 5 },
  { limit: 1000000, rate: 10 },
  { limit: 1200000, rate: 15 },
  { limit: 1500000, rate: 20 },
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

const CalculatorFY2425 = () => {
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
    const deduction80DselfValue = Math.min(parseNumber(deduction80Dself), 50000);
    const deduction80DdependentValue = Math.min(parseNumber(deduction80Ddependent), 50000);
    const donations80GValue = parseNumber(donations80G);
    const donations80GGCValue = parseNumber(donations80GGC);
    const savingsInterest80TTAValue = Math.min(parseNumber(savingsInterest80TTA), 10000);
    const homeLoanInterestValue = parseNumber(homeLoanInterest);
    const otherDeductionsValue = parseNumber(otherDeductions);

    const standardDeductionOld = 50000;
    const standardDeductionNew = 75000;

    const totalDeductionsOld =
      standardDeductionOld + hraValue + deduction80CValue + deduction80CCDValue + deduction80CCD2Value + deduction80DselfValue +
      deduction80DdependentValue +
      donations80GValue +
      savingsInterest80TTAValue +
      homeLoanInterestValue +
      donations80GGCValue +
      otherDeductionsValue;
;

    const taxableIncomeOld = Math.max(ctcValue - totalDeductionsOld, 0);
    let taxOld = calculateTax(taxableIncomeOld, TAX_SLABS_OLD);

    const taxableIncomeNew = Math.max(ctcValue - standardDeductionNew, 0);
    let taxNew = calculateTax(taxableIncomeNew, TAX_SLABS_NEW);

    if (taxOld <= 12500) taxOld = 0;
    if (taxNew <= 25000) taxNew = 0;

    setOldRegimeTax(taxOld.toLocaleString("en-IN"));
    setNewRegimeTax(taxNew.toLocaleString("en-IN"));

    // Expert Calculation (Maximizing deductions)
    const expert80C = 150000; // Maximize 80C if not already maxed
    const expert80D = 75000; // Health Insurance for family
    const expert80CCD = 50000; // Max NPS Self Contribution
    const expert80G = 50000; // NGO DONATION 
    const expertLTA = 80000; // LTA
    const expertsection14 = 150000; // EXPANSES




    const expertDeductionsOld =
      standardDeductionOld + hraValue + expert80C + expert80D + expert80CCD + expert80G + expertLTA+ expertsection14+ homeLoanInterestValue+ donations80GGCValue+ otherDeductionsValue+ deduction80DselfValue ;

    const expertTaxableIncomeOld = Math.max(ctcValue - expertDeductionsOld, 0);
    let expertTaxOld = calculateTax(expertTaxableIncomeOld, TAX_SLABS_OLD);

    const expertTaxableIncomeNew = Math.max(ctcValue - standardDeductionNew, 0);
    let expertTaxNew = calculateTax(expertTaxableIncomeNew, TAX_SLABS_NEW);

    if (expertTaxOld <= 12500) expertTaxOld = 0;
    if (expertTaxNew <= 25000) expertTaxNew = 0;

    setExpertOldRegimeTax(expertTaxOld.toLocaleString("en-IN"));
    setExpertNewRegimeTax(expertTaxNew.toLocaleString("en-IN"));
  };
  

  return (
    
    
    <motion.div
    
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-start justify-between px-4 md:px-12 py-12 gap-6"
      >

      {/* Left Section: Inputs */}
      
      <div className="  bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 p-2 ">
        <h2 className="text-2xl font-bold text-center mb-6">Income Tax Calculator For Salaried <br /> (AY 2025-2026) </h2>
        {[
          ["Annual CTC", ctc, setCtc],
          ["HRA Exemption (Annual House Rent)", hra, setHra],
          ["80C Deductions", deduction80C, setDeduction80C],
          ["80CCD (NPS Self)", deduction80CCD, setDeduction80CCD],
          ["80CCD2 (NPS Employer)", deduction80CCD2, setDeduction80CCD2],
          ["80D (Health Insurance Self)", deduction80Dself, setDeduction80Dself],
          ["80D (Health Insurance Dependent)", deduction80Ddependent, setDeduction80Ddependent],
          ["80G (NGO Donations)", donations80G, setDonations80G],
          ["80GGC (Political Party Donations)", donations80GGC, setDonations80GGC],
          ["80TTA (Savings Interest)", savingsInterest80TTA, setSavingsInterest80TTA],
          ["24b (Home Loan Interest)", homeLoanInterest, setHomeLoanInterest],
          ["Other Deductions", otherDeductions, setOtherDeductions],
        ].map(([label, value, setter], index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">{label} (₹)</label>
            <input
              type="text"
              value={value}
              onChange={handleInputChange(setter)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}

        <button onClick={handleCalculate} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Calculate Tax
        </button>

        {oldRegimeTax !== null && newRegimeTax !== null && expertOldRegimeTax !== null && expertNewRegimeTax !== null && (
          <div className="mt-6">
            <h3 className="text-sm font-bold mb-2">📊 Tax Comparison</h3>
            <p>📌 Old Regime Tax: ₹{oldRegimeTax}</p>
             <p>📌 New Regime Tax: ₹{newRegimeTax}</p>
            <h3 className="text-sm font-bold mt-4 mb-2">💡Tax Calculation by Expert advice </h3>
            <p>✅ Old Regime Tax(Expert): ₹{expertOldRegimeTax}</p>

            {/* <p>✅ New Regime Tax(Expert): ₹{expertNewRegimeTax}</p> */}
          </div>
        )}
      </div>

{/* Right Section: Tax Slabs */}
<div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
 <h2 className="text-xl font-bold text-center mb-4">📋 Tax Slabs</h2>
 
 <h3 className="text-lg font-semibold mb-2">🔹 Old Regime</h3>
 <ul className="mb-10">
  {TAX_SLABS_OLD.map((slab, index) => {
    const previousLimit = index === 0 ? 0 : TAX_SLABS_OLD[index - 1].limit;
    return (
      <li key={index} className="border-b py-1">
        <span className="font-medium">
          ₹{previousLimit.toLocaleString("en-IN") +1 } - ₹
          {slab.limit === Infinity ? "Above" : slab.limit.toLocaleString("en-IN")}
        </span>{" "}
        — {slab.rate}%
      </li>
    );
  })}
</ul>
 <br />

 <h3 className="text-lg font-semibold mb-2">🔹 New Regime<br />(AY 2025-2026 )</h3>
 <ul>
  {TAX_SLABS_NEW.map((slab, index) => {
    const previousLimit = index === 0 ? 0 : TAX_SLABS_NEW[index - 1].limit;
    return (
      <li key={index} className="border-b py-1">
        <span className="font-medium">
          ₹{previousLimit.toLocaleString("en-IN")+1 } - ₹
          {slab.limit === Infinity ? "Above" : slab.limit.toLocaleString("en-IN")}
        </span>{" "}
        — {slab.rate}%
      </li>
    );
  })}
</ul>
</div>
</motion.div>
);
};

export default CalculatorFY2425;