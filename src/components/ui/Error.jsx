import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Terjadi kesalahan", 
  description = "Silakan coba lagi dalam beberapa saat", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
        <ApperIcon name="AlertCircle" size={32} className="text-red-500" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 font-display">
          {message}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
      
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          <ApperIcon name="RefreshCw" size={18} className="mr-2" />
          Coba Lagi
        </Button>
      )}
    </div>
  );
};

export default Error;