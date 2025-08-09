import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import Textarea from "@/components/atoms/Textarea";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { genreOptions, moodOptions, languageOptions } from "@/services/mockData/generationOptions.json";

const GeneratorForm = ({ onGenerate, isGenerating, onOpenTagModal, onOpenImageModal }) => {
  const [formData, setFormData] = useState({
    description: "",
    genre: "",
    mood: "",
    language: "id",
    tags: [],
    imageReference: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.description.trim()) {
      newErrors.description = "Deskripsi lagu wajib diisi";
    }
    
    if (!formData.genre) {
      newErrors.genre = "Pilih genre musik";
    }
    
    if (!formData.mood) {
      newErrors.mood = "Pilih mood lagu";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onGenerate(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="gradient" className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blueberry-500 to-blueberry-600 text-white mb-4">
            <ApperIcon name="Music" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-blueberry-800 font-display">
            Generator Lirik AI
          </h2>
          <p className="text-blueberry-600">
            Buat lirik lagu yang unik dengan bantuan kecerdasan buatan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea
            label="Deskripsi Lagu"
            placeholder="Ceritakan tentang apa lagu ini... (contoh: tentang cinta yang tak berbalas, kenangan masa kecil, dll)"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            error={errors.description}
            rows={3}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Genre"
              placeholder="Pilih genre musik"
              options={genreOptions}
              value={formData.genre}
              onChange={(e) => handleInputChange("genre", e.target.value)}
              error={errors.genre}
            />

            <Select
              label="Mood"
              placeholder="Pilih mood lagu"
              options={moodOptions}
              value={formData.mood}
              onChange={(e) => handleInputChange("mood", e.target.value)}
              error={errors.mood}
            />
          </div>

          <Select
            label="Bahasa"
            options={languageOptions}
            value={formData.language}
            onChange={(e) => handleInputChange("language", e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onOpenTagModal}
              className="flex items-center justify-center gap-2"
            >
              <ApperIcon name="Tag" size={18} />
              Tag ({formData.tags.length})
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={onOpenImageModal}
              className="flex items-center justify-center gap-2"
            >
              <ApperIcon name="Image" size={18} />
              {formData.imageReference ? "Gambar Dipilih" : "Pilih Gambar"}
            </Button>
          </div>

          <Button
            type="submit"
            size="lg"
            isLoading={isGenerating}
            className="w-full animate-pulse-glow"
          >
            <ApperIcon name="Sparkles" size={20} className="mr-2" />
            {isGenerating ? "Sedang Membuat Lirik..." : "Generate Lirik"}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default GeneratorForm;