import React from "react";

export function Badge({ children, variant = "default", className, ...props }) {
  const baseClass = "inline-block px-2 py-1 text-xs font-bold rounded";
  const variantClass =
    variant === "secondary" ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white";
  return (
    <span className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
}