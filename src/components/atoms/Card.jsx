import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  className, 
  variant = "default",
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white border border-blueberry-100 shadow-lg",
    glass: "glass-card",
    gradient: "bg-gradient-to-br from-blueberry-50 to-white border border-blueberry-100 shadow-lg"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;