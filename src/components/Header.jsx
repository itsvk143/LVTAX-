import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">


      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <Link href="/">
          <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
            LV TAX CONSULTANCY<span className="text-accent">.</span>
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/">
            <Button>Hire Me</Button>
          </Link> */}
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
          {/* <Link href="/">
            <Button>Hire Me</Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;