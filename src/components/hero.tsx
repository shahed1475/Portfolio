'use client'

import { SplineScene } from "@/components/ui/splite";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-background antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Architecture & Implementation
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.95] md:leading-[0.9]">
                Orchestrating <br />
                <span className="text-muted-foreground">Autonomous <br />Intelligence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                Bridging the gap between raw LLM research and production-grade SaaS. Specializing in Agentic Workflows and RAG Architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="#booking" className="inline-flex items-center justify-center bg-foreground text-background px-10 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all duration-300 shadow-xl gap-3 group">
                    <span>Initiate Strategy Call</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="#projects" className="inline-flex items-center justify-center bg-background border border-border text-foreground px-10 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-secondary transition-all duration-300">
                    Explore Lab
                </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] z-0" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`, backgroundSize: '48px 48px' }} 
      />
    </section>
  );
}
