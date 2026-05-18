"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";

// Simple wrap function to replace @motionone/utils
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface TechItem {
  name: string;
}

const technologies: TechItem[] = [
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "LangChain" },
  { name: "Vercel" },
  { name: "Pinecone" },
  { name: "AWS" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Python" },
  { name: "PostgreSQL" },
];

function ParallaxText({ children, baseVelocity = 100 }: { children: React.ReactNode; baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap gap-10" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
        >
          Technology Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter"
        >
          High-performance <span className="text-muted-foreground">foundations.</span>
        </motion.h2>
      </div>

      <div className="relative py-16">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

        <div className="relative z-10">
          <ParallaxText baseVelocity={-1.5}>
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-secondary border border-border group transition-all duration-500"
              >
                <span className="text-foreground text-sm font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </ParallaxText>
        </div>
      </div>

      <div className="relative mt-8">
         <div className="relative z-10">
          <ParallaxText baseVelocity={1.5}>
            {[...technologies].reverse().map((tech) => (
              <motion.div
                key={`${tech.name}-rev`}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-secondary border border-border group transition-all duration-500"
              >
                <span className="text-foreground text-sm font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </ParallaxText>
        </div>
      </div>
    </section>
  );
}
