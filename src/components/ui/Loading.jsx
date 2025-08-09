import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Memuat..." }) => {
  return (
<div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-4 px-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-blueberry-200 border-t-blueberry-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ApperIcon name="Music" size={16} className="sm:w-5 sm:h-5 text-blueberry-500" />
        </div>
      </motion.div>
      
<div className="text-center space-y-2">
        <h3 className="text-base sm:text-lg font-medium text-blueberry-700 font-display">
          {message}
        </h3>
        <div className="flex items-center justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15
              }}
              className="w-2 h-2 bg-blueberry-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;