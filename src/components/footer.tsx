import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-black text-sm">F</span>
                    <span>FAHAD</span>
                </div>
                <div className="text-gray-500 text-sm">
                    © 2026 PopupGenix. Engineered with precision.
                </div>
                <div className="flex gap-8">
                    <Link href="#about" className="text-gray-500 hover:text-white text-sm transition-colors">About</Link>
                    <Link href="#projects" className="text-gray-500 hover:text-white text-sm transition-colors">Work</Link>
                    <Link href="#services" className="text-gray-500 hover:text-white text-sm transition-colors">Lab</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
