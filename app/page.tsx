import DashboardLayout from "./Components/Dashboard/DashBoard";
import DashboardHero from "./Components/Dashboard/DashBoard";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import MarketingText from "./Components/Text-side/Text";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketingText />
      <Services />
      <DashboardLayout />
    </>
  );
}
