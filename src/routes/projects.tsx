import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/SiteChrome";
import { images } from "@/lib/site-data";
import { useProjects, type Project } from "@/hooks/useProjects";

export const Route = createFileRoute("/projects")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Projects | PYAR Architects Bangalore" },
    { name: "description", content: "Explore our work across Karnataka." },
  ]}),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { projects, loading } = useProjects();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const filters = ["All", "Residential", "Commercial", "Interior", "Renovation"];
  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);

  function openProject(project: Project) {
    setSelected(project);
    setLightboxIndex(0);
  }

  function getAllImages(project: Project) {
    const all = [project.image, ...(project.images || [])];
    return [...new Set(all.filter(Boolean))];
  }

  function prev() {
    if (!selected) return;
    const all = getAllImages(selected);
    setLightboxIndex(i => (i - 1 + all.length) % all.length);
  }

  function next() {
    if (!selected) return;
    const all = getAllImages(selected);
    setLightboxIndex(i => (i + 1) % all.length);
  }

  return (
    <>
      <PageHero eyebrow="Selected work" title="Built ideas. Lived experiences." image={images.commercial} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {filters.map(item => (
            <Button key={item} variant={filter === item ? "luxe" : "iconGhost"} size="sm" onClick={() => setFilter(item)}>
              {item}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="py-20 text-center text-muted-foreground">Loading projects...</div>
        ) : (
          <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {visible.map((project, i) => {
              const albumCount = getAllImages(project).length;
              return (
                <motion.button layout key={project.id} type="button" onClick={() => openProject(project)}
                  className="project-shimmer group relative mb-4 block h-auto w-full break-inside-avoid text-left">
                  <img src={project.image} alt={project.title} loading="lazy"
                    className={`w-full object-cover ${i % 3 === 1 ? "h-[520px]" : "h-[380px]"}`} />
                  <div className="absolute inset-0 bg-image-overlay opacity-75 transition-opacity group-hover:opacity-100" />
                  {albumCount > 1 && (
                    <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {albumCount} photos
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    <div className="flex items-center justify-between">
                      <span className="label">{project.category}</span>
                      <ArrowUpRight className="size-5 text-primary" />
                    </div>
                    <h2 className="mt-3 font-display text-2xl">{project.title}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">{project.location}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {visible.length === 0 && !loading && (
          <p className="py-20 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>

      {/* Lightbox with album */}
      {selected && (() => {
        const allImgs = getAllImages(selected);
        return (
          <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setSelected(null)}>
            <Button variant="iconGhost" size="icon" className="absolute right-5 top-5 z-10"
              onClick={() => setSelected(null)}>
              <X />
            </Button>

            <Reveal className="w-full max-w-5xl" >
              <div onClick={e => e.stopPropagation()}>
                {/* Main image with arrows */}
                <div className="relative">
                  <img src={allImgs[lightboxIndex]} alt={selected.title}
                    className="max-h-[60vh] w-full object-cover" />
                  {allImgs.length > 1 && (
                    <>
                      <button onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 text-white">
                        <ChevronLeft className="size-6" />
                      </button>
                      <button onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 text-white">
                        <ChevronRight className="size-6" />
                      </button>
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        {lightboxIndex + 1} / {allImgs.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {allImgs.length > 1 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                    {allImgs.map((img, i) => (
                      <button key={i} onClick={() => setLightboxIndex(i)}
                        className={`flex-shrink-0 size-16 rounded overflow-hidden border-2 transition-all ${i === lightboxIndex ? "border-primary" : "border-transparent opacity-60"}`}>
                        <img src={img} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Info */}
                <div className="glass-panel p-6 mt-2">
                  <p className="label">{selected.category}</p>
                  <h2 className="mt-2 font-display text-3xl">{selected.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {selected.location} · {selected.description || "A study in material, light and considered living."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        );
      })()}
    </>
  );
}
