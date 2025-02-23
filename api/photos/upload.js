import { supabase } from "../../src/utils/supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const uploadPhoto = async (file) => {
    const filePath = `uploads/${Date.now()}_${file.name}`;
  
    const { data, error } = await supabase.storage.from("photos").upload(filePath, file);
  
    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }
  
    return supabase.storage.from("photos").getPublicUrl(filePath).publicUrl;
  };
}
