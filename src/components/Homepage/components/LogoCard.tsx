

import Image from "next/image";
import { HTMLAttributes } from "react";

interface LogoCardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  name?: string;
}

export default function LogoCard({
  src,
  alt,
  name,
  className = "",
  ...rest
}: LogoCardProps) {
  return (
    <div
      {...rest}
      className={`
        group relative 
        flex items-center justify-center 
        transition-all duration-300 ease-out
        overflow-hidden
        ${className}
      `}
    >
      <div className="relative w-[90%] h-[90%] p-4 sm:p-5 md:p-6">
        <Image
          src={src}
          alt={alt}
          fill
          className={`
            object-contain 
            transition-transform duration-400 ease-out
            group-hover:scale-105
          `}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
          quality={88}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aA9l9gAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
}


