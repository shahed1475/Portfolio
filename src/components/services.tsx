"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16 md:mb-24 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
                <div className="max-w-2xl">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
                    >
                        Capabilities
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
                    >
                        The AI <span className="text-muted-foreground">Lab.</span>
                    </motion.h2>
                </div>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed"
                >
                    Specialized engineering services to integrate autonomous intelligence into your business core.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {SERVICES.map((service, index) => (
                    <motion.div 
                        key={service.title} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bento-card p-8 md:p-10 group bg-card border border-border rounded-3xl transition-all duration-300 hover:bg-secondary/50"
                    >
                        <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                            <span className="material-symbols-outlined text-primary group-hover:text-background transition-colors text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{service.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bento-card p-8 md:p-10 group md:col-span-2 lg:col-span-2 bg-foreground text-background rounded-3xl overflow-hidden relative"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center h-full relative z-10">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-black mb-4 tracking-tight">Custom LLM Fine-Tuning</h3>
                            <p className="text-background/70 text-sm md:text-base leading-relaxed max-w-lg">
                                Optimizing open-source models (Llama 3.1, Mistral) for specific domain expertise, reducing costs while increasing precision and safety.
                            </p>
                        </div>
                        <Link href="#booking" className="flex-none bg-background text-foreground px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-2xl">
                            Get Custom Quote
                        </Link>
                    </div>
                    {/* Abstract shapes for premium feel */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-background/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                </motion.div>
            </div>
        </div>
    </section>
  );
}
