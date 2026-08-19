import Image from "next/image";
import ScrollNavbar from "./blocks/navbar";
import HeroSplit from "./blocks/hero-split";
import LogoCloudAnimated from "./blocks/stats-section";
import AboutSection from "./blocks/about-section";
import Highlights from "./blocks/highlights";
import FinancingPartners from "./blocks/financial-partners";
import VideoAndLocation from "./blocks/video";
import ExpandingGallery from "./blocks/expanding-gallery";
import FounderSection from "./blocks/founder";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <>
          <ScrollNavbar />
          <HeroSplit />
          <LogoCloudAnimated />
          <AboutSection />
          <Highlights />
          <FinancingPartners />
          <VideoAndLocation />
          <ExpandingGallery />
          <FounderSection />
        </>
     </div>
     );
   }
