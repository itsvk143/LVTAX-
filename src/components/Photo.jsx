"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.1, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.1, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] xl:w-[498px] xl:h-[450px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Avataar"
            className="object-contain"
          />
        </motion.div>

        {/* Animated SVG with 3 circles */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle 1 */}
          <motion.circle
            cx="253"
            cy="240"
            r="235"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "20 30 10 40" }}
            animate={{
              strokeDasharray: ["30 120 50 20", "10 40 90 60", "20 200 30 30"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Circle 2 */}
          <motion.circle
            cx="253"
            cy="240"
            r="230"
            stroke="#00ff99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "15 25 35 15" }}
            animate={{
              strokeDasharray: ["25 100 30 50", "15 35 80 45", "5 200 10 10"],
              rotate: [360, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Circle 3 */}
          <motion.circle
            cx="253"
            cy="240"
            r="225"
            stroke="#00ff99"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "10 20 50 20" }}
            animate={{
              strokeDasharray: ["40 140 60 20", "20 50 100 40", "15 250 25 25"],
              rotate: [-180, 180],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
