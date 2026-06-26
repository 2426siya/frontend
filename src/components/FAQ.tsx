import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How does Nexus AI process business data?",
    answer:
      "Nexus AI securely connects to your data sources, applies AI models, and generates business insights in real time.",
  },
  {
    question: "Can I integrate with existing tools?",
    answer:
      "Yes. Nexus AI supports APIs, CRMs, cloud platforms, databases and enterprise software.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and industry-standard security practices.",
  },
  {
    question: "Do I need AI knowledge?",
    answer:
      "No. The platform is designed for both technical and non-technical teams.",
  },
  {
    question: "Can I scale later?",
    answer:
      "Yes. Upgrade anytime as your business and AI workloads grow.",
  },
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(0);

  return (

    <section className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-violet-300 text-sm">

            <Sparkles size={16} />

            FAQ

          </div>

          <h2 className="text-5xl font-black mt-8">

            Frequently Asked

            <span className="text-violet-400">

              {" "}Questions

            </span>

          </h2>

          <p className="text-gray-400 mt-6 text-lg">

            Everything you need to know before getting started.

          </p>

        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,y:20 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              className="rounded-2xl border border-white/10 bg-[#111111]"
            >

              <button
                onClick={()=>setOpen(open===index?null:index)}
                className="flex w-full justify-between p-6 text-left"
              >

                <span className="font-semibold text-lg">

                  {faq.question}

                </span>

                <ChevronDown
                  className={`transition ${
                    open===index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open===index && (

                  <motion.div
                    initial={{ height:0,opacity:0 }}
                    animate={{ height:"auto",opacity:1 }}
                    exit={{ height:0,opacity:0 }}
                  >

                    <p className="px-6 pb-6 text-gray-400 leading-8">

                      {faq.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}