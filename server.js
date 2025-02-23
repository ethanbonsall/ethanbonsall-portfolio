import { supabase } from "./supabaseClient.js";
import multer from "multer";
import { Readable } from "stream";

const upload = multer({ storage: multer.memoryStorage() });

// GET songs
app.get("/api/songs", async (req, res) => {
    try {
        const { data, error } = await supabase.from("songs").select("*");
        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch songs", error: error.message });
    }
});

// PUT (upsert) songs
app.put("/api/songs", async (req, res) => {
    try {
        const newSongs = req.body;

        const { data, error } = await supabase
            .from("songs")
            .upsert(newSongs, { onConflict: ["id"] }); // Ensure 'id' is unique

        if (error) throw error;

        res.status(200).json({ message: "Songs updated successfully!", data });
    } catch (error) {
        res.status(500).json({ message: "Failed to save songs", error: error.message });
    }
});

// DELETE all songs
app.delete("/api/songs", async (req, res) => {
    try {
        const { error } = await supabase.from("songs").delete().gte("id", 0); // Ensures all are deleted

        if (error) throw error;

        res.status(200).json({ message: "All songs deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete songs", error: error.message });
    }
});

// GET photos
app.get("/api/photos", async (req, res) => {
    try {
        const { data, error } = await supabase.storage.from("photos").list();

        if (error) throw error;

        const photoUrls = data.map((file) => ({
            name: file.name,
            url: `https://zlntgnoeilkukxjhhkav.supabase.co/storage/v1/object/public/photos/${file.name}`
        }));

        res.status(200).json(photoUrls);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch photos", error });
    }
});

// POST (upload) photo
app.post("/api/photos", upload.single("photo"), async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ message: "No file uploaded" });

        const filePath = `uploads/${Date.now()}_${file.originalname}`;
        const fileStream = Readable.from(file.buffer);

        const { data, error } = await supabase.storage
            .from("photos")
            .upload(filePath, fileStream, { contentType: file.mimetype });

        if (error) throw error;

        const { publicUrl } = supabase.storage.from("photos").getPublicUrl(filePath);

        res.status(200).json({ message: "Photo uploaded successfully!", url: publicUrl });
    } catch (error) {
        res.status(500).json({ message: "Failed to upload photo", error });
    }
});
