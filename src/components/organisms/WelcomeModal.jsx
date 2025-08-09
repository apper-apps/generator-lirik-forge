import React from "react";
import { motion } from "framer-motion";
import Modal from "@/components/molecules/Modal";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const WelcomeModal = ({ isOpen, onClose }) => {
  const features = [
    {
      icon: "Brain",
      title: "AI Canggih",
      description: "Teknologi AI terdepan untuk lirik yang berkualitas"
    },
    {
      icon: "Zap",
      title: "Offline Ready",
      description: "Bekerja tanpa koneksi internet setelah dimuat"
    },
    {
      icon: "Palette",
      title: "Kustomisasi Penuh",
      description: "Atur genre, mood, bahasa, dan tag sesuai keinginan"
    },
    {
      icon: "Save",
      title: "Simpan & Bagikan",
      description: "Salin, simpan, atau unduh lirik dengan mudah"
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      showCloseButton={false}
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blueberry-500 to-blueberry-600 text-white"
        >
          <ApperIcon name="Music" size={36} />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className="text-3xl font-bold text-blueberry-800 font-display">
            Selamat Datang di
          </h2>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blueberry-600 to-blueberry-500 bg-clip-text text-transparent font-display">
            Generator Lirik AI
          </h1>
          <p className="text-blueberry-600 text-lg max-w-md mx-auto">
            Buat lirik lagu yang unik dan menarik dengan bantuan kecerdasan buatan
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((feature, index) => (
            <Card key={index} className="text-left space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blueberry-100 text-blueberry-600 flex-shrink-0">
                  <ApperIcon name={feature.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-blueberry-800 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blueberry-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4"
        >
          <Button
            onClick={onClose}
            size="lg"
            className="w-full md:w-auto px-12"
          >
            <ApperIcon name="Sparkles" size={20} className="mr-2" />
            Mulai Membuat Lirik
          </Button>
          
          <p className="text-xs text-blueberry-500">
            Klik di mana saja untuk menutup jendela ini
          </p>
        </motion.div>
      </div>
    </Modal>
  );
};

export default WelcomeModal;