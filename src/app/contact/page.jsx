"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8457876843",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lvtaxconsultancy@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Office 1",
    description: "Plot no 173, Prachi Enclave, Chandrashekharpur, Bhubaneswar, Odisha 751016",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Office 2",
    description: "Kiran jewellers, Bodhgaya Pachatti more, near syndicate bank, Bihar 824231",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzbfOVR7b1evcCpxNfeKwfKtYksgpWtKFuhwCNo6c8adCsnotQGdORtwHVXrY_14ybi-g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      // Since mode is no-cors, we can't check response.ok or read the body
      // We assume success if no network error occurs
      alert("Message sent successfully! We will contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-24 relative overflow-hidden bg-slate-950 font-sans min-h-screen flex items-center"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-6 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 font-bold">
                Let's work together
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Saving tax means saving money for your future needs. Reach out to us for expert consultation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all rounded-lg h-12"
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all rounded-lg h-12"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all rounded-lg h-12"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all rounded-lg h-12"
                />
              </div>

              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full bg-white/5 border-white/10 text-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-lg h-12">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-gray-200">
                  <SelectGroup>
                    <SelectLabel className="text-gray-500">Services</SelectLabel>
                    <SelectItem value="Tax Planning" className="focus:bg-white/10 focus:text-teal-400 cursor-pointer">Tax Planning</SelectItem>
                    <SelectItem value="Income Tax Return" className="focus:bg-white/10 focus:text-teal-400 cursor-pointer">Income Tax Return</SelectItem>
                    <SelectItem value="GST Return" className="focus:bg-white/10 focus:text-teal-400 cursor-pointer">GST Return</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                className="h-[180px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all rounded-lg resize-none p-4"
                required
              />

              <Button
                type="submit"
                size="lg"
                className="w-full md:max-w-xs bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-10 xl:mb-0">
            <ul className="flex flex-col gap-10 w-full">
              {info.map((item, index) => (
                <li key={index} className="flex items-start gap-6 group">
                  <div className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] bg-white/5 text-teal-400 rounded-2xl flex items-center justify-center group-hover:bg-teal-400 group-hover:text-slate-900 transition-all duration-300 shadow-lg border border-white/5 shrink-0">
                    <div className="text-2xl xl:text-3xl">{item.icon}</div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-1 group-hover:text-teal-400 transition-colors">{item.title}</p>
                    <h3 className="text-xl md:text-2xl text-white font-medium">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
