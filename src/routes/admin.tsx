import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, LogOut, X } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const PASSWORD = "pyar@admin2024";

type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  images: string[];
  description: string | null;
  year: number | null;
};

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    title: "", location: "", category: "Residential",
    image: "", images: [""], description: "", year: 2024
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const categories = ["Residential", "Commercial", "Interior", "Renovation"];

  useEffect(() => { if (authed) fetchProjects(); }, [authed]);

  async function fetchProjects() {
    const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    setProjects(data || []);
  }

  function addImageField() {
    setForm({ ...form, images: [...form.images, ""] });
  }

  function removeImageField(index: number) {
    const updated = form.images.filter((_, i) => i !== index);
    setForm({ ...form, images: updated.length ? updated : [""] });
  }

  function updateImageField(index: number, value: string) {
    const updated = [...form.images];
    updated[index] = value;
    setForm({ ...form, images: updated });
  }

  async function addProject() {
    if (!form.title || !form.image) { setMsg("Title and Cover Image URL are required"); return; }
    setLoading(true);
    const cleanImages = form.images.filter(img => img.trim() !== "");
    const { error } = await supabase.from("projects").insert([{
      title: form.title,
      location: form.location,
      category: form.category,
      image: form.image,
      images: cleanImages,
      description: form.description,
      year: form.year,
    }]);
    if (error) setMsg("Error: " + error.message);
    else {
      setMsg("✅ Project added!");
      setForm({ title: "", location: "", category: "Residential", image: "", images: [""], description: "", year: 2024 });
      fetchProjects();
    }
    setLoading(false);
  }

  async function deleteProject(id: string) {
    if (!confirm("Delete this project?")) return;
    await supabase.from("projects").delete().eq("id", id);
    fetchProjects();
  }

  if (!authed) return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="glass-panel w-full max-w-sm p-8">
        <h1 className="font-display text-2xl mb-6 text-center">Admin Login</h1>
        <input type="password" placeholder="Password" value={pass}
          onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === "Enter" && (pass === PASSWORD ? setAuthed(true) : setMsg("Wrong password"))}
          className="w-full bg-transparent border border-border rounded px-4 py-2 mb-4 text-foreground" />
        <Button className="w-full" onClick={() => pass === PASSWORD ? setAuthed(true) : setMsg("Wrong password")}>
          Login
        </Button>
        {msg && <p className="mt-3 text-red-400 text-sm text-center">{msg}</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-3xl">Project Admin</h1>
          <Button variant="iconGhost" onClick={() => { setAuthed(false); setMsg(""); }}>
            <LogOut className="size-5" />
          </Button>
        </div>

        {/* Add Project Form */}
        <div className="glass-panel p-6 mb-10">
          <h2 className="font-display text-xl mb-4">Add New Project</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input placeholder="Title *" value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              className="bg-transparent border border-border rounded px-4 py-2 text-foreground" />
            <input placeholder="Location" value={form.location}
              onChange={e => setForm({...form, location: e.target.value})}
              className="bg-transparent border border-border rounded px-4 py-2 text-foreground" />
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}
              className="bg-background border border-border rounded px-4 py-2 text-foreground">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <input type="number" placeholder="Year" value={form.year}
              onChange={e => setForm({...form, year: parseInt(e.target.value)})}
              className="bg-transparent border border-border rounded px-4 py-2 text-foreground" />

            {/* Cover Image */}
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground mb-1 block">Cover Image URL * (shown in grid)</label>
              <input placeholder="https://..." value={form.image}
                onChange={e => setForm({...form, image: e.target.value})}
                className="w-full bg-transparent border border-border rounded px-4 py-2 text-foreground" />
              {form.image && <img src={form.image} className="mt-2 h-24 w-full object-cover rounded" />}
            </div>

            {/* Album Images */}
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground mb-2 block">Album Photos (multiple images for project detail)</label>
              <div className="space-y-2">
                {form.images.map((img, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input placeholder={`Photo ${i + 1} URL`} value={img}
                      onChange={e => updateImageField(i, e.target.value)}
                      className="flex-1 bg-transparent border border-border rounded px-4 py-2 text-foreground" />
                    {img && <img src={img} className="size-10 object-cover rounded" />}
                    <button onClick={() => removeImageField(i)}
                      className="text-red-400 hover:text-red-300">
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
              <Button variant="iconGhost" size="sm" className="mt-2" onClick={addImageField}>
                <Plus className="size-4 mr-1" /> Add another photo
              </Button>
            </div>

            {/* Description */}
            <textarea placeholder="Description" value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              className="bg-transparent border border-border rounded px-4 py-2 text-foreground sm:col-span-2 h-24" />
          </div>

          {msg && <p className="mt-3 text-sm text-primary">{msg}</p>}
          <Button className="mt-4" onClick={addProject} disabled={loading}>
            <Plus className="size-4 mr-2" /> {loading ? "Saving..." : "Save Project"}
          </Button>
        </div>

        {/* Projects List */}
        <h2 className="font-display text-xl mb-4">Saved Projects ({projects.length})</h2>
        <div className="space-y-3">
          {projects.map(p => (
            <div key={p.id} className="glass-panel p-4 flex items-center gap-4">
              <img src={p.image} alt={p.title} className="size-16 object-cover rounded" />
              <div className="flex-1">
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-muted-foreground">{p.category} · {p.location}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {p.images?.length ? `${p.images.length} album photo(s)` : "No album photos"}
                </p>
              </div>
              <Button variant="iconGhost" size="icon" onClick={() => deleteProject(p.id)}>
                <Trash2 className="size-4 text-red-400" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
