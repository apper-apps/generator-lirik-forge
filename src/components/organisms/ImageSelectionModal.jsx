import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/molecules/Modal";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { getImageReferences } from "@/services/api/imageService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ImageSelectionModal = ({ isOpen, onClose, currentImage, onImageSelect }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(currentImage);

  useEffect(() => {
    if (isOpen) {
      loadImages();
      setSelectedImage(currentImage);
    }
  }, [isOpen, currentImage]);

  const loadImages = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getImageReferences();
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(selectedImage?.Id === image.Id ? null : image);
  };

  const handleSave = () => {
    onImageSelect(selectedImage);
    onClose();
  };

  if (loading) return <Modal isOpen={isOpen} onClose={onClose} title="Pilih Gambar Inspirasi"><Loading /></Modal>;
  if (error) return <Modal isOpen={isOpen} onClose={onClose} title="Pilih Gambar Inspirasi"><Error message={error} onRetry={loadImages} /></Modal>;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Pilih Gambar Inspirasi"
      size="lg"
    >
      <div className="space-y-6">
        <p className="text-sm text-blueberry-600">
          Pilih gambar sebagai inspirasi visual untuk lirik Anda (opsional)
        </p>

        {images.length === 0 ? (
          <Empty 
            message="Belum ada gambar tersedia"
            description="Gambar inspirasi akan membantu AI memahami mood dan tema yang Anda inginkan"
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {images.map((image) => (
              <motion.button
                key={image.Id}
                onClick={() => handleImageSelect(image)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative focus:outline-none focus:ring-2 focus:ring-blueberry-500 rounded-xl"
              >
                <Card 
                  className={`p-0 overflow-hidden transition-all duration-200 ${
                    selectedImage?.Id === image.Id
                      ? "ring-2 ring-blueberry-500 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-blueberry-100 to-blueberry-200 flex items-center justify-center">
                    <ApperIcon 
                      name={image.icon} 
                      size={32} 
                      className="text-blueberry-500" 
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-800 truncate">
                      {image.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate mt-1">
                      {image.category}
                    </p>
                  </div>
                  
                  {selectedImage?.Id === image.Id && (
                    <div className="absolute top-2 right-2 bg-blueberry-500 text-white rounded-full p-1">
                      <ApperIcon name="Check" size={12} />
                    </div>
                  )}
                </Card>
              </motion.button>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4 border-t border-blueberry-100">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Batal
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            className="flex-1"
          >
            {selectedImage ? "Pilih Gambar" : "Tanpa Gambar"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageSelectionModal;