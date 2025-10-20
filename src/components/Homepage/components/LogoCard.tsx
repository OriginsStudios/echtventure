import Image from "next/image";
import type { HTMLAttributes } from "react";

interface LogoCardProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  name?: string;
  description?: string;
}

export default function LogoCard({
  src,
  alt,
  name,
  description,
  className,
  ...rest
}: LogoCardProps) {
  return (
    <div
      {...rest}
      className={`
        relative flex flex-row items-center gap-3 lg:gap-8 h-full
        transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
        justify-center lg:justify-start
        lg:pr-12
        ${className}
      `}
    >
      {/* --- Logo --- */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform duration-500">
        <Image
          src={src}
          alt={alt}
          width={250}
          height={250}
          className="object-contain w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-56 lg:h-56"
        />
      </div>

      {/* --- Name and Description (takes up remaining space) --- */}
      <div className="min-w-0 lg:flex-grow text-center lg:text-left transition-opacity duration-500">
        {name ? (
          <p className="text-base md:text-xl lg:text-2xl font-semibold text-neutral-900 transition-all duration-500">
            {name}
          </p>
        ) : null}
        {description ? (
          <p className="mt-1 text-[0.85rem] font-montserrat text-neutral-600 leading-relaxed line-clamp-3 transition-all duration-500">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
