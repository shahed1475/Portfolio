import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative z-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold tracking-tight text-foreground flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-foreground text-background flex items-center justify-center rounded-xl font-black text-xs transition-transform group-hover:rotate-6">F</div>
                    <span className="uppercase font-black text-sm tracking-tighter">FAHAD</span>
                </div>
                <div className="text-muted-foreground text-[11px] font-bold uppercase tracking-[0.2em]">
                    © 2026 PopupGenix. Engineered with precision.
                </div>
                <div className="flex gap-8">
                    <Link href="#about" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors uppercase font-bold tracking-[0.2em]">About</Link>
                    <Link href="#projects" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors uppercase font-bold tracking-[0.2em]">Work</Link>
                    <Link href="#services" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors uppercase font-bold tracking-[0.2em]">Lab</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
