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
      className={`
        relative flex items-center justify-center 
        w-48 h-48
        transition-transform duration-300 hover:-translate-y-1 
        ${className} 
      `}
    >
      <div className=" h-full overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          width={260}
          height={400}
          className="object-fill h-full border rounded-lg"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}
