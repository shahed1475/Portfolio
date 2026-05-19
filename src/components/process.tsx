"use client";

import { motion } from "framer-motion";

const PHASES = [
    {
        num: "01",
        title: "System Architecture",
        description: "Mapping data flows, selecting vector architectures, and defining the agent orchestration logic before a single line of code is written."
    },
    {
        num: "02",
        title: "Iterative Deployment",
        description: "Building the core RAG/Agentic layer with continuous benchmarking against domain-specific edge cases."
    },
    {
        num: "03",
        title: "Optimization & Scale",
        description: "Hardening security, optimizing token usage, and scaling the infrastructure to handle enterprise-level request volumes."
    }
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16 md:mb-24 text-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
                >
                    Methodology
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tighter"
                >
                    How I <span className="text-muted-foreground">Build.</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                >
                    A rigorous, architectural approach to deploying intelligence at scale.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                {PHASES.map((phase, idx) => (
                    <motion.div 
                        key={phase.num} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-6 relative"
                    >
                        <div className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-4">
                            Phase {phase.num}
                            <div className="h-px flex-grow bg-primary/20" />
                        </div>
                        <h3 className="text-foreground font-black text-2xl tracking-tight leading-tight">{phase.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{phase.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
