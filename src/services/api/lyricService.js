import sampleLyrics from "@/services/mockData/sampleLyrics.json";

let lyrics = [...sampleLyrics];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAllLyrics = async () => {
  await delay(300);
  return [...lyrics];
};

export const getLyricById = async (id) => {
  await delay(200);
  const lyric = lyrics.find(l => l.Id === parseInt(id));
  if (!lyric) {
    throw new Error("Lirik tidak ditemukan");
  }
  return { ...lyric };
};

export const saveLyric = async (lyricData) => {
  await delay(400);
  
  const newId = Math.max(...lyrics.map(l => l.Id), 0) + 1;
  const newLyric = {
    Id: newId,
    title: lyricData.title || "Lirik Tanpa Judul",
    content: lyricData.content,
    description: lyricData.description || "",
    genre: lyricData.genre || "",
    mood: lyricData.mood || "",
    language: lyricData.language || "id",
    tags: lyricData.tags || [],
    imageUrl: lyricData.imageUrl || "",
    createdAt: new Date().toISOString(),
    isFavorite: false
  };
  
  lyrics = [newLyric, ...lyrics];
  return { ...newLyric };
};

export const updateLyric = async (id, updateData) => {
  await delay(300);
  
  const index = lyrics.findIndex(l => l.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Lirik tidak ditemukan");
  }
  
  lyrics[index] = {
    ...lyrics[index],
    ...updateData,
    Id: parseInt(id) // Ensure Id stays integer
  };
  
  return { ...lyrics[index] };
};

export const deleteLyric = async (id) => {
  await delay(250);
  
  const index = lyrics.findIndex(l => l.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Lirik tidak ditemukan");
  }
  
  lyrics = lyrics.filter(l => l.Id !== parseInt(id));
  return true;
};

export const generateLyric = async (params) => {
  await delay(2000); // Simulate AI generation time
  
  // Mock AI generation based on parameters
  const { description, genre, mood, language, tags } = params;
  
  const templates = {
    pop: {
      happy: `[Verse 1]
Hari ini cerah bersinar
Semangat mengalir dalam jiwa
${description ? `Tentang ${description}` : "Mimpi-mimpi mulai terwujud"}
Kebahagiaan tak terbendung

[Chorus]
Kita bisa meraih semua
Tak ada yang mustahil terjadi
Dengan semangat dan doa
Masa depan milik kita

[Verse 2]
Langkah ringan menuju impian
Senyum tulus menghiasi wajah
Bersama kita akan sampai
Di ujung pelangi harapan

[Bridge]
Walau jalan kadang berliku
Kita tetap berjalan maju
Karena hidup ini indah
Ketika kita bersyukur

[Outro]
Bahagia... selalu bahagia
Itulah kunci kehidupan`,
      sad: `[Verse 1]
Air mata jatuh membasahi pipi
Hati ini terasa kosong dan sepi
${description ? `${description} kini tinggal kenangan` : "Kenangan indah kini berlalu"}
Meninggalkan luka yang dalam

[Chorus]
Mengapa harus berakhir
Cinta yang pernah bersemi
Kini hanya tinggal cerita
Di relung hati yang terdalam

[Verse 2]
Waktu terus berjalan tanpa henti
Tapi luka ini tak kunjung sembuh
Setiap detik ku berharap
Kamu akan kembali lagi

[Bridge]
Mungkin ini yang terbaik
Walau hati tak rela
Ku akan belajar ikhlas
Melepasmu dengan doa

[Outro]
Selamat jalan... kasih
Semoga bahagia di sana`
    },
    rock: {
      energetic: `[Verse 1]
Bangkit dari tidur panjang
Jiwa muda berkobar-kobar
${description ? `${description} membakar semangat` : "Api revolusi menyala"}
Saatnya kita bersuara

[Chorus]
Kita adalah generasi baru
Tak akan diam melihat ketidakadilan
Berteriak sekeras mungkin
Hingga dunia mendengar

[Verse 2]
Gitar mengaum musik perlawanan
Drum menggema seperti guntur
Suara kita satu kesatuan
Mendobrak tembok pembatas

[Bridge]
Revolusi dimulai dari hati
Perubahan dimulai dari diri
Jangan pernah menyerah
Sampai tujuan tercapai

[Outro]
Rock and roll... never dies
Semangat muda... abadi`
    }
  };

  // Generate based on genre and mood, with fallback
  let lyricContent;
  if (templates[genre] && templates[genre][mood]) {
    lyricContent = templates[genre][mood];
  } else {
    // Fallback template
    lyricContent = `[Verse 1]
${description ? `Cerita dimulai dari ${description}` : "Di suatu hari yang cerah"}
Hati ini penuh dengan harapan
Langkah demi langkah ku tempuh
Menuju mimpi yang terpendam

[Chorus]
${mood === "happy" ? "Bahagia rasanya hidup ini" : 
  mood === "sad" ? "Sedih hatiku memikirkannya" :
  mood === "romantic" ? "Cinta ini tak akan pernah mati" :
  "Perasaan ini tak terlukiskan"}
${genre === "rock" ? "Berteriak keras melepas beban" :
  genre === "pop" ? "Bernyanyi riang mengungkap rasa" :
  "Melantunkan lagu dari hati"}

[Verse 2]
Perjalanan masih panjang
Tapi semangat tak akan surut
${tags.length > 0 ? `Tentang ${tags.slice(0, 2).join(" dan ")}` : "Tentang kehidupan yang indah"}
Inilah cerita hidupku

[Bridge]
Waktu terus berjalan
Kenangan terus terukir
Apapun yang terjadi
Lagu ini akan abadi

[Outro]
${language === "en" ? "This is my song... forever" : "Inilah laguku... selamanya"}`;
  }

  return {
    Id: Date.now(), // Temporary ID
    title: `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${genre.charAt(0).toUpperCase() + genre.slice(1)}`,
    content: lyricContent,
    description: description,
    genre: genre,
    mood: mood,
    language: language,
    tags: tags || [],
    imageUrl: "",
    createdAt: new Date().toISOString(),
    isFavorite: false
  };
};