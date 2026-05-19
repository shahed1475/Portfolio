"use client"

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight, Zap, Shield, Cpu, Activity, Database } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

const contactOptions = [
  {
    title: "WhatsApp",
    value: "+880 1838-580258",
    href: "https://wa.me/8801838580258?text=Hi%20Fahad,%20I%20want%20to%20discuss%20an%20AI/SaaS%20project.",
    icon: MessageCircle,
    color: "text-green-500",
  },
  {
    title: "Inquiries",
    value: "fahad@popupgenix.com",
    href: "mailto:fahad@popupgenix.com?subject=AI%20SaaS%20Consultation",
    icon: Mail,
    color: "text-blue-500",
  }
];

const expertise = [
  { title: "AI Architecture", icon: Cpu, desc: "Design & deployment of scalable LLM systems." },
  { title: "Agentic Systems", icon: Zap, desc: "Autonomous workflows and crew-based AI agents." },
  { title: "SaaS Scaling", icon: Activity, desc: "Infrastructure optimization for high-growth platforms." },
  { title: "RAG Infrastructure", icon: Database, desc: "High-precision retrieval-augmented generation." }
];

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-12">
            <div>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
                >
                    Contact
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter leading-[0.95]"
                >
                    Build the <br /><span className="text-muted-foreground">future.</span>
                </motion.h2>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
                    Skip the formalities. Connect directly to discuss AI infrastructure, architecture, or partnerships.
                </p>
            </div>

            <div className="grid gap-4">
              {contactOptions.map((option, idx) => (
                <motion.a
                  key={option.title}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="group flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-3xl bg-secondary border border-border transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-center sm:text-left">
                    <div className={cn("p-4 rounded-2xl bg-background border border-border group-hover:border-primary transition-colors", option.color)}>
                        <option.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{option.title}</p>
                      <p className="text-foreground font-bold text-lg md:text-xl tracking-tight">{option.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="hidden sm:block w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((item, idx) => (
                    <div
                        key={item.title}
                        className="p-8 rounded-3xl bg-card border border-border group hover:bg-secondary transition-all duration-300"
                    >
                        <item.icon className="w-6 h-6 text-muted-foreground mb-6 group-hover:text-primary transition-colors" />
                        <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-foreground text-background flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Cpu size={120} />
              </div>
              <Image 
                src="https://i.ibb.co/93YsdTZX/Whats-App-Image-2024-11-11-at-16-35-22-cec99114.jpg" 
                alt="Fahad" 
                width={80}
                height={80}
                unoptimized
                className="w-20 h-20 rounded-3xl object-cover grayscale brightness-110 relative z-10" 
              />
              <div className="relative z-10 text-center sm:text-left">
                <p className="text-[10px] font-bold opacity-50 mb-1 tracking-widest uppercase">Chief Architect</p>
                <h3 className="text-2xl font-black tracking-tight mb-1">Fahad</h3>
                <p className="text-sm font-medium opacity-70">99.9% Uptime Mentality</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
