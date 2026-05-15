import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import TeamMembers from "./components/TeamMembers";
import TrustedCompanies from "./components/TrustedCompanies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);

  return (
    <div className="relative">
      <Header contactRef={contactRef} />
      <main className="px-5 mx-auto sm:px-10 md:px-30 space-y-25">
        <Hero />

        <TrustedCompanies></TrustedCompanies>

        <Services></Services>

        <OurWork />

        <TeamMembers></TeamMembers>

        <Contact contactRef={contactRef}></Contact>
      </main>
      <Footer />
    </div>
  );
}
