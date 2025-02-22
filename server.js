
import { supabase } from "./supabaseClient.js";

// GET songs
app.get("/api/songs", async (req, res) => {
    try {
      const { data, error } = await supabase.from("songs").select("*");
      if (error) throw error;
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch songs", error });
    }
  });
  

  app.put("/api/songs", async (req, res) => {
    try {
      const newSongs = req.body;
  
      const { data, error } = await supabase
        .from("songs")
        .upsert(newSongs, { onConflict: ["uri"] }); // Avoids duplicates
  
      if (error) throw error;
  
      res.status(200).json({ message: "Songs updated successfully!", data });
    } catch (error) {
      res.status(500).json({ message: "Failed to save songs", error });
    }
  });

  app.delete("/api/songs", async (req, res) => {
    try {
      const { error } = await supabase.from("songs").delete().neq("id", "");
  
      if (error) throw error;
  
      res.status(200).json({ message: "All songs deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete songs", error });
    }
  });
  
app.get("/api/photos", async (req, res) => {
  try {
    const { data, error } = await supabase.storage.from("photos").list();

    if (error) throw error;

    const photoUrls = data.map((file) => ({
      name: file.name,
      url: `${process.env.SUPABASE_URL}/storage/v1/object/public/photos/${file.name}`
    }));

    res.status(200).json(photoUrls);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos", error });
  }
});


app.post("/api/photos", upload.single("photo"), async (req, res) => {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ message: "No file uploaded" });
  
      const filePath = `uploads/${Date.now()}_${file.originalname}`;
  
      const { data, error } = await supabase.storage
        .from("photos")
        .upload(filePath, file.buffer, { contentType: file.mimetype });
  
      if (error) throw error;
  
      const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/photos/${filePath}`;
  
      res.status(200).json({ message: "Photo uploaded successfully!", url: publicUrl });
    } catch (error) {
      res.status(500).json({ message: "Failed to upload photo", error });
    }
  });