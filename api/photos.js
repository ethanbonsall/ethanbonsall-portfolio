import express from "express";
import multer from "multer";
import { supabase } from "./supabaseClient.js";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/photos", upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.file;
    const filePath = `uploads/${Date.now()}-${file.originalname}`;

    // Upload image to Supabase Storage
    const { data, error } = await supabase.storage
      .from("photos") // Make sure you have a "photos" bucket in Supabase
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      throw error;
    }

    const publicURL = `${process.env.SUPABASE_URL}/storage/v1/object/public/photos/${filePath}`;
    res.status(200).json({ message: "Photo uploaded!", url: publicURL });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error });
  }
});
