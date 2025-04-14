import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";
import { Lightbulb } from "lucide-react";

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className=" border-2 border-accent w-10 h-10 md:w-14 md:h-14 items-center justify-items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
    >
      <Lightbulb size={30} className="text-accent" />
    </button>
  );
}
