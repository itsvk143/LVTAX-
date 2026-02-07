"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsCheckCircle } from "react-icons/bs";

const ItrSpecialOffer = () => {
    const tiers = [
        {
            name: "ITR 1",
            price: "₹1000",
            features: ["For Salaried Individuals", "Interest Income", "One House Property"],
            color: "from-blue-400 to-cyan-400",
        },
        {
            name: "ITR 2",
            price: "₹1500",
            features: ["Capital Gains", "Foreign Income", "Multiple House Properties"],
            color: "from-purple-400 to-pink-400",
        },
        {
            name: "ITR 3",
            price: "₹2500",
            features: ["Business Income", "Professional Income", "Intraday Trading"],
            color: "from-orange-400 to-red-400",
        },
        {
            name: "ITR 4",
            price: "₹2500",
            features: ["Presumptive Business", "Startups", "Freelancers"],
            color: "from-green-400 to-emerald-400",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden font-sans pt-24 pb-12">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
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

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                            Income Tax Filing Special
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expert assisted tax filing at unbeatable prices. Choose the plan that fits your income source.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />

                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-sm text-gray-400">Starting @</span>
                                    <span className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                                        {tier.price}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-8 min-h-[120px]">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                            <BsCheckCircle className={`text-lg bg-gradient-to-r ${tier.color} bg-clip-text text-transparent shrink-0`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="block w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-center font-semibold text-white"
                                >
                                    Select Plan
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which ITR form applies to you?</h2>
                        <p className="text-gray-400 mb-8">
                            Our experts will analyze your income sources and ensure you file the correct form to avoid defect notices.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Consult an Expert Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItrSpecialOffer;
