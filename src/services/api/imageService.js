import imageReferences from "@/services/mockData/imageReferences.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getImageReferences = async () => {
  await delay(300);
  return [...imageReferences];
};

export const getImageById = async (id) => {
  await delay(200);
  const image = imageReferences.find(img => img.Id === parseInt(id));
  if (!image) {
    throw new Error("Gambar tidak ditemukan");
  }
  return { ...image };
};