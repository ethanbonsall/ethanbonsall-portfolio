import supabase from "../../src/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // List files in the "webpage" bucket (root folder)
    const { data, error } = await supabase.storage
      .from("webpage")
      .list("", {
        limit: 100,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) throw error;

    const imageUrls = data.map((file) => {
      const { data: urlData } = supabase.storage
        .from("webpage")
        .getPublicUrl(file.name);

      return {
        name: file.name,
        image: urlData.publicUrl,
      };
    });

    res.status(200).json(imageUrls);
  } catch (error) {
    console.error("Error fetching webpage images:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch images", error: error.message });
  }
}
