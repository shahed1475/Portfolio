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
    <section id="process" className="py-32 relative overflow-hidden bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How I Build</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A rigorous, architectural approach to deploying intelligence at scale.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {PHASES.map((phase) => (
                    <div key={phase.num} className="space-y-4">
                        <div className="text-[#0070F3] font-mono text-xs font-bold uppercase tracking-widest">Phase {phase.num}</div>
                        <h3 className="text-white font-bold text-xl">{phase.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
