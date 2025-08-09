import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Terjadi kesalahan", 
  description = "Silakan coba lagi dalam beberapa saat", 
  onRetry 
}) => {
  return (
<div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center space-y-4 px-4">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center">
        <ApperIcon name="AlertCircle" size={24} className="sm:w-8 sm:h-8 text-red-500" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-display">
          {message}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          {description}
        </p>
      </div>
      
{onRetry && (
        <Button onClick={onRetry} variant="outline" size="md" className="mobile-button">
          <ApperIcon name="RefreshCw" size={16} className="mr-2" />
          Coba Lagi
        </Button>
      )}
    </div>
  );
};

export default Error;