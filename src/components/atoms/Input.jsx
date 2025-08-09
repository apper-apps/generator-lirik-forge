import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  className, 
  type = "text",
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-blueberry-700">
          {label}
        </label>
      )}
<input
        ref={ref}
        type={type}
        className={cn(
          "w-full px-3 py-3 sm:px-4 rounded-lg sm:rounded-xl border border-blueberry-200 bg-white",
          "focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-blueberry-500",
          "transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base",
          "hover:border-blueberry-300 min-h-[44px] touch-manipulation",
          error && "border-red-300 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;