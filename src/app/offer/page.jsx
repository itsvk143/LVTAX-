"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Offer = () => {
  const router = useRouter();

  const offers = [
    {
      id: 1,
      type: "css",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "itr",
      title: "Exclusive Tax Filing Offer",
      description: "Get expert assistance for your ITR filing at discounted rates. Limited time offer!",
      link: "/offer/itr-special",
      price: "₹999",
      priceLabel: "STARTING @",
    },
    {
      id: 2,
      type: "css",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      icon: "gst",
      title: "GST Filing Special",
      description: "Complete GST Registration & Filing services @ ₹2500 per year. Hassle-free compliance.",
      link: "/offer/gst-special",
      price: "₹2500",
      priceLabel: "PER YEAR",
    },
    {
      id: 3,
      type: "css",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: "tax",
      title: "Tax Planning",
      description: "Expert tax planning to maximize your savings. tailored to your financial goals.",
      link: "/services/tax-planning",
      price: "FREE",
      priceLabel: "CONSULTATION",
    },
    {
      id: 4,
      type: "css",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      icon: "gst-reg",
      title: "GST Registration",
      description: "Get your business registered under GST completely online. Fast & secure.",
      link: "/services/gst-registration",
      price: "₹1000",
      priceLabel: "STARTING @",
    },
  ];

  const handleCardClick = (offer) => {
    if (offer.link) {
      router.push(offer.link);
    } else if (offer.type === "image") {
      window.open(offer.image, '_blank');
    }
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-6">
            Special Offers
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest deals and discounts on tax consultancy services. <br className="hidden md:block" />
            Don't miss out on these limited-time opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
              onClick={() => handleCardClick(offer)}
            >
              <div className="relative overflow-hidden aspect-video group">
                {offer.type === "image" ? (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${offer.gradient} flex flex-col items-center justify-center text-white p-6 transform group-hover:scale-105 transition-transform duration-500`}>
                    <p className="font-bold text-lg text-center drop-shadow-md mb-2">{offer.priceLabel}</p>
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-1 shadow-lg">
                      <h2 className="text-3xl font-bold">{offer.price}</h2>
                    </div>
                    <p className="text-sm opacity-90 tracking-widest mt-2">LIMITED TIME DEAL</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full flex items-center gap-2 text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink size={18} />
                    View Offer
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {offers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No active offers at the moment. Please check back later!</p>
          </div>
        )}

        {/* Separate Image Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-8">
              Promotional Flyers
            </h2>
            <div className="max-w-4xl mx-auto bg-white/5 p-4 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/assets/offer/1.png"
                alt="Promotional Offer"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
