import supabase from "../../src/supabaseClient.js";


export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Ensure we are listing files under "uploads/" inside the "photos" bucket
    const { data, error } = await supabase.storage.from("photos").list("uploads");

    if (error) throw error;

    const photoUrls = data.map((file) => ({
      name: file.name,
      url: supabase.storage.from("photos").getPublicUrl(`uploads/${file.name}`).publicUrl,
    }));

    res.status(200).json(photoUrls);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ message: "Failed to fetch photos", error: error.message });
  }
}
