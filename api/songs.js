import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4261;
const filePath = path.join(process.cwd(), "songs.json");

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// GET endpoint to fetch songs
app.get("/api/songs", (req, res) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
  const data = fs.readFileSync(filePath, "utf-8");
  res.status(200).json(JSON.parse(data));
});

// PUT endpoint to update songs
app.put("/api/songs", (req, res) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.status(200).json({ message: "Songs updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to write to file" });
  }
});

// DELETE endpoint to clear all songs
app.delete("/api/songs", (req, res) => {
  try {
    fs.writeFileSync(filePath, "[]"); // Clears the file by writing an empty array
    res.status(200).json({ message: "All songs deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete songs" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.86.29:${PORT}`);
});
