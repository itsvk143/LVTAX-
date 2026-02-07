"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsCheckCircle } from "react-icons/bs";

const GstSpecialOffer = () => {
    const features = [
        "Complete GST Registration",
        "Monthly & Quarterly Return Filing",
        "Annual Reconciliation",
        "Input Tax Credit Optimization",
        "Penalty Warning System",
        "Legal Compliance Check",
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden font-sans pt-24 pb-12">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/offer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <BsArrowLeft className="text-xl" />
                    <span>Back to Offers</span>
                </Link>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Banner Badge */}
                        <div className="absolute top-6 right-6 lg:top-10 lg:right-10 animate-bounce">
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                LIMITED TIME
                            </span>
                        </div>

                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                                GST Filing Special
                            </h1>
                            <p className="text-2xl md:text-3xl text-white font-light">
                                Complete Compliance Package @ <span className="font-bold text-yellow-400">₹2500 / Year</span>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-blue-300 mb-4">Why Choose This Plan?</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Running a business is hard, but compliance shouldn't be. Our special GST package covers everything from registration to annual filing, ensuring you never miss a deadline or face a penalty.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-green-300 mb-4">What's Included?</h3>
                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-200">
                                            <BsCheckCircle className="text-green-400 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-400 mb-6">Ready to streamline your business taxes?</p>
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full text-xl font-bold text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Claim Offer Now
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GstSpecialOffer;
