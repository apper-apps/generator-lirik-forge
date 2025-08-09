import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  message = "Belum ada data", 
  description = "Data akan muncul di sini setelah Anda menambahkannya",
  icon = "FileText",
  actionButton = null 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-blueberry-100 flex items-center justify-center">
        <ApperIcon name={icon} size={32} className="text-blueberry-400" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 font-display">
          {message}
        </h3>
        <p className="text-gray-500 max-w-md">
          {description}
        </p>
      </div>
      
      {actionButton}
    </div>
  );
};

export default Empty;