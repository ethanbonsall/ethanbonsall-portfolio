import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = process.env.PORT || 4261;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/uploads", express.static("uploads")); // Serve uploaded images

const songsFilePath = path.join(process.cwd(), "songs.json");
const photosFilePath = path.join(process.cwd(), "photos.json");

// Ensure files exist
if (!fs.existsSync(songsFilePath)) fs.writeFileSync(songsFilePath, "[]");
if (!fs.existsSync(photosFilePath)) fs.writeFileSync(photosFilePath, "[]");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// GET songs
app.get("/api/songs", (req, res) => {
  const data = fs.readFileSync(songsFilePath, "utf-8");
  res.status(200).json(JSON.parse(data));
});

app.put("/api/songs", (req, res) => {
    try {
      const newSongs = req.body;
      let existingSongs = [];
  
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        existingSongs = JSON.parse(data);
      }
  
      // Filter out duplicates by checking if song ID already exists
      const uniqueSongs = [
        ...existingSongs,
        ...newSongs.filter((newSong) => !existingSongs.some((song) => song.id === newSong.id))
      ];
  
      fs.writeFileSync(filePath, JSON.stringify(uniqueSongs, null, 2));
      res.status(200).json({ message: "Songs updated successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to write to file" });
    }
  });
// GET photos
app.get("/api/photos", (req, res) => {
  const data = fs.readFileSync(photosFilePath, "utf-8");
  res.status(200).json(JSON.parse(data));
});

// POST (upload) photo
app.post("/api/photos", upload.single("photo"), (req, res) => {
  try {
    const photos = JSON.parse(fs.readFileSync(photosFilePath, "utf-8"));
    const photoPath = `/uploads/${req.file.filename}`;
    photos.push(photoPath);
    fs.writeFileSync(photosFilePath, JSON.stringify(photos, null, 2));

    res.status(200).json({ message: "Photo uploaded successfully!", photoPath });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload photo" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.86.29:${PORT}`);
});
