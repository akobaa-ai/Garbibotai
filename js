// Web con imagen y vídeo por link directo

const imageGallery = document.getElementById("imageGallery");
const videoGallery = document.getElementById("videoGallery");

// Links directos
const images = [
  "https://i.postimg.cc/5tsQwRVh/Screenshot-2025-12-18-09-44-57.png"
];

const videos = [
  "https://drive.google.com/uc?export=download&id=1TyZlSvsFhx6WvxwqBwyE7Re-OrBajLHo"
];

// Mostrar imágenes
images.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "GarbiBot Irudia";
  imageGallery.appendChild(img);
});

// Mostrar vídeos
videos.forEach(url => {
  const video = document.createElement("video");
  video.src = url;
  video.controls = true;
  videoGallery.appendChild(video);
});
