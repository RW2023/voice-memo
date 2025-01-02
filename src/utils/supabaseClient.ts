import { createClient } from "@supabase/supabase-js";

// Supabase project details
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""; // Replace with your Supabase URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""; // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseKey);
