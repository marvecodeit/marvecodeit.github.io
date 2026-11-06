import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Installation } from "./components/Installation";
import { Navbar } from "./components/Navbar";
import { Privacy } from "./components/Privacy";
import { Showcase } from "./components/Showcase";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Features />
        <Privacy />
        <HowItWorks />
        <Showcase />
        <Installation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
