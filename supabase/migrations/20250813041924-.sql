-- Create scholarships table with all required fields
CREATE TABLE public.scholarships (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  deadline DATE,
  amount DECIMAL(12,2),
  visa_requirement TEXT,
  country TEXT,
  min_age INTEGER,
  max_age INTEGER,
  school_level TEXT CHECK (school_level IN ('highschool', 'undergrad', 'masters', 'phd')),
  min_gpa DECIMAL(3,2),
  gender_requirement TEXT CHECK (gender_requirement IN ('male', 'female', 'any')),
  description TEXT,
  eligibility_criteria TEXT[],
  requirements TEXT[],
  application_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (scholarships are public information)
CREATE POLICY "Anyone can view scholarships" 
ON public.scholarships 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_scholarships_updated_at
BEFORE UPDATE ON public.scholarships
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample scholarship data
INSERT INTO public.scholarships (name, deadline, amount, visa_requirement, country, min_age, max_age, school_level, min_gpa, gender_requirement, description, eligibility_criteria, requirements) VALUES
('Fulbright Scholarship', '2024-10-15', 50000.00, 'Student Visa', 'USA', 18, 35, 'masters', 3.5, 'any', 'Prestigious international scholarship for graduate studies', ARRAY['Academic excellence', 'Leadership potential'], ARRAY['Bachelor degree', 'English proficiency', 'Research proposal']),
('DAAD Scholarship', '2024-09-30', 30000.00, 'Student Visa', 'Germany', 18, 32, 'masters', 3.0, 'any', 'German Academic Exchange Service scholarship', ARRAY['Academic merit', 'German language skills preferred'], ARRAY['Bachelor degree', 'Statement of purpose', 'Letters of recommendation']),
('Chevening Scholarship', '2024-11-01', 45000.00, 'Student Visa', 'UK', 18, 40, 'masters', 3.2, 'any', 'UK government global scholarship programme', ARRAY['Leadership potential', 'Professional experience'], ARRAY['Bachelor degree', 'Work experience', 'English proficiency']),
('Rhodes Scholarship', '2024-10-01', 70000.00, 'Student Visa', 'UK', 18, 24, 'masters', 3.8, 'any', 'Prestigious scholarship to University of Oxford', ARRAY['Academic excellence', 'Leadership', 'Service to others'], ARRAY['Bachelor degree', 'Exceptional academic record', 'Leadership experience']),
('Australia Awards', '2024-08-30', 35000.00, 'Student Visa', 'Australia', 18, 42, 'masters', 3.0, 'any', 'Australian government scholarship for developing countries', ARRAY['Development impact', 'Academic merit'], ARRAY['Bachelor degree', 'Work experience', 'Return to home country commitment']);