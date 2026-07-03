import { ArrowUpRight } from "lucide-react";
import { telegramUrl } from "@/config/site";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[24px] border border-gold/15 bg-obsidian/70 px-4 py-3 shadow-premium backdrop-blur-xl sm:px-5">
        <a href="#" className="flex items-center gap-3" aria-label="Anti-Doomer">
          <span className="size-2.5 rounded-full bg-gold shadow-[0_0_24px_rgba(200,155,60,0.75)]" />
          <span className="text-sm font-medium text-parchment">Anti-Doomer</span>
        </a>
        <a
          href={telegramUrl}
          className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-glow transition duration-300 hover:bg-parchment active:scale-[0.98]"
        >
          Начать путь
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </nav>
    </header>
  );
}
