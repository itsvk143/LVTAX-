"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "services",
    path: "/services",
  },
  {
    name: "testimonials",
    path: "/testimonials",
  },
  {
    name: "IncomeTaxCalculator",
    path: "/IncomeTaxCalculator ",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "Offers",
    path: "/offer",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-cool">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <Button variant="outline"
                              size="lg"
                              className="uppercase flex mb-10 items-center gap-2">
            
                        LV TAX CONSULTANCY<span className="text-accent">.</span>
                        </Button>
          </Link>
        
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              const isActive = link.path === pathname;
              const isOffer = link.name.toLowerCase() === "offers";

              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`capitalize text-xl transition-all px-3 py-1 rounded
                    ${isActive ? "text-accent border-b-2 border-accent" : ""}
                    ${isOffer ? "border border-accent text-accent" : "hover:text-accent"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
        </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
