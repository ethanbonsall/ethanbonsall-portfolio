import graham from "@/assets/graham.jpeg";
import Image from "next/image";

const Sam = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Image
        src={graham.src}
        alt="lemon"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default Sam;
