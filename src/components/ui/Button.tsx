import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "success" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "ghost"
      ? "btn-ghost"
      : variant === "success"
      ? "btn-success"
      : variant === "danger"
      ? "btn-danger"
      : "btn-primary";

  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "btn-md";

  return <button {...rest} className={cn("btn", variantClass, sizeClass, className)} />;
}
