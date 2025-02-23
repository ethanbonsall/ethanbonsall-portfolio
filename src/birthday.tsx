import { useState, useEffect, useRef } from "react";
import supabase from "./supabaseClient";
import RSVPModal from "./rsvp";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRSVP, setShowRSVP] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [addedSongs] = useState<string[]>([]);



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
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://www.ethanbonsall.com/api/photos/");
  
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

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  

  const uploadPhoto = async (file: File) => {
    const filePath = `uploads/${Date.now()}_${file.name}`;
  
    const { error } = await supabase.storage.from("photos").upload(filePath, file);
  
    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }
  
    const { data } = supabase.storage.from("photos").getPublicUrl(filePath);
    return data.publicUrl;
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
    setShowDropdown(true);
  };

  const addSongToList = async (song: { id: any; name: any; artists: any[]; uri: any }) => {
    if (!accessToken) {
      console.error("Access token is missing");
      return;
    }
    setShowDropdown(false);
  
    try {
      // Fetch the current playlist songs
      const playlistResponse = await fetch(
        "https://api.spotify.com/v1/playlists/6yoTyxeEYmrn0GQ0rpATGv/tracks",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (!playlistResponse.ok) {
        console.error("Failed to fetch playlist songs", await playlistResponse.text());
        return;
      }
  
      const playlistData = await playlistResponse.json();
      const existingSongs = playlistData.items.map((item: any) => item.track.uri);
  
      // Check if the song is already in the playlist
      if (existingSongs.includes(song.uri)) {
        console.log("Song is already in the playlist.");
        return;
      }
  
      // Proceed with adding the song if it's not found
      const simplifiedSong = {
        id: song.id,
        name: song.name,
        artists: song.artists.map((artist) => artist.name).join(", "),
        uri: song.uri,
      };
  
      setSongs((prevSongs) => [...prevSongs, simplifiedSong]);
  
      const response = await fetch("https://www.ethanbonsall.com/api/songs/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(simplifiedSong),
      });
  
      if (!response.ok) {
        console.error("Failed to save song", await response.text());
      }
    } catch (error) {
      console.error("Error checking or adding song:", error);
    }
  };
  
  return (    
  <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      {/* Window Frame */}
      {showRSVP && <RSVPModal onClose={() => setShowRSVP(false)} />}
      <div className="w-[500px] border border-black bg-gray-300 shadow-[4px_4px_0px_black]">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-gray-500 px-2 py-1 border-b border-black">
          <span className="text-xs font-bold text-white">Ethan's Birthday Rager</span>
          <div className="flex space-x-1">
            <button className="w-3 h-3 bg-gray-800 border border-white"></button>
            <button className="w-3 h-3 bg-gray-800 border border-white"></button>
            <button className="w-3 h-3 bg-red-600 border border-white"></button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 font-[Arial] text-black">
          <h1 className="text-2xl font-bold text-center text-red-600 drop-shadow-[2px_2px_0px_white]">
            You Know It's a Party If...
          </h1>
          <p className="text-center text-sm mb-2">February 28, 8:00 PM</p>
          <p className="text-center text-sm mb-6">508 Chapel Street</p>

          {/* Search Box */}
          <div className="border border-black bg-gray-200 p-2">
            <input
              type="text"
              placeholder="Search for a song..."
              className="w-full p-1 border border-black bg-white text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="w-full mt-2 bg-gray-300 border border-black py-1 
              shadow-[inset_-2px_-2px_0px_#ddd,inset_2px_2px_0px_#555] 
              hover:bg-gray-400 
              active:shadow-[inset_2px_2px_0px_#555,inset_-2px_-2px_0px_#ddd] 
              active:translate-y-[1px] active:translate-x-[1px]"
            >
              Search
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div ref={dropdownRef} className="border border-black bg-white mt-2 w-full absolute top-full left-0 z-10 shadow-lg">
                {searchResults.map((song) => (
                  <div
                    key={song.id}
                    className="p-1 hover:bg-gray-400 cursor-pointer flex justify-between items-center border-b border-black"
                    onClick={() => addSongToList(song)}
                  >
                    <span className="text-xs">
                      {song.name} - {song.artists[0].name}
                    </span>
                    {!addedSongs.includes(song.id) && (
                      <button className="border border-black bg-gray-300 px-2 py-1 text-xs shadow-[inset_-2px_-2px_0px_#ddd,inset_2px_2px_0px_#555] hover:bg-gray-400 
                        active:shadow-[inset_2px_2px_0px_#555,inset_-2px_-2px_0px_#ddd] active:translate-y-[1px] active:translate-x-[1px]"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upload Button */}
          <div className="mt-4 border border-black bg-gray-200 p-2">
            <label className="flex items-center space-x-2 cursor-pointer border border-black bg-gray-300 px-4 py-1 
              shadow-[inset_-2px_-2px_0px_#ddd,inset_2px_2px_0px_#555] 
              hover:bg-gray-400 
              active:shadow-[inset_2px_2px_0px_#555,inset_-2px_-2px_0px_#ddd] 
              active:translate-y-[1px] active:translate-x-[1px]"
            >
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

        {/* Photo Carousel */}
          {photos.length > 0 ? (
            <div className="relative border border-black bg-gray-200 p-2 flex items-center justify-center">
              <button onClick={handlePrevPhoto} className="absolute left-2 text-black text-lg">
                ◀
              </button>
              <img src={photos[currentPhotoIndex]} alt="Uploaded" className="w-full h-48 object-cover border border-black" />
              <button onClick={handleNextPhoto} className="absolute right-2 text-black text-lg">
                ▶
              </button>
            </div>
          ) : (
            <p className="text-center text-sm">No photos uploaded yet.</p>
          )}
        </div>
        {/* "See Playlist" Button */}
        <div className="mt-4 flex justify-center">
            <a
              href="https://www.ethanbonsall.com/birthdaysubmit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black bg-gray-300 shadow-[inset_-2px_-2px_0px_#ddd,inset_2px_2px_0px_#555] 
                hover:bg-gray-400 active:shadow-[inset_2px_2px_0px_#555,inset_-2px_-2px_0px_#ddd] active:translate-y-[1px] active:translate-x-[1px]"
            >
              See Playlist
            </a>
          </div>
      </div>
    </div>
  );
}
