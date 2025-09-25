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
        relative flex w-52 md:w-68 items-center justify-center 
        rounded-2xl bg-white p-6 shadow-sm 
        transition-transform duration-300 hover:-translate-y-1
        ${className} 
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={260}
        height={156}
        className="object-contain"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "156px",
        }}
      />
    </div>
  );
}
