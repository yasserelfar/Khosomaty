// src/components/ui/Card.jsx
import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}

export function CardDescription({ children, className }) {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}>
      {children}
    </p>
  );
}

export function CardFooter({ children, className }) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}

export function CardAction({ children, className }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}
