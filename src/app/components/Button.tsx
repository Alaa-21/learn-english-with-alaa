"tsx";
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-2xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-teal-800 text-white hover:bg-teal-900 shadow-xs hover:shadow",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-xs",
    outline: "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
}
