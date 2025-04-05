"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// ITR Testimonials Data
const initialItrTestimonials = [
  {
    name: "VIVEK KUMAR",
    profession: "Software Engineer",
    photo: "/assets/testimonials/vive.jpeg",
    rating: "★★★★★",
    review: "I had a seamless experience getting my ITR filed with LV TAX CONSULTANCY. Their attention to detail ensured that I maximized my tax savings while staying fully compliant. Highly recommended!",
  },
  {
    name: "AJAY KUMAR",
    profession: "ALLEN CAREER INSTITUTE",
    photo: "/assets/testimonials/ajay.jpg",
    rating: "★★★★",
    review: "LV TAX CONSULTANCY made my ITR filing process quick and stress-free. Their expertise helped me get the best deductions possible. Highly recommended for anyone looking for a reliable tax consultant!",
  },
  {
    name: "ADITYA KUMAR PANDEY ",
    profession: "Srichatinaya Institute",
    photo: "/assets/testimonials/adity.jpeg",
    rating: "★★★★★",
    review: "Excellent service! They guided me through every step of my tax filing, ensuring everything was accurate and compliant. Will definitely return next year!.Highly recommended for a reliable tax consultant!”.",
  },
    {
    name: "SURYANANDAN JAISHWAL",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/suryanandan.jpg",
    rating: "★★★★★",
    review: "Filing taxes was stressful until I found LV TAX CONSULTANCY. They handled everything seamlessly. Highly recommend!",
  },
  {
    name: "SAYAK ARORA ",
    profession: "Businessman",
    photo: "/assets/testimonials/saya.jpeg",
    rating: "★★★★★",
    review: "Professional, reliable, and extremely knowledgeable. LV TAX CONSULTANCY made my tax filing effortless!",
  },
  {
    name: "ROHIT BAJAJ ",
    profession: "Resonance Edv.",
    photo: "/assets/testimonials/rohitb.jpeg",
    rating: "★★★★★",
    review: "Amazing customer service! They patiently explained everything and ensured I got the best returns and no any complaint till now. Thank you!",
  },  
  {
    name: "VIKRAM KUMAR SINGH ",
    profession: "PW Institute",
    photo: "/assets/testimonials/vikram.jpg",
    rating: "★★★★★",
    review: "I’ve been using their services for years—always accurate, efficient, and trustworthy!",
  },{
    name: "VIPIN KUMAR SINGH ",
    profession: "PW Institute",
    photo: "/assets/testimonials/vipin.jpg",
    rating: "★★★★★",
    review: "LV TAX CONSULTANCY took the confusion out of tax filing. Their expert advice saved me money!",
  }, {
    name: "GAUTAM KUMAR MAHTO ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/gautam.jpg",
    rating: "★★★★★",
    review: "Exceptional service! They genuinely care about their clients and provide the best tax solutions.",
  }, {
    name: "SETU KUMAR ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/setu.jpg",
    rating: "★★★★★",
    review: "Filing taxes has never been this easy! Their expertise and attention to detail are impressive.",
  }, {
    name: "ROHIT DIXIT ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/rohitd.jpeg",
    rating: "★★★★★",
    review: "rompt responses, thorough explanations, and a smooth process—LV TAX CONSULTANCY is the best!",
  }, {
    name: "ADITYA KUMAR ",
    profession: "Product Manager",
    photo: "/assets/testimonials/client3.jpg",
    rating: "★★★★★",
    review: "Fast, reliable, and stress-free tax filing. They made sure I maximized my deductions!",
  }, {
    name: "CHANDAN KUMAR",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/chandan.png",
    rating: "★★★★★",
    review: "Fantastic service! They took care of everything and saved me time and money.",
  }, {
    name: "SAZZAT HOSSAIN ",
    profession: "ALLEN CARRER INSTITUTE",
    photo: "/assets/testimonials/sazzat.png",
    rating: "★★★★★",
    review: "LV TAX CONSULTANCY is the best in the business. Highly knowledgeable and reliable.",
  }, {
    name: "MUSKAN KUMARI",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/MUSKAN.jpeg",
    rating: "★★★★★",
    review: "They explained everything clearly and made sure I understood my tax situation.",
  }, {
    name: "PAULIMI BASU  ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/paulimi.png",
    rating: "★★★★★",
    review: "From start to finish, everything was handled professionally. Highly satisfied!",
  }, {
    name: "ASHUTOSH KUMAR GUPTA ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/ashutosh.jpg",
    rating: "★★★★★",
    review: "They provide personalized service and go above and beyond to help their clients.",
  }, {
    name: "ABHISHEK KUMAR ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/abhishek.jpg",
    rating: "★★★★★",
    review: "I’m so glad I found LV TAX CONSULTANCY. They made my tax filing experience effortless.",
  }, {
    name: "AMIT KUMAR ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/AMIT.png",
    rating: "★★★★★",
    review: "Very professional and knowledgeable team. I felt confident that my taxes were in safe hands.",
  }, {
    name: "SUJEET KUMAR ",
    profession: "INFOSYS",
    photo: "/assets/testimonials/SUJEET.png",
    rating: "★★★★★",
    review: "The best tax consultancy experience I have ever used, clear communication and excellent support.",
  }, {
    name: "KRUSHNA C. SAHOO",
    profession: "Product Manager",
    photo: "/assets/testimonials/KRUSHNA.png",
    rating: "★★★★★",
    review: "From start to finish, the process was smooth. LV TAX CONSULTANCY truly knows their work.",
  }, {
    name: "LAXMAN KUMAR S. ",
    profession: "Aakash Institute",
    photo: "/assets/testimonials/laxman.jpg",
    rating: "★★★★★",
    review: "Honest, experienced, and efficient. They made tax filing stress-free and easy.",
  }, {
    name: "NEHA KUMARI ",
    profession: "Coznizent",
    photo: "/assets/testimonials/neha.jpg",
    rating: "★★★★★",
    review: "They helped me understand my taxes and provided valuable financial advice. Great team!",
  }, {
    name: "NAGA RAJU MANIKONDA",
    profession: "NARAYANA EDUCATIONAL SOCIETY",
    photo: "/assets/testimonials/naga.jpg",
    rating: "★★★★★",
    review: "LV TAX CONSULTANCY exceeded my expectations. Their expert advice helped me save more than I expected!!!",
  }, 
];

// GST Testimonials Data
const initialGstTestimonials = [
  {
    name: "SUNNY KUMAR VERMA",
    profession: "Jewellery Shop Owner",
    photo: "/assets/testimonials/rahul.jpg",
    rating: "★★★★★",
    review: "They helped me understand my taxes and provided valuable financial advice. Great team, Highly recommended!",
  },
  {
    name: "UDAY VERMA ",
    profession: "Jewellery Shop",
    photo: "/assets/testimonials/priya.jpg",
    rating: "★★★★",
    review: "I had a great experience working with Vikash. He explained GST compliance clearly and helped me avoid penalties.",
  },
  {
    name: "AMIT KUMAR",
    profession: "Jewellery Shop",
    photo: "/assets/testimonials/amit.jpg",
    rating: "★★★★★",
    review: "Vikash’s GST consultancy saved me a lot of money. His attention to detail is outstanding!",
  },
];

// Function to render stars
const renderStars = (rating) => {
  return rating.split("").map((star, index) => (
    <span key={index} className="text-yellow-400">
      {star}
    </span>
  ));
};

const Testimonials = () => {
  // State for storing testimonials
  const [itrTestimonials, setItrTestimonials] = useState(initialItrTestimonials);
  const [gstTestimonials, setGstTestimonials] = useState(initialGstTestimonials);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    review: "",
    rating: "★★★★★",
    category: "itr",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { ...formData, photo: "/assets/testimonials/default.png" };

    if (formData.category === "itr") {
      setItrTestimonials([...itrTestimonials, newTestimonial]);
    } else {
      setGstTestimonials([...gstTestimonials, newTestimonial]);
    }

    // Clear form after submission
    setFormData({ name: "", profession: "", review: "", rating: "★★★★★", category: "itr" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="itr-testimonials" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="itr-testimonials">ITR Testimonials</TabsTrigger>
            <TabsTrigger value="gst-testimonials">GST Testimonials</TabsTrigger>
          </TabsList>

          {/* ITR Testimonials */}
          <TabsContent value="itr-testimonials">
            <h3 className="text-4xl font-bold text-center mb-6">What Our Clients Say - ITR</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itrTestimonials.map((testimonial, index) => (
                <li key={index} className="bg-[#232329] p-6 rounded-xl shadow-md">
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.profession}</p>
                  </div>
                  <p className="mt-2 italic">"{testimonial.review}"</p>
                  <div className="flex gap-1 justify-center mt-2">{renderStars(testimonial.rating)}</div>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* GST Testimonials */}
          <TabsContent value="gst-testimonials">
            <h3 className="text-4xl font-bold text-center mb-6">What Our Clients Say - GST</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gstTestimonials.map((testimonial, index) => (
                <li key={index} className="bg-[#232329] p-6 rounded-xl shadow-md">
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.profession}</p>
                  </div>
                  <p className="mt-2 italic">"{testimonial.review}"</p>
                  <div className="flex gap-1 justify-center mt-2">{renderStars(testimonial.rating)}</div>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        {/* Testimonial Submission Form */}
        <div className="mt-12 bg-[#232329] p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-center mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="profession"
              placeholder="Your Profession"
              value={formData.profession}
              onChange={handleInputChange}
              className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
              required
            />
            <textarea
              name="review"
              placeholder="Your Review"
              value={formData.review}
              onChange={handleInputChange}
              className="p-3 rounded-md bg-gray-800 text-white focus:outline-none h-24"
              required
            />
            <select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            >
              <option value="★★★★★">★★★★★</option>
              <option value="★★★★">★★★★</option>
              <option value="★★★">★★★</option>
              <option value="★★">★★</option>
              <option value="★">★</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            >
              <option value="itr">ITR</option>
              <option value="gst">GST</option>
            </select>
            <button type="submit" className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;