const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Madurai Meenakshi Temple",
    category: "Spiritual",
    url: "https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=600"
  },
  {
    id: 2,
    title: "Ooty Tea Estates",
    category: "Hill Station",
    url: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600"
  },
  {
    id: 3,
    title: "Pamban Bridge Rameshwaram",
    category: "Coastal",
    url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600"
  },
  {
    id: 4,
    title: "Mahabalipuram Shore Temple",
    category: "Coastal",
    url: "https://images.unsplash.com/photo-1608976450630-18e38ee12f9b?q=80&w=600"
  },
  {
    id: 5,
    title: "Kodaikanal Misty Hills",
    category: "Hill Station",
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600"
  },
  {
    id: 6,
    title: "Pondicherry French Colony",
    category: "Coastal",
    url: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600"
  }
];

export const getGalleryImages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(GALLERY_IMAGES), 250);
  });
};
