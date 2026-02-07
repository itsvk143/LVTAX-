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
    <div className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 text-white py-2 overflow-hidden sticky top-0 z-50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <span key={index} className="mx-10 font-medium text-lg tracking-wide">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeNews;