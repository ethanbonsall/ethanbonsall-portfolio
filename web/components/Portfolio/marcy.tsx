"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  /** optional: hide on specific routes, etc. */
  className?: string;
};

export default function MarcyChatbotOverlay({ className = "" }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Open Marcy chatbot"
      onClick={() => router.push("/#marcy")}
      className={[
        "fixed z-50",
        // bottom-right with safe-area padding for iOS
        "right-[max(12px,env(safe-area-inset-right))]",
        "bottom-[max(12px,env(safe-area-inset-bottom))]",

        // responsive sizing
        "h-14 w-14 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] lg:h-20 lg:w-20",

        // feel & polish
        "rounded-full shadow-lg border border-zinc-200 bg-white",
        "hover:shadow-xl active:scale-[0.98] transition",
        "overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
        className,
      ].join(" ")}
    >
      <Image
        src="/marcy.webp"
        alt="Marcy"
        fill
        sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 80px"
        className="object-cover"
        priority
      />
    </button>
  );
}
