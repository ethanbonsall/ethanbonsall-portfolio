import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = "ttps://gvekpnebsukwwwwiczzq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2ZWtwbmVic3Vrd3d3d2ljenpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDI3MDEyOSwiZXhwIjoyMDU1ODQ2MTI5fQ.j7UP5xwjBrFOEx6Qn9-8fdrptqlqOWASxOh59To9J_Y";

export const supabase = createClient(supabaseUrl, supabaseKey);
