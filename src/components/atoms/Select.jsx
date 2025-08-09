import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Select = forwardRef(({ 
  className, 
  label,
  error,
  options = [],
  placeholder = "Pilih opsi...",
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-blueberry-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border border-blueberry-200 bg-white appearance-none",
            "focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-blueberry-500",
            "transition-all duration-200 hover:border-blueberry-300",
            error && "border-red-300 focus:ring-red-500 focus:border-red-500",
            className
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ApperIcon 
          name="ChevronDown" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blueberry-400 pointer-events-none" 
          size={20} 
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;