import { useState, useEffect } from "react";

interface RSVPModalProps {
  onClose: () => void;
}

export default function RSVPModal({ onClose }: RSVPModalProps) {
  const [rsvpName, setRsvpName] = useState("");
  const [plusOne, setPlusOne] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, []);

  const handleSubmit = async () => {
    if (!rsvpName.trim()) return alert("Please enter your name!");

    const rsvpData = [{ section_name: rsvpName, section_plus: plusOne }];

    try {
      const response = await fetch("/api/rsvp", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvpData),
      });

      if (!response.ok) throw new Error("Failed to submit RSVP");

      document.body.style.overflow = "auto"; // Restore scrolling
      onClose();
    } catch (error) {
      console.error("RSVP submission error:", error);
      alert("Error submitting RSVP");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
      <div className="bg-gray-800 border-4 border-gray-500 p-6 shadow-lg retro-window">
        <h2 className="text-lg font-bold mb-4 text-white">RSVP for Ethan's Party</h2>
        
        <label className="block text-white mb-2">Your Name:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-600 bg-gray-900 text-white"
          value={rsvpName}
          onChange={(e) => setRsvpName(e.target.value)}
        />

        <label className="block text-white mt-4 mb-2">Plus Ones:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-600 bg-gray-900 text-white"
          value={plusOne}
          onChange={(e) => setPlusOne(Number(e.target.value))}
        />

        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-300 border border-gray-700 shadow-md hover:bg-gray-400 active:shadow-inner"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}