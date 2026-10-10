import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  images: string[];
  description: string | null;
  year: number | null;
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setProjects(data || []);
        setLoading(false);
      });
  }, []);

  return { projects, loading };
}
