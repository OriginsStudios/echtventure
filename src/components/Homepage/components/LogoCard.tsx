import Image from "next/image";
import type { HTMLAttributes } from "react";

interface LogoCardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  name?: string;
}

export default function LogoCard({
  src,
  alt,
  name,
  className,
  ...rest
}: LogoCardProps) {
  return (
    <div
      {...rest}
      className={`
        relative flex items-center justify-center h-full w-full
        transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
        ${className}
      `}
    >
      {/* --- Logo --- */}
      <div className="relative flex items-center justify-center transition-transform duration-500">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        />
      </div>
    </div>
  );
}
