import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    <span className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-lg font-black text-sm">F</span>
                    <span className="uppercase font-black text-sm tracking-tighter">FAHAD</span>
                </div>
                <div className="text-muted-foreground text-sm">
                    © 2026 PopupGenix. Engineered with precision.
                </div>
                <div className="flex gap-8">
                    <Link href="#about" className="text-muted-foreground hover:text-foreground text-sm transition-colors uppercase font-bold tracking-widest text-[10px]">About</Link>
                    <Link href="#projects" className="text-muted-foreground hover:text-foreground text-sm transition-colors uppercase font-bold tracking-widest text-[10px]">Work</Link>
                    <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors uppercase font-bold tracking-widest text-[10px]">Lab</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
