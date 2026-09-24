import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/SiteChrome";
import { images, projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({ staticData: { sitemap: true }, head: () => ({ meta: [
  { title: "Projects | PYAR Architects Bangalore" }, { name: "description", content: "Explore residential, commercial, interior and renovation work by PYAR Architects." },
  { property: "og:title", content: "Selected Projects | PYAR Architects" }, { property: "og:description", content: "Architecture and interiors made with precision across Karnataka." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  { property: "og:url", content: "https://pyararchitects.com/projects" },
  { property: "og:image", content: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" },
  { name: "twitter:image", content: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" },
], links: [{ rel: "canonical", href: "https://pyararchitects.com/projects" }] }), component: ProjectsPage });

function ProjectsPage() {
  const [filter,setFilter]=useState("All"); const [selected,setSelected]=useState<(typeof projects)[number]|null>(null);
  const filters=["All","Residential","Commercial","Interior","Renovation"];
  const visible=filter==="All"?projects:projects.filter(p=>p.category===filter);
  return <><PageHero eyebrow="Selected work" title="Built ideas. Lived experiences." image={images.commercial}/><section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="flex flex-wrap gap-2 border-b border-border pb-6" role="tablist" aria-label="Filter projects">{filters.map(item=><Button key={item} variant={filter===item?"luxe":"iconGhost"} size="sm" onClick={()=>setFilter(item)} role="tab" aria-selected={filter===item}>{item}</Button>)}</div><motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">{visible.map((project,i)=><motion.button layout key={project.title} type="button" onClick={()=>setSelected(project)} className="project-shimmer group relative mb-4 block h-auto w-full break-inside-avoid text-left"><img src={project.image} alt={project.title} loading="lazy" className={`w-full object-cover ${i%3===1?"h-[520px]":"h-[380px]"}`}/><div className="absolute inset-0 bg-image-overlay opacity-75 transition-opacity group-hover:opacity-100"/><div className="absolute inset-x-0 bottom-0 z-10 p-6"><div className="flex items-center justify-between"><span className="label">{project.category}</span><ArrowUpRight className="size-5 text-primary"/></div><h2 className="mt-3 font-display text-2xl">{project.title}</h2><p className="mt-1 text-xs text-muted-foreground">{project.location}</p></div></motion.button>)}</motion.div>{visible.length===0&&<p className="py-20 text-center text-muted-foreground">More work in this category is coming soon.</p>}</section>{selected&&<div className="fixed inset-0 z-[80] flex items-center justify-center bg-overlay p-4 backdrop-blur-xl" onClick={()=>setSelected(null)}><Button variant="iconGhost" size="icon" className="absolute right-5 top-5" onClick={()=>setSelected(null)} aria-label="Close"><X/></Button><Reveal className="w-full max-w-5xl" ><div onClick={e=>e.stopPropagation()}><img src={selected.image} alt={selected.title} className="max-h-[72vh] w-full object-cover"/><div className="glass-panel p-6"><p className="label">{selected.category}</p><h2 className="mt-2 font-display text-3xl">{selected.title}</h2><p className="mt-2 text-sm text-muted-foreground">{selected.location} · A study in material, light and considered living.</p></div></div></Reveal></div>}</>;
}