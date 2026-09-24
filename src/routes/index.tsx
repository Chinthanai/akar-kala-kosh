import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, DraftingCompass, Hammer, PanelsTopLeft, Star, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/SiteChrome";
import { images, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "PYAR Architects | Architecture & Interiors Bangalore" },
    { name: "description", content: "PYAR Architects creates exceptional architecture, interiors and buildings across Bangalore and beyond." },
    { property: "og:title", content: "PYAR Architects — Designing Spaces. Defining Lives." },
    { property: "og:description", content: "A Bangalore architecture, interior design and construction studio." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:url", content: "https://pyararchitects.com/" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" },
  ], links: [{ rel: "canonical", href: "https://pyararchitects.com/" }]}),
  component: HomePage,
});

const services = [
  [DraftingCompass, "Architectural Planning", "Context-led plans that balance clarity, climate and daily life."],
  [PanelsTopLeft, "Interior Design", "Layered, tactile interiors built around light, material and movement."],
  [Hammer, "Building Construction", "End-to-end execution with rigorous attention to craft and detail."],
  [Building2, "Prefabricated Solutions", "Intelligent modular systems for residential and commercial spaces."],
] as const;

function HomePage() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  return <>
    <section className="hero-background relative flex min-h-[92vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
      <div className="absolute inset-0 bg-hero" />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="label">Bangalore · India</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.98] sm:text-7xl lg:text-[6.5rem]">Designing Spaces.<br/><span className="text-primary">Defining Lives.</span></h1>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="luxe" size="lg"><Link to="/projects">View Projects <ArrowRight /></Link></Button><Button asChild variant="luxeOutline" size="lg"><Link to="/contact">Get In Touch</Link></Button></div>
      </div>
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 lg:flex"><span className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">Scroll to explore</span><span className="h-px w-14 bg-primary" /></div>
    </section>

    <section className="relative z-10 mx-auto -mt-px max-w-7xl px-5 sm:px-8"><div className="glass-panel grid grid-cols-2 lg:grid-cols-4">{[["50+","Projects"],["8+","Years Experience"],["100%","Client Satisfaction"],["BLR+","Bangalore & Beyond"]].map(([n,l]) => <div key={l} className="border-b border-r border-border px-5 py-7 text-center last:border-r-0 lg:border-b-0"><strong className="font-display text-3xl font-medium text-primary">{n}</strong><p className="mt-1 text-[0.64rem] uppercase tracking-[0.16em] text-muted-foreground">{l}</p></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36"><Reveal><p className="label">What we shape</p><div className="mt-5 grid gap-6 lg:grid-cols-2"><h2 className="display-title">From first line<br/>to final detail.</h2><p className="max-w-xl self-end text-base leading-8 text-muted-foreground">We bring architecture, interiors and construction into one considered process—creating spaces that are grounded in place and made to endure.</p></div></Reveal><div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{services.map(([Icon,title,text],i) => <Reveal key={title} className="bg-background"><article className="group min-h-72 p-7 transition-colors hover:bg-glass"><div className="flex items-center justify-between"><Icon className="size-7 stroke-1 text-primary"/><span className="text-xs text-muted-foreground">0{i+1}</span></div><h3 className="mt-16 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article></Reveal>)}</div></section>

    <section className="bg-surface py-28 lg:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal className="flex items-end justify-between gap-6"><div><p className="label">Selected work</p><h2 className="mt-5 font-display text-5xl sm:text-6xl">Spaces with soul.</h2></div><Link to="/projects" className="hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary sm:flex">All projects <ArrowRight className="size-4" /></Link></Reveal><div className="mt-14 grid auto-rows-[230px] gap-4 md:grid-cols-2 lg:grid-cols-4">{projects.map((project,i) => <motion.button key={project.title} type="button" onClick={() => setSelected(project)} className={`project-shimmer group relative text-left ${i===0 || i===5 ? "lg:col-span-2 lg:row-span-2" : ""}`} whileHover={{ y: -4 }}><img src={project.image} alt={project.title} loading="lazy" width={i % 3 === 0 ? 1920 : 1600} height={1200} className="h-full w-full object-cover"/><div className="absolute inset-0 bg-image-overlay opacity-80 transition-opacity group-hover:opacity-100"/><div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5"><div><p className="text-[0.6rem] uppercase tracking-[0.2em] text-primary">{project.category}</p><h3 className="mt-2 font-display text-xl">{project.title}</h3></div><ArrowRight className="size-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"/></div></motion.button>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-36"><Reveal><div className="relative"><img src={images.courtyard} alt="A quiet courtyard framed by concrete architecture" loading="lazy" width={1200} height={1600} className="h-[620px] w-full object-cover"/><div className="glass-panel absolute -bottom-6 right-0 max-w-xs p-5 sm:-right-6"><p className="font-display text-xl">Built around life.</p><p className="mt-2 text-xs leading-6 text-muted-foreground">Every space begins with how it should feel.</p></div></div></Reveal><Reveal><p className="label">Our practice</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Youthful vision.<br/>Enduring design.</h2><p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">PYAR stands for Perfect Youths In Architectural Reign. We are a Bangalore-based studio driven by curiosity, precision and the belief that good design should elevate the everyday.</p><Button asChild variant="luxeOutline" size="lg" className="mt-9"><Link to="/our-story">Discover Our Story <ArrowRight /></Link></Button></Reveal></section>

    <section className="border-y border-border py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><p className="label">Client reflections</p><h2 className="mt-5 font-display text-5xl">Trust, built over time.</h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-3">{["PYAR turned a complex brief into a home that feels effortless. Every detail has purpose.","Their design clarity and on-site involvement made the entire journey reassuring and enjoyable.","A rare balance of bold ideas, practical thinking and beautiful execution from start to finish."].map((quote,i)=><Reveal key={quote}><blockquote className="glass-panel h-full p-7"><div className="flex gap-1 text-primary">{Array.from({length:5}).map((_,n)=><Star key={n} className="size-3 fill-current"/>)}</div><p className="mt-7 font-display text-xl leading-8">“{quote}”</p><footer className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">Private Residence · {i === 1 ? "Kengeri" : i === 2 ? "Sakleshpura" : "Bangalore"}</footer></blockquote></Reveal>)}</div></div></section>

    <section className="px-5 py-24 sm:px-8"><Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-l-2 border-primary bg-surface p-8 sm:p-12 lg:flex-row lg:items-center"><div><p className="label">Begin a conversation</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Ready to build your dream?</h2></div><Button asChild variant="luxe" size="lg"><Link to="/contact">Contact Us <ArrowRight /></Link></Button></Reveal></section>

    {selected && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-overlay p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={selected.title} onClick={()=>setSelected(null)}><button type="button" aria-label="Close project" onClick={()=>setSelected(null)} className="absolute right-5 top-5 z-10 p-3 text-foreground"><X/></button><motion.figure initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="max-w-5xl" onClick={e=>e.stopPropagation()}><img src={selected.image} alt={selected.title} className="max-h-[78vh] w-full object-contain"/><figcaption className="glass-panel flex flex-wrap justify-between gap-2 p-5"><span className="font-display text-xl">{selected.title}</span><span className="text-sm text-muted-foreground">{selected.location}</span></figcaption></motion.figure></div>}
  </>;
}