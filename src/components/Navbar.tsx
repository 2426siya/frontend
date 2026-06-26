import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#09090B]/70 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-lg font-bold">
            N
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Nexus AI
            </h1>

            <p className="text-xs text-gray-400">
              Intelligent Data OS
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li className="hover:text-white transition cursor-pointer">
            Features
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Workflow
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Pricing
          </li>

          <li className="hover:text-white transition cursor-pointer">
            FAQ
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="hidden md:block px-5 py-2 rounded-full border border-violet-500/40 hover:bg-violet-600 transition">
            Login
          </button>

          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 transition">
            Get Started
          </button>

          {/* Mobile */}
          <button className="md:hidden">
            <Menu size={26} />
          </button>

        </div>

      </nav>
    </motion.header>
  );
}