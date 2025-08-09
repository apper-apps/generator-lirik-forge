import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ 
  className, 
  variant = "default",
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-blueberry-100 text-blueberry-700",
    primary: "bg-blueberry-500 text-white",
    secondary: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700"
  };
  
  return (
    <span
      ref={ref}
className={cn(
        "inline-flex items-center px-2 py-1 sm:px-3 rounded-full text-xs font-medium touch-manipulation",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;