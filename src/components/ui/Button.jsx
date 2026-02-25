import React from "react";

export function Button({
  children,
  className = "",
  as: Component = "button",
  disabled,
  ...props
}) {
  const base = "px-4 py-2 rounded-md transition";
  const color = disabled
    ? "bg-gray-400 text-white cursor-not-allowed"
    : "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600";

  return (
    <Component
      className={`${base} ${color} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
}
