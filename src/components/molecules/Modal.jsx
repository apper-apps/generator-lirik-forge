import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className,
  size = "md",
  showCloseButton = true
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]"
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden",
              sizes[size],
              className
            )}
          >
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-blueberry-100">
                {title && (
                  <h3 className="text-xl font-bold text-blueberry-800 font-display">
                    {title}
                  </h3>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-blueberry-50 transition-colors duration-200"
                  >
                    <ApperIcon name="X" size={20} className="text-blueberry-400" />
                  </button>
                )}
              </div>
            )}
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;