"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  }, {
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
  const count = rating.length;
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? "currentColor" : "none"}
          className={i < count ? "text-yellow-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
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
    <section className="min-h-screen relative bg-slate-950 text-white py-12 xl:py-24 overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="itr-testimonials" className="flex flex-col gap-12">
            {/* Tabs List */}
            <div className="flex justify-center">
              <TabsList className="bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full inline-flex">
                <TabsTrigger
                  value="itr-testimonials"
                  className="px-8 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                >
                  ITR Testimonials
                </TabsTrigger>
                <TabsTrigger
                  value="gst-testimonials"
                  className="px-8 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                >
                  GST Testimonials
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ITR Testimonials */}
            <TabsContent value="itr-testimonials" className="w-full">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
                  Client Success Stories
                </h3>
                <p className="text-gray-400">Trusted by professionals across industries for ITR filing.</p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itrTestimonials.map((testimonial, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                        <Avatar className="w-full h-full">
                          <AvatarImage src={testimonial.photo} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback className="flex items-center justify-center w-full h-full bg-slate-800">
                            <img src="/assets/logo.png" alt="LV" className="w-full h-full object-contain p-2 opacity-80" />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">{testimonial.profession}</p>
                      </div>
                    </div>

                    <div className="mb-4">{renderStars(testimonial.rating)}</div>

                    <p className="text-gray-300 italic leading-relaxed text-sm">
                      "{testimonial.review}"
                    </p>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>

            {/* GST Testimonials */}
            <TabsContent value="gst-testimonials" className="w-full">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
                  Business Success Stories
                </h3>
                <p className="text-gray-400">Helping businesses grow with compliant GST solutions.</p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gstTestimonials.map((testimonial, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                        <Avatar className="w-full h-full">
                          <AvatarImage src={testimonial.photo} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback className="flex items-center justify-center w-full h-full bg-slate-800">
                            <img src="/assets/logo.png" alt="LV" className="w-full h-full object-contain p-2 opacity-80" />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">{testimonial.profession}</p>
                      </div>
                    </div>

                    <div className="mb-4">{renderStars(testimonial.rating)}</div>

                    <p className="text-gray-300 italic leading-relaxed text-sm">
                      "{testimonial.review}"
                    </p>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          {/* Testimonial Submission Form */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Share Your Experience
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Profession</label>
                    <input
                      type="text"
                      name="profession"
                      placeholder="Your Profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Review</label>
                  <textarea
                    name="review"
                    placeholder="Write your review here..."
                    value={formData.review}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Rating</label>
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="★★★★★">★★★★★ (Excellent)</option>
                      <option value="★★★★">★★★★ (Good)</option>
                      <option value="★★★">★★★ (Average)</option>
                      <option value="★★">★★ (Fair)</option>
                      <option value="★">★ (Poor)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="itr">ITR Services</option>
                      <option value="gst">GST Services</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Testimonial
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;