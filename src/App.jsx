import LogoIntro from "./components/LogoIntro.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Programs from "./components/Programs.jsx";
import Gallery from "./components/Gallery.jsx";
import Members from "./components/Members.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/ui/SectionDivider.jsx";

const NAVY_950 = "#05070C";
const NAVY_900 = "#0A0C13";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy-950 font-body text-white">
        <LogoIntro />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider from={NAVY_950} to={NAVY_900} />
          <About />
          <SectionDivider from={NAVY_900} to={NAVY_950} />
          <Programs />
          <SectionDivider from={NAVY_950} to={NAVY_900} />
          <Gallery />
          <SectionDivider from={NAVY_900} to={NAVY_950} />
          <Members />
          <SectionDivider from={NAVY_950} to={NAVY_900} />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
