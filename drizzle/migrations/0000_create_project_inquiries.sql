CREATE TABLE public.project_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 320),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 40),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 5000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT ALL ON public.project_inquiries TO service_role;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a project inquiry"
ON public.project_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);