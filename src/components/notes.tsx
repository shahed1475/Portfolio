"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const NOTES = [
    {
        date: "MAY 2026 • 5 MIN READ",
        title: "The Shift from Chatbots to Autonomous Agents",
        description: "Why the next generation of SaaS will be defined by software that thinks, plans, and executes—not just responds."
    },
    {
        date: "APR 2026 • 8 MIN READ",
        title: "Architecting for Zero-Hallucination in Enterprise RAG",
        description: "A deep dive into advanced hybrid search and reranking techniques for production-grade AI systems."
    }
]

export function Notes() {
  return (
    <section id="notes" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                <div className="max-w-2xl text-center md:text-left">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
                    >
                        Publications
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tighter"
                    >
                        Founder <span className="text-muted-foreground">Notes.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed"
                    >
                        Insights on the intersection of AI research, SaaS growth, and autonomous software engineering.
                    </motion.p>
                </div>
                <Link href="#" className="hidden md:flex text-foreground font-black text-xs uppercase tracking-widest hover:text-primary transition-colors gap-2 items-center group">
                    View All Notes 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {NOTES.map((note, idx) => (
                    <motion.div 
                        key={note.title} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bento-card p-8 md:p-10 group cursor-pointer bg-card border border-border rounded-3xl transition-all duration-500 hover:bg-secondary/50 hover:-translate-y-1"
                    >
                        <div className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {note.date}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">{note.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">{note.description}</p>
                        <div className="flex items-center text-foreground font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 gap-2 transition-all">
                            Read Article <span className="text-primary">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <Link href="#" className="md:hidden mt-12 flex justify-center text-foreground font-black text-xs uppercase tracking-widest hover:text-primary transition-colors gap-2 items-center group">
                View All Notes 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
        </div>
    </section>
  );
}
