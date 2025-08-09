import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md",
  isLoading = false,
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-blueberry-600 to-blueberry-500 text-white shadow-lg hover:shadow-xl hover:from-blueberry-700 hover:to-blueberry-600",
    secondary: "bg-blueberry-100 text-blueberry-700 hover:bg-blueberry-200 border border-blueberry-200",
    outline: "border-2 border-blueberry-500 text-blueberry-600 hover:bg-blueberry-50",
    ghost: "text-blueberry-600 hover:bg-blueberry-50",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 transform",
        "hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:ring-opacity-50",
        variants[variant],
        sizes[size],
        isLoading && "cursor-not-allowed",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
      )}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;