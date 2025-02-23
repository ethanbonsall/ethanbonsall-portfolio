import { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import supabase from "./supabaseClient";

export default function BirthdayPage() {
  const [, setSongs] = useState<any[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: string; name: string; artists: { name: string }[]; uri: string }[]
  >([]);
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem("spotifyToken") || null;
  });

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("/api/spotify-token");
        const data = await response.json();
  
        if (response.ok) {
          setAccessToken(data.access_token);
          localStorage.setItem("spotifyToken", data.access_token);
          
          if (data.expires_in) {
            setTimeout(fetchAccessToken, (data.expires_in - 60) * 1000);
          }
          
        } else {
          console.error("Failed to fetch access token", data);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };
  
    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://www.ethanbonsall.com/api/photos");
  
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
  
        const data = await response.json();
  
        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }
  
        // ✅ Extract URLs properly
        setPhotos(Array.isArray(data) ? data.map((photo) => photo.url) : []);

      } catch (error) {
        console.error("Error fetching photos:", error);
        setPhotos([]); // Prevents .map() errors
      }
    };
  
    fetchPhotos();
  }, []);
  
  

  const uploadPhoto = async (file: File) => {
    const filePath = `uploads/${Date.now()}_${file.name}`;
  
    const { error } = await supabase.storage.from("photos").upload(filePath, file);
  
    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }
  
    return supabase.storage.from("photos").getPublicUrl(filePath).data.publicUrl; // ✅ Corrected
  };
  
  
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    const uploadedPhotos = (await Promise.all(
      Array.from(files).map(async (file) => uploadPhoto(file).catch(() => null))
    )).filter((url): url is string => url !== null);
    
  
    setPhotos((prevPhotos) => [...prevPhotos, ...uploadedPhotos.filter((url): url is string => url !== null)]);
  };
  

  const handleSearch = async () => {
    if (accessToken === null) {
      console.error("Access token is missing");
      return;
    }

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch search results", await response.json());
      return;
    }

    const data = await response.json();
    setSearchResults(data.tracks.items || []);
  };

  const addSongToList = async (song: { id: any; name: any; artists: any[]; uri: any; }) => {
    const simplifiedSong = {
      id: song.id,
      name: song.name,
      artists: song.artists.map((artist) => artist.name).join(", "), // ✅ Store as string
      uri: song.uri,
    };
  
    setSongs((prevSongs) => [...prevSongs, simplifiedSong]);
  
    try {
      const response = await fetch("https://www.ethanbonsall.com/api/songs/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(simplifiedSong), // ✅ Send as a single object
      });
  
      if (!response.ok) {
        console.error("Failed to save song", await response.text());
      }
    } catch (error) {
      console.error("Error saving song:", error);
    }
  };
  
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Ethan's Birthday Rager</h1>
      <p className="text-xl mb-2">February 28, 8:00 PM</p>
      <p className="text-lg mb-6">508 Chapel Street</p>

      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a song..."
          className="mb-2 p-2 border rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="w-full mb-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-md">
        {searchResults.map((song) => (
          <div
            key={song.id}
            className="mb-2 p-2 border rounded bg-gray-800 flex justify-between items-center"
          >
            <span>
              {song.name} - {song.artists[0].name}
            </span>
            <button
              onClick={() => addSongToList(song)}
              className="bg-green-500 px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md">
        <label className="flex items-center space-x-2 cursor-pointer bg-gray-700 px-4 py-2 rounded-lg">
          <Upload size={20} />
          <span>Upload Photos</span>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden border rounded-lg">
            <img
              src={photo}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
