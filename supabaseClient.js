import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = "https://zlntgnoeilkukxjhhkav.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbnRnbm9laWxrdWt4amhoa2F2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDI2NzU2OCwiZXhwIjoyMDU1ODQzNTY4fQ.5Rhtos2H5UXX1P6G6zJq_688JhcfKoQTsXNlCfjy6q0";

export const supabase = createClient(supabaseUrl, supabaseKey);
