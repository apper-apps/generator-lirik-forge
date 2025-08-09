import React, { useState, useEffect } from "react";
import Modal from "@/components/molecules/Modal";
import TagInput from "@/components/molecules/TagInput";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { predefinedTags } from "@/services/mockData/generationOptions.json";

const TagSelectionModal = ({ isOpen, onClose, currentTags = [], onTagsUpdate }) => {
  const [selectedTags, setSelectedTags] = useState(currentTags);

  useEffect(() => {
    setSelectedTags(currentTags);
  }, [currentTags]);

  const handlePredefinedTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag));
    } else if (selectedTags.length < 10) {
      setSelectedTags(prev => [...prev, tag]);
    }
  };

  const handleSave = () => {
    onTagsUpdate(selectedTags);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Pilih Tag"
      size="lg"
    >
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-blueberry-700 mb-3">
            Tag Populer
          </h4>
          <div className="flex flex-wrap gap-2">
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handlePredefinedTagClick(tag)}
                className="transition-all duration-200"
              >
                <Badge
                  variant={selectedTags.includes(tag) ? "primary" : "default"}
                  className={`cursor-pointer hover:scale-105 ${
                    selectedTags.includes(tag) 
                      ? "bg-blueberry-500 text-white" 
                      : "hover:bg-blueberry-100"
                  }`}
                >
                  {tag}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        <TagInput
          tags={selectedTags}
          onTagsChange={setSelectedTags}
          label="Tag Kustom"
          placeholder="Tambah tag kustom..."
          maxTags={10}
        />

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
            Simpan Tag ({selectedTags.length})
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TagSelectionModal;