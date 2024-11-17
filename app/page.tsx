import AssuranceSection from "./Components/Assurance/AssuranceSection";
import Contact from "./Components/Contact/Contact";
import DashboardLayout from "./Components/Dashboard/DashBoard";
import DashboardHero from "./Components/Dashboard/DashBoard";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Gradient from "./Components/Gradient/Gradient";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import TeamPlayerSection from "./Components/TeamsPlayer/TeamsPlayer";
import MarketingText from "./Components/Text-side/Text";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketingText />
      <Services />
      <DashboardLayout />
      <Gradient />
      <AssuranceSection />
      <TeamPlayerSection />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
