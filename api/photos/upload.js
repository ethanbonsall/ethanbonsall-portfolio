import { supabase } from "../../supabaseClient.js";
import multer from "multer";
import { Readable } from "stream";

const upload = multer({ storage: multer.memoryStorage() });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  upload.single("photo")(req, res, async (err) => {
    if (err) return res.status(500).json({ message: "Upload error", error: err.message });
x
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ message: "No file uploaded" });

      const filePath = `uploads/${Date.now()}_${file.originalname}`;
      const fileStream = Readable.from(file.buffer);

      const { error } = await supabase.storage.from("photos").upload(filePath, fileStream, {
        contentType: file.mimetype,
      });

      if (error) throw error;

      const { publicUrl } = supabase.storage.from("photos").getPublicUrl(filePath);

      res.status(200).json({ message: "Photo uploaded successfully!", url: publicUrl });
    } catch (error) {
      res.status(500).json({ message: "Failed to upload photo", error: error.message });
    }
  });
}
