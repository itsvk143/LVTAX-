import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import MarqueeNews from "@/components/MarqueeNews";

const Home = () => {
  
  
  return (
    
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-5">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Reduce you TAX BURDEN with expert ADVICE of </span>
            <h1 className="h1 mb-6">
              TAX EXPERT
              <br /> <span className="text-accent">VIKASH KUMAR</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Experienced Tax Consultant specializing in <br />
            <span className="text-accent">* </span>
              FINANCIAL ADVISORY SERVICES.<br />
             <span className="text-accent">* </span>
              TAX PLANNING<br />
             <span className="text-accent">* </span>
              TAX COMPLIANCE<br />
          
            Skilled in optimizing tax strategies for <br /> INDIVIDUALS and BUSINESSES to MAXIMIZE SAVING <br />while ensuring full LEGAL compliance
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/incometaxrule.pdf"
                download="Income_Tax_Rules.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Tax Rule books</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
             
              <div className="mb-5 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <MarqueeNews /><br />

      </div>
      <Stats />
    </section>
  );
};

export default Home;


