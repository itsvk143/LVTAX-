"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaBriefcase, FaComments, FaCalculator, FaGift, FaQuoteLeft } from "react-icons/fa";

const links = [
  {
    name: "home",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "services",
    path: "/services",
    icon: <FaBriefcase />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <FaQuoteLeft />,
  },
  {
    name: "Income Tax Calculator",
    path: "/IncomeTaxCalculator",
    icon: <FaCalculator />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <FaComments />,
  },
  {
    name: "Offers",
    path: "/offer",
    icon: <FaGift />,
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent hover:text-white transition-colors" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-slate-950/95 backdrop-blur-xl border-l border-white/10 p-0">
        {/* Logo Section */}
        <div className="mt-20 mb-12 pl-10 text-left">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              LV TAX<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-start gap-8 px-10">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            const isOffer = link.name.toLowerCase() === "offers";

            return (
              <Link
                href={link.path}
                key={index}
                className={`
                  text-lg capitalize font-medium transition-all duration-300 flex items-center gap-4
                  ${isActive
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-white/70 hover:text-white hover:translate-x-2"
                  }
                  ${isOffer
                    ? "mt-4 px-8 py-3 bg-gradient-to-r from-accent to-blue-500 rounded-full text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(0,255,153,0.4)] hover:scale-105 border-0 hover:text-slate-900"
                    : ""
                  }
                `}
              >
                {!isOffer && <span className="text-xl w-6 flex justify-center">{link.icon}</span>}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
