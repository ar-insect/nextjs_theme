import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div {...rest} className={cn("card", className)}>
      {children}
    </div>
  );
}
