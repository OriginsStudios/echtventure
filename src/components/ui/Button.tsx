// Button component
import React from "react";
import clsx from "clsx"; // optional, for cleaner class merging

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "text-black text-sm py-2 px-4 rounded-full border border-black transition-all duration-200 ease-in-out ",
        className
      )}
    >
      {children}
    </button>
  );
}
