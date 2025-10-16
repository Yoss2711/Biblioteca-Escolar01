import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://nwymtznkwvmqwtptpixp.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eW10em5rd3ZtcXd0cHRwaXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDE0NzEsImV4cCI6MjA3Mzg3NzQ3MX0.ZFRK-K9s7yATi545-6a0qqySBa6XQ15zuSXdUFm52jo"; 
export const supabaseClient = createClient(supabaseUrl, supabaseKey);