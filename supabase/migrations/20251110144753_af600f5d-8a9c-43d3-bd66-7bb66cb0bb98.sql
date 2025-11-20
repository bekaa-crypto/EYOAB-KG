-- Create students table
CREATE TABLE public.students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 3 AND age <= 6),
  class TEXT NOT NULL CHECK (class IN ('KG1', 'KG2', 'KG3')),
  parent_contact TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create teachers table
CREATE TABLE public.teachers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_am TEXT NOT NULL,
  subject TEXT NOT NULL,
  subject_am TEXT NOT NULL,
  experience INTEGER NOT NULL,
  contact TEXT,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create admissions table
CREATE TABLE public.admissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  child_name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 3 AND age <= 6),
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Public read access for students and teachers (for website visitors)
CREATE POLICY "Anyone can view students"
  ON public.students FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view teachers"
  ON public.teachers FOR SELECT
  USING (true);

-- Allow anyone to submit admissions
CREATE POLICY "Anyone can submit admission"
  ON public.admissions FOR INSERT
  WITH CHECK (true);

-- Allow anyone to view admissions (could be restricted later)
CREATE POLICY "Anyone can view admissions"
  ON public.admissions FOR SELECT
  USING (true);