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
        relative flex flex-row items-center gap-6 lg:gap-8 h-full
        transition-transform duration-300 hover:-translate-y-1
        lg:justify-start justify-center
        lg:pr-12
        ${className}
      `}
    >
      {/* --- Logo --- */}
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={250}
          height={250}
          className="object-contain w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-56 lg:h-56"
        />
      </div>

      {/* --- Name and Description (takes up remaining space) --- */}
      <div className="min-w-0 lg:flex-grow text-center lg:text-left">
        {name ? (
          <p className="text-base md:text-xl lg:text-2xl font-semibold text-neutral-900">
            {name}
          </p>
        ) : null}
        {description ? (
          <p className="mt-1 text-md sm:text-[0.85rem] font-montserrat text-neutral-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
