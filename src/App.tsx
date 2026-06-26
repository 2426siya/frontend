import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed z-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px] transition-all duration-300"
        style={{
          left: mouse.x - 175,
          top: mouse.y - 175,
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10">

        {/* Purple Glow */}
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        {/* Cyan Glow */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      <Navbar />

      <main className="relative z-10">

        <Hero />

        <Features />

        <Workflow />

        <Pricing />

        <FAQ />

      </main>

      <Footer />

    </div>
  );
}

export default App;