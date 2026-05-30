"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ src = "/assets/photo.png", strokeColor = "#00ff99", objectPosition = "center" }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.1, ease: "easeIn" },
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.1, ease: "easeInOut" },
          }}
          className="w-[94%] h-[94%] absolute flex justify-center items-center overflow-hidden rounded-full mix-blend-lighten"
        >
          <Image
            src={src}
            priority
            quality={100}
            fill
            alt="Avatar"
            className="object-cover"
            style={{ objectPosition }}
          />
        </motion.div>

        {/* Animated SVG with 3 circles */}
        <motion.svg
          className="w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle 1 */}
          <motion.circle
            cx="253"
            cy="253"
            r="245"
            stroke={strokeColor}
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
            cy="253"
            r="240"
            stroke={strokeColor}
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
            cy="253"
            r="235"
            stroke={strokeColor}
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
