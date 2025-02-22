import { SetStateAction, useState } from "react";

export default function Birthday() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">Ethan's Birthday!</h1>
      <p className="text-2xl mb-6">February 28 at 8PM</p>

      <input
        type="text"
        placeholder="Write a message..."
        value={text}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setText(e.target.value)
        }
      />

      <input
        className="w-80 p-2 bg-white text-black rounded mb-4"
        type="file"
        onChange={(e: { target: { files: FileList | null } }) =>
          setFile(e.target.files ? e.target.files[0] : null)
        }
      />

      {file && <p className="text-sm mt-2">Selected file: {file.name}</p>}
    </div>
  );
}
