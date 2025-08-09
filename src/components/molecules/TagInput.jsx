import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const TagInput = ({ 
  tags = [], 
  onTagsChange, 
  label, 
  placeholder = "Tambah tag...",
  maxTags = 10,
  className 
}) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag) => {
    const trimmedTag = tag.trim();
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < maxTags) {
      onTagsChange([...tags, trimmedTag]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-blueberry-700">
          {label}
        </label>
      )}
      
      <div className="p-3 border border-blueberry-200 rounded-xl bg-white focus-within:ring-2 focus-within:ring-blueberry-500 focus-within:border-blueberry-500 transition-all duration-200">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="primary"
              className="flex items-center gap-1 pr-1"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 p-0.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              >
                <ApperIcon name="X" size={12} />
              </button>
            </Badge>
          ))}
        </div>
        
        {tags.length < maxTags && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => addTag(inputValue)}
            placeholder={placeholder}
            className="w-full border-none outline-none bg-transparent placeholder:text-gray-400"
          />
        )}
      </div>
      
      <p className="text-xs text-blueberry-500">
        {tags.length}/{maxTags} tags • Tekan Enter atau koma untuk menambah
      </p>
    </div>
  );
};

export default TagInput;