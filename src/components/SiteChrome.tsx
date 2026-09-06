import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";

function Brand() {
  return (
    <Link to="/" className="group inline-flex flex-col leading-none" aria-label="PYAR Architects home">
      <span className="font-display text-2xl tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">PYAR</span>
      <span className="mt-1 text-[0.56rem] font-light uppercase tracking-[0.42em] text-muted-foreground">Architects</span>
    </Link>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-nav backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link text-primary" }} activeOptions={{ exact: item.to === "/" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button variant="iconGhost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></Button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] bg-overlay backdrop-blur-2xl md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex h-20 items-center justify-between px-5"><Brand /><Button variant="iconGhost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}><X /></Button></div>
            <motion.nav className="flex h-[calc(100vh-5rem)] flex-col justify-center gap-6 px-8" initial={{ y: 30 }} animate={{ y: 0 }}>
              {navItems.map((item, index) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-display text-5xl text-foreground transition-colors hover:text-primary"><span className="mr-4 font-sans text-xs text-primary">0{index + 1}</span>{item.label}</Link>)}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
      <footer className="border-t border-border bg-surface px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.7fr_1fr]">
          <div><Brand /><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Perfect Youths In Architectural Reign — shaping meaningful spaces across Bangalore and beyond.</p></div>
          <div><p className="label">Explore</p><div className="mt-5 flex flex-col gap-3">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-muted-foreground hover:text-primary">{item.label}</Link>)}</div></div>
          <div><p className="label">Connect</p><div className="mt-5 space-y-3 text-sm text-muted-foreground"><a className="block hover:text-primary" href="tel:+918438312410">+91 84383 12410</a><a className="block hover:text-primary" href="mailto:pyararchitects@gmail.com">pyararchitects@gmail.com</a><p>Bangalore, India</p><a className="inline-flex items-center gap-2 text-primary" href="https://www.instagram.com/pyar_architects" target="_blank" rel="noreferrer"><Instagram className="size-4" /> Instagram</a></div></div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Perfect Youths In Architectural Reign (PYAR)</div>
      </footer>
      <a href="https://wa.me/918438312410" target="_blank" rel="noreferrer" aria-label="Chat with PYAR Architects on WhatsApp" className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-luxe transition-transform hover:scale-105"><MessageCircle className="size-5" /></a>
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return <section className="relative flex min-h-[68vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20"><motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={image} alt="Contemporary architecture by PYAR Architects" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-hero" /><div className="relative mx-auto w-full max-w-7xl"><p className="label">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.04] sm:text-7xl lg:text-8xl">{title}</h1></div></section>;
}