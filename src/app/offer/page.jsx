"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const offer = () => {
  const images = [
    "/assets/offer/1.png",
    "/assets/gallery/photo2.jpg",,
  ];

  const handleImageClick = (src) => {
    window.open(src, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 p-6">
      {images.map((src, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.5 }}  // Zoom effect on hover
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-72 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(src)} // Open in new tab on click
          />
        </motion.div>
      ))}
    </div>
  );
};

export default offer;
