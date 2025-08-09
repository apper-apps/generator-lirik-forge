import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import GeneratorForm from "@/components/organisms/GeneratorForm";
import LyricResultModal from "@/components/organisms/LyricResultModal";
import TagSelectionModal from "@/components/organisms/TagSelectionModal";
import ImageSelectionModal from "@/components/organisms/ImageSelectionModal";
import WelcomeModal from "@/components/organisms/WelcomeModal";
import { generateLyric, saveLyric } from "@/services/api/lyricService";

const GeneratorPage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLyric, setGeneratedLyric] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  
  const [formData, setFormData] = useState({
    description: "",
    genre: "",
    mood: "",
    language: "id",
    tags: [],
    imageReference: null
  });

  useEffect(() => {
    // Show welcome modal on first visit
    const hasVisited = localStorage.getItem("hasVisitedGenerator");
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem("hasVisitedGenerator", "true");
    }
  }, []);

  const handleGenerate = async (params) => {
    try {
      setIsGenerating(true);
      const lyric = await generateLyric(params);
      setGeneratedLyric(lyric);
      setShowResult(true);
    } catch (error) {
      toast.error("Gagal membuat lirik: " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveLyric = async (lyric) => {
    try {
      await saveLyric(lyric);
      setShowResult(false);
      setGeneratedLyric(null);
    } catch (error) {
      toast.error("Gagal menyimpan lirik: " + error.message);
    }
  };

  const handleTagsUpdate = (tags) => {
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleImageSelect = (image) => {
    setFormData(prev => ({ ...prev, imageReference: image }));
  };

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blueberry-50 via-white to-blueberry-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <GeneratorForm
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            onOpenTagModal={() => setShowTagModal(true)}
            onOpenImageModal={() => setShowImageModal(true)}
          />
        </div>
      </div>

      <LyricResultModal
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        lyric={generatedLyric}
        onSave={handleSaveLyric}
      />

      <TagSelectionModal
        isOpen={showTagModal}
        onClose={() => setShowTagModal(false)}
        currentTags={formData.tags}
        onTagsUpdate={handleTagsUpdate}
      />

      <ImageSelectionModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        currentImage={formData.imageReference}
        onImageSelect={handleImageSelect}
      />

      <WelcomeModal
        isOpen={showWelcome}
        onClose={handleCloseWelcome}
      />
    </div>
  );
};

export default GeneratorPage;