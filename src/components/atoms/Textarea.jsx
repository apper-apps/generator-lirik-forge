import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Textarea = forwardRef(({ 
  className, 
  label,
  error,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-blueberry-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-blueberry-200 bg-white resize-none",
          "focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-blueberry-500",
          "transition-all duration-200 placeholder:text-gray-400",
          "hover:border-blueberry-300",
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

Textarea.displayName = "Textarea";

export default Textarea;