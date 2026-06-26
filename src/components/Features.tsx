import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Database,
  BarChart3,
  Cpu,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Agents",
    desc: "Deploy autonomous AI agents to automate repetitive workflows and accelerate business operations.",
  },
  {
    icon: Database,
    title: "Smart Data Pipelines",
    desc: "Process structured and unstructured data in real-time with intelligent transformations.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "Generate actionable forecasts using machine learning powered insights.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "End-to-end encryption with enterprise-grade compliance and secure infrastructure.",
  },
  {
    icon: Cloud,
    title: "Cloud Integrations",
    desc: "Connect seamlessly with CRMs, databases, APIs, and cloud storage providers.",
  },
  {
    icon: Cpu,
    title: "Real-Time Processing",
    desc: "Analyze millions of events instantly with ultra-fast AI inference pipelines.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-violet-400 text-sm">
            AI Command Center
          </p>

          <h2 className="mt-5 text-5xl font-black">
            One Platform.
            <span className="text-violet-400"> Infinite Intelligence.</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Build, deploy and monitor AI-powered workflows through an
            intelligent operating system designed for modern businesses.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-[#121212] p-8 hover:border-violet-500/40 transition-all duration-300 shadow-lg hover:shadow-violet-500/10"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-7">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-violet-400 font-medium opacity-0 group-hover:opacity-100 transition">

                  Learn More →

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:.3 }}
          viewport={{ once:true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-24"
        >

          {[
            ["250+", "Enterprise Clients"],
            ["99.98%", "System Uptime"],
            ["12M+", "Predictions Daily"],
            ["24/7", "AI Monitoring"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-2xl bg-[#111111] border border-white/10 p-8 text-center"
            >

              <h3 className="text-5xl font-black text-violet-400">
                {value}
              </h3>

              <p className="mt-4 text-gray-400">
                {label}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}