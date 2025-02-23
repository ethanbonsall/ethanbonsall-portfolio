import { supabase } from "src/utils/supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const newSongs = req.body;

    const { data, error } = await supabase
      .from("songs")
      .upsert(newSongs, { onConflict: ["id"] }); // Ensures uniqueness

    if (error) throw error;

    res.status(200).json({ message: "Songs updated successfully!", data });
  } catch (error) {
    res.status(500).json({ message: "Failed to save songs", error: error.message });
  }
}
