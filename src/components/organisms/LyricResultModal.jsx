import React from "react";
import { toast } from "react-toastify";
import Modal from "@/components/molecules/Modal";
import LyricDisplay from "@/components/molecules/LyricDisplay";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const LyricResultModal = ({ isOpen, onClose, lyric, onSave }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lyric.content);
      toast.success("Lirik berhasil disalin!");
    } catch (error) {
      toast.error("Gagal menyalin lirik");
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([lyric.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${lyric.title || "lirik"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Lirik berhasil diunduh!");
  };

  const handleSave = () => {
    onSave(lyric);
    toast.success("Lirik berhasil disimpan!");
  };

  if (!lyric) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Lirik Berhasil Dibuat"
      size="lg"
    >
      <div className="space-y-6">
        {/* Lyric Meta Info */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">{lyric.genre}</Badge>
            <Badge variant="secondary">{lyric.mood}</Badge>
            <Badge variant="default">{lyric.language === "id" ? "Indonesia" : "English"}</Badge>
          </div>
          
          {lyric.tags && lyric.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {lyric.tags.map((tag, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Lyric Content */}
        <LyricDisplay 
          content={lyric.content} 
          variant="glass"
          className="max-h-96 overflow-y-auto"
        />

        {/* Action Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-blueberry-100">
          <Button
            variant="outline"
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 mobile-button"
            size="md"
          >
            <ApperIcon name="Copy" size={16} />
            Salin
          </Button>
          
          <Button
            variant="secondary"
            onClick={handleSave}
            className="flex items-center justify-center gap-2 mobile-button"
            size="md"
          >
            <ApperIcon name="Save" size={16} />
            Simpan
          </Button>
          
          <Button
            variant="primary"
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 mobile-button"
            size="md"
          >
            <ApperIcon name="Download" size={16} />
            Unduh
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LyricResultModal;