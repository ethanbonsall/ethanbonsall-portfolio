import audrey from "@/assets/audrey.jpeg";
import Image from "next/image";

const Audrey = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src={audrey.src}
        alt="audrey"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default Audrey;
