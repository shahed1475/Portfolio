"use client";

import { motion } from "framer-motion";

const SERVICES = [
    {
        title: "Agentic Workflows",
        description: "Designing autonomous agent swarms that handle complex, multi-step business logic without human intervention.",
        icon: "bolt"
    },
    {
        title: "Enterprise RAG",
        description: "Custom Retrieval-Augmented Generation systems with zero-hallucination guarantees for internal knowledge bases.",
        icon: "database"
    },
    {
        title: "SaaS Architecture",
        description: "End-to-end full-stack development focusing on sub-second latency, security, and extreme scalability.",
        icon: "code"
    },
    {
        title: "AI Security Audit",
        description: "Hardening LLM implementations against prompt injection and ensuring data privacy in automated systems.",
        icon: "shield"
    }
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    The AI Lab
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                    Specialized engineering services to integrate autonomous intelligence into your business core.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => (
                    <motion.div 
                        key={service.title} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bento-card p-8 group"
                    >
                        <div className="w-12 h-12 bg-[#0070F3]/10 border border-[#0070F3]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0070F3] group-hover:text-white transition-all duration-500">
                            <span className="material-symbols-outlined">{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bento-card p-8 group md:col-span-2"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">Custom LLM Fine-Tuning</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Optimizing open-source models (Llama 3, Mistral) for specific domain expertise, reducing costs while increasing precision.
                            </p>
                        </div>
                        <div className="flex-none bg-[#0070F3] text-white px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-[#0070F3]/80 transition-all">
                            Get Custom Quote
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
