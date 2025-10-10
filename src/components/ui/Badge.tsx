// Badge component
import React from "react";
import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
};

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block text-sm font-medium px-3 py-1 rounded-full transition-all duration-200",
        variant === "default" &&
          "bg-slate-600 text-white border border-slate-600",
        variant === "outline" &&
          "bg-white text-slate-600 border border-slate-200",
        className
      )}
    >
      {children}
    </span>
  );
}
