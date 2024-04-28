import Achievments from "@/components/Achievments";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Leadsguru from "@/components/Leadsguru";
import Presentation from "@/components/Presentation";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Leadsguru />
      <Achievments />
      <Presentation />
      <Team />
      <Footer />
    </div>
  );
}
