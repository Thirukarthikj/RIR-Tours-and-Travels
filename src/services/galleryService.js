import { getDocuments } from './firebase/firestore';

const GALLERY_IMAGES = [
  { id: 1, title: "RIR Tours Premium Banner", category: "Fleet", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246359/imgi_33_tours-bnr_xpvnob.jpg", status: "Visible" },
  { id: 2, title: "Serene Mountain Road Drive", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246361/Desktop_wallpaper_-_Serene_mountain_road_xmpyv4.jpg", status: "Visible" },
  { id: 3, title: "Cherrapunji Meghalaya Tour", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246360/imgi_77_meghalaya-tour-packag-cherrapunji-aspire-holidays-chennai_gv1sji.webp", status: "Visible" },
  { id: 4, title: "Sunset Road Trip Gallery", category: "Fleet", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246359/imgi_61_home_gallery2_yg9c7i.webp", status: "Visible" },
  { id: 5, title: "Domestic Tour Highlights", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246357/imgi_32_domestic_k4q21e.webp", status: "Visible" },
  { id: 6, title: "Starry Night Scenic Drive", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246358/imgi_17_1752825137530-275145032-Tuscan_Nightscape_Under_Starry_Skies_knhcro.webp", status: "Visible" },
  { id: 7, title: "Wayanad Kerala Green Hills", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_31_wayanad_pnyroq.jpg", status: "Visible" },
  { id: 8, title: "Trivandrum Padmanabhaswamy Temple", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_28_trivandrum_alfyde.jpg", status: "Visible" },
  { id: 9, title: "Yercaud Emerald Lake", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_30_yercaud_atq9eq.jpg", status: "Visible" },
  { id: 10, title: "Valparai Misty Tea Estates", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_29_valparai_agdcal.jpg", status: "Visible" },
  { id: 11, title: "Trichy Rockfort Temple", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246356/imgi_27_trichy_uxa0hr.jpg", status: "Visible" },
  { id: 12, title: "Thiruchendur Sea Temple", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_25_thiruchendur_fxugle.jpg", status: "Visible" },
  { id: 13, title: "Thekkady Periyar Wildlife", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246355/imgi_24_thekkady_s6nd7c.jpg", status: "Visible" },
  { id: 14, title: "Rameshwaram Pamban Bridge", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_23_rameshwaram_bv5odj.jpg", status: "Visible" },
  { id: 15, title: "Ooty Nilgiri Hills", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_22_ooty_mwiwte.jpg", status: "Visible" },
  { id: 16, title: "Courtallam Five Falls", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_13_courtallam_uehx2p.jpg", status: "Visible" },
  { id: 17, title: "Kumarakom Backwaters", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_17_Kumarakom_p0hswh.jpg", status: "Visible" },
  { id: 18, title: "Madurai Meenakshi Temple", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_18_madurai_rpybve.jpg", status: "Visible" },
  { id: 19, title: "Munnar Tea Plantations", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_19_Munnar_zpepqe.jpg", status: "Visible" },
  { id: 20, title: "Kanyakumari Sunset Point", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_14_kanyakumari_csetx3.jpg", status: "Visible" },
  { id: 21, title: "Kotagiri Nilgiri Panorama", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246354/imgi_16_kotagiri_mmkg42.jpg", status: "Visible" },
  { id: 22, title: "Arupadaiveedu Murugan Temple", category: "Spiritual", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246353/imgi_5_arupadaiveedu_t3cyhi.jpg", status: "Visible" },
  { id: 23, title: "Kodaikanal Misty Peaks", category: "Destinations", url: "https://res.cloudinary.com/vpjbovlg/image/upload/v1783246352/imgi_15_kodaikanal_bna8gi.jpg", status: "Visible" }
];

export const getGalleryImages = async () => {
  const list = await getDocuments('gallery', '', GALLERY_IMAGES);
  // Return only visible items to the public website page
  return list.filter(item => item.status !== 'Hidden');
};
