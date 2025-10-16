import Image from "next/image";
import type { HTMLAttributes } from "react";

interface LogoCardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export default function LogoCard({
  src,
  alt,
  className,
  ...rest
}: LogoCardProps) {
  return (
    <div
      {...rest}
      // Base styles for the card - flexible height with centered content
      className={`
        relative flex items-center justify-center 
        w-56 md:w-64 h-32 md:h-36
        rounded-2xl bg-white p-6 shadow-sm overflow-hidden
        transition-transform duration-300 hover:-translate-y-1
        ${className} 
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={260}
        height={156}
        className="object-contain max-w-full max-h-full"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
