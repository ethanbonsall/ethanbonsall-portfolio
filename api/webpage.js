import supabase from "../../src/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Fetch records from the Supabase table
    const { data: rows, error } = await supabase
      .from("webpage")
      .select("link, image");

    if (error) throw error;

    // Generate public URLs for the image paths
    const result = rows.map((row) => {
      const { data: publicData } = supabase.storage
        .from("webpage")
        .getPublicUrl(row.image || ""); // 'image' is the filename/key in the bucket

      return {
        link: row.link,
        image: publicData?.publicUrl || "",
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Failed to fetch images", error: error.message });
  }
}
