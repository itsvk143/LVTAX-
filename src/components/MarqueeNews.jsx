"use client";

import { motion } from "framer-motion";

const newsItems = [
  <>
    📢 Last date for Filing ITR is <span className="text-red-500 font-bold">31st July</span>
  </>,
  <>
     After <span className="text-red-500 font-bold">31st July</span>, New Tax Regime is default for Tax filing and no change in Regime is possible (except for revised return) after <span className="text-red-500 font-bold">31st July</span>.
  </>,
];

const MarqueeNews = () => {
  return (
    <div className="w-full bg-black text-white py-1.5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <span key={index} className="mx-10 font-semibold text-lg">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeNews;