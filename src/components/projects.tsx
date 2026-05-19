"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
    {
        title: "BlackGPT.us",
        category: "Generative AI",
        subCategory: "SaaS",
        image: "/projects/blackgpt.png",
        description: "A specialized RAG-based chat ecosystem designed for the black community. Engineered for zero-hallucination and culturally nuanced responses.",
        metrics: [
            { label: "Vector DB", value: "Pinecone Integration" },
            { label: "LLM", value: "GPT-4o Orchestration" }
        ],
        link: "https://blkgpt.com/"
    },
    {
        title: "klevere.ai",
        category: "Automation",
        subCategory: "Enterprise",
        image: "/projects/klevere.png",
        description: "Enterprise-grade UI assistant tools orchestrating complex marketing and finance workflows through autonomous agents.",
        metrics: [
            { label: "99.9%", value: "System Uptime" },
            { label: "50+", value: "AI Workflows" }
        ],
        link: "https://www.klevere.ai/"
    },
    {
        title: "Clarify.ai",
        category: "Medical AI",
        subCategory: "Platform",
        image: "/projects/clarify.png",
        description: "An AI-based medical diagnostic platform that leverages advanced machine learning to deliver healthcare insights.",
        metrics: [
            { label: "Precision", value: "98.5% Accuracy" },
            { label: "Data", value: "HIPAA Compliant" }
        ],
        link: "https://www.clarify.ai/"
    }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] mb-6"
                    >
                        Case Studies
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
                    >
                        Production-grade <span className="text-muted-foreground">AI Systems.</span>
                    </motion.h2>
                </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={project.title} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="bento-card overflow-hidden group h-full flex flex-col bg-card border border-border rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <div className="aspect-[16/10] bg-gray-900 overflow-hidden relative">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-bold text-primary uppercase tracking-wider">{project.category}</span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 text-[9px] font-bold text-muted-foreground uppercase tracking-wider">{project.subCategory}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
                                    {project.metrics.map((metric) => (
                                        <div key={metric.label} className="p-3 rounded-xl bg-secondary/50 border border-border">
                                            <span className="block text-foreground font-bold text-sm mb-0.5">{metric.label}</span>
                                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={project.link} target="_blank" className="inline-flex items-center gap-3 text-foreground font-bold hover:text-primary transition-colors text-xs uppercase tracking-widest">
                                    View Full Case Study 
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
