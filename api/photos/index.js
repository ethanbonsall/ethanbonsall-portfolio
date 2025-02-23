import { supabase } from "../../supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { data, error } = await supabase.storage.from("photos").list();
    if (error) throw error;

    const photoUrls = data.map((file) => ({
      name: file.name,
      url: `https://zlntgnoeilkukxjhhkav.supabase.co/storage/v1/object/public/photos/${file.name}`,
    }));

    res.status(200).json(photoUrls);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos", error: error.message });
  }
}
