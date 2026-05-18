import Link from "next/link";
import Image from "next/image";

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
    }
]

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Selected Case Studies</h2>
                <p className="text-gray-400 max-w-2xl text-lg">
                    Deep dives into production-grade AI systems and SaaS architectures designed for scale and high performance.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((project) => (
                    <div key={project.title} className="bento-card overflow-hidden group">
                        <div className="aspect-video bg-gray-900 overflow-hidden relative">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 rounded bg-[#0070F3]/10 border border-[#0070F3]/20 text-[10px] font-bold text-[#0070F3] uppercase tracking-tighter">{project.category}</span>
                                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{project.subCategory}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                                {project.metrics.map((metric) => (
                                    <div key={metric.label} className="p-3 rounded-lg bg-white/5 border border-white/10">
                                        <span className="block text-white font-bold">{metric.label}</span>
                                        <span className="text-gray-500 text-xs">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#0070F3] transition-colors">
                                View Case Study 
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
