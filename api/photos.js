app.get("/api/photos", (req, res) => {
  try {
    const data = fs.readFileSync(photosFilePath, "utf-8");
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: "Failed to read photos data" });
  }
});