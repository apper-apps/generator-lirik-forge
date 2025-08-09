import React from "react";
import { cn } from "@/utils/cn";
import Card from "@/components/atoms/Card";

const LyricDisplay = ({ 
  content, 
  title, 
  className,
  variant = "default"
}) => {
  const formatLyrics = (text) => {
    return text.split("\n").map((line, index) => {
      // Detect if line is a section header (like [Verse 1], [Chorus], etc.)
      const isSection = line.match(/^\[.*\]$/) || line.match(/^(Verse|Chorus|Bridge|Pre-Chorus|Outro|Intro)/i);
      
      return (
<div key={index} className={cn(
          isSection 
            ? "font-semibold text-blueberry-600 mt-3 mb-2 first:mt-0 text-sm sm:text-base" 
            : "text-gray-700 leading-relaxed text-sm sm:text-base",
          line.trim() === "" && "h-2 sm:h-3"
        )}>
          {line || "\u00A0"}
        </div>
      );
    });
  };

  return (
    <Card variant={variant} className={cn("space-y-4", className)}>
      {title && (
<div className="border-b border-blueberry-100 pb-3 sm:pb-4">
          <h3 className="text-base sm:text-lg font-bold text-blueberry-800 font-display">
            {title}
          </h3>
        </div>
      )}
      
<div className="space-y-1 font-sans text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
        {content ? formatLyrics(content) : (
          <p className="text-gray-400 italic text-center py-6 sm:py-8 text-sm">
            Belum ada lirik yang dihasilkan
          </p>
        )}
      </div>
    </Card>
  );
};

export default LyricDisplay;