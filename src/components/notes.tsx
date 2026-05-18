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
    <section id="notes" className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Founder Notes</h2>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        Insights on the intersection of AI research, SaaS growth, and autonomous software engineering.
                    </p>
                </div>
                <Link href="#" className="text-primary font-bold hover:underline mb-2">View All Notes →</Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {NOTES.map((note) => (
                    <div key={note.title} className="bento-card p-8 group cursor-pointer">
                        <div className="text-muted-foreground text-xs mb-4">{note.date}</div>
                        <h3 className="text-foreground font-bold text-2xl mb-4 group-hover:text-primary transition-colors">{note.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{note.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
