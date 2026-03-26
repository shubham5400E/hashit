import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://herzhxtyfdsjeebacnlz.supabase.co";
const supabaseAnonKey =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcnpoeHR5ZmRzamVlYmFjbmx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTUyNTAsImV4cCI6MjA5MDA5MTI1MH0.-xfl4RItcKXYxa0eMlZCsvw2Cxy98ED94YnFBrO4Atk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
