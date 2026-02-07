"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "next/navigation";

const ServiceDetails = () => {
    const params = useParams();
    const slug = params.slug;

    const serviceData = {
        "tax-planning": {
            title: "Tax Planning",
            description: "Strategic planning to minimize tax liability through best practices and legal deductions.",
            offers: ["Free initial consultation", "Year-round support available"],
        },
        "income-tax-return": {
            title: "Income Tax Return",
            description: "Accurate and timely filing of your income tax returns to ensure compliance.",
            offers: ["Discount for early filing", "Expert review included"],
        },
        "gst-registration": {
            title: "GST Registration",
            description: "Hassle-free GST registration process for your business.",
            offers: ["Online GST Registration STARTING @ 1000 RS ONLY", "Fast processing", "Documentation assistance"],
        },
        "gst-return": {
            title: "GST Return",
            description: "Monthly and quarterly GST return filing services.",
            offers: ["Compliance check", "Reconciliation support"],
        },
    };

    const service = serviceData[slug] || {
        title: slug?.replace(/-/g, " ").toUpperCase(),
        description: "Detailed information about this service is coming soon.",
        offers: [],
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden font-sans pt-24 pb-12">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <BsArrowLeft className="text-xl" />
                    <span>Back to Services</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        {service.title}
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Service Details
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {service.description}
                        </p>

                        {service.offers && service.offers.length > 0 && (
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
                                <h3 className="text-xl font-bold text-blue-300 mb-4">
                                    Current Offers & Benefits
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {service.offers.map((offer, index) => (
                                        <li key={index}>{offer}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-10">
                            <p className="text-gray-400 text-sm">
                                Connect with us to know more about {service.title} packages.
                            </p>
                            <Link href="/contact" className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetails;
