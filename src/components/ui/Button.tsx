// Button component
import React from "react";
import clsx from "clsx"; // optional, for cleaner class merging

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "solidLight" | "solidDark";
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  variant = "outline",
  onClick,
}: ButtonProps) {
  const base =
    "text-sm px-6 py-3 rounded-full font-montserrat font-semibold uppercase tracking-wide transition-all duration-200 ease-in-out";
  const variants: Record<string, string> = {
    outline:
      "text-black border border-black bg-transparent hover:bg-black hover:text-white",
    solidLight: "bg-white text-gray-900 hover:bg-gray-100",
    solidDark: "bg-gray-900 text-white hover:bg-black",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
