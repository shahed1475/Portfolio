"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    testimonial: "The architecture provided transformed our entire backend. We've seen a 5x increase in deployment speed and zero downtime since the migration.",
    by: "Alex Rivers",
    role: "CEO at TechCorp",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    testimonial: "I'm confident our data is safe. The security-first approach and attention to detail in the cloud architecture is unparalleled in the industry.",
    by: "Dan Chen",
    role: "CTO at SecureNet",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    testimonial: "Exceptional design and performance. The UI is not only beautiful but incredibly intuitive. Our users have never been happier with the experience.",
    by: "Stephanie Low",
    role: "COO at InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    testimonial: "The AI integration was seamless. It has automated 40% of our manual tasks, allowing our team to focus on high-level strategic growth.",
    by: "Marie Dubois",
    role: "CFO at FuturePlanning",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  }
];

export const StaggerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardOffset, setCardOffset] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCardOffset(window.innerWidth < 1280 ? 400 : 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) return [{ ...testimonials[currentIndex], position: 0 }];
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [
      { ...testimonials[prev], position: -1 },
      { ...testimonials[currentIndex], position: 0 },
      { ...testimonials[next], position: 1 }
    ];
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
          >
            Client Success
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            Engineering <span className="text-muted-foreground">trust.</span>
          </motion.h2>
        </div>

        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleTestimonials().map((testimonial) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                layout
                initial={{ opacity: 0, scale: 0.9, x: direction > 0 ? 100 : -100 }}
                animate={{ 
                  opacity: testimonial.position === 0 ? 1 : 0.3,
                  scale: testimonial.position === 0 ? 1 : 0.9,
                  x: isMobile ? 0 : (testimonial.position || 0) * cardOffset,
                  zIndex: testimonial.position === 0 ? 20 : 10,
                  filter: testimonial.position === 0 ? 'blur(0px)' : 'blur(2px)',
                }}
                exit={{ opacity: 0, scale: 0.9, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "absolute w-full max-w-[340px] md:max-w-[440px] rounded-[2.5rem] p-8 md:p-12 shadow-sm",
                  "bg-card border border-border",
                  "flex flex-col justify-between h-[380px] md:h-[440px]",
                  testimonial.position === 0 ? "shadow-2xl" : "pointer-events-none"
                )}
              >
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-primary/20 mb-8" />
                  <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-5 border-t border-border pt-8">
                  <img src={testimonial.imgSrc} alt={testimonial.by} className="w-12 h-12 rounded-2xl object-cover grayscale" />
                  <div>
                    <h4 className="text-foreground font-black text-sm tracking-tight">{testimonial.by}</h4>
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col items-center gap-10">
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-secondary border border-border text-foreground transition-all hover:bg-muted/10 active:scale-95 focus:outline-none shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-secondary border border-border text-foreground transition-all hover:bg-muted/10 active:scale-95 focus:outline-none shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
