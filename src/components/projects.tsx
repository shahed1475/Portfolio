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
        image: "/projects/blackgpt.png", // Reusing image for placeholder
        description: "An AI-based medical diagnostic platform that leverages advanced machine learning to deliver healthcare insights.",
        metrics: [
            { label: "Precision", value: "98.5% Accuracy" },
            { label: "Data", value: "HIPAA Compliant" }
        ],
        link: "https://www.clarify.ai/"
    }
]

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
    axis: "x",
  });

  return (
    <section id="projects" className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] mb-6"
                    >
                        Case Studies
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter"
                    >
                        Production-grade <span className="text-muted-foreground">AI Systems.</span>
                    </motion.h2>
                </div>
                <div className="flex gap-4 mb-2">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Scroll to explore</div>
                    <div className="w-12 h-px bg-border self-center" />
                </div>
            </div>
        </div>
        
        <div ref={targetRef} className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 lg:px-[calc((100vw-1280px)/2+48px)] gap-8 pb-12">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={project.title} 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-none w-[85vw] md:w-[600px] snap-center"
                >
                    <div className="bento-card overflow-hidden group h-full flex flex-col">
                        <div className="aspect-video bg-gray-900 overflow-hidden relative">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                        <div className="p-8 md:p-10 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">{project.category}</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{project.subCategory}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">{project.title}</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                                {project.description}
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10 mt-auto">
                                {project.metrics.map((metric) => (
                                    <div key={metric.label} className="p-4 rounded-2xl bg-secondary/50 border border-border">
                                        <span className="block text-foreground font-bold text-lg mb-1">{metric.label}</span>
                                        <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={project.link} target="_blank" className="inline-flex items-center gap-3 text-foreground font-bold hover:text-primary transition-colors text-sm uppercase tracking-widest">
                                View Full Case Study 
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
            {/* Spacer for right padding in scroll */}
            <div className="flex-none w-1 md:w-24" />
        </div>
    </section>
  );
}
