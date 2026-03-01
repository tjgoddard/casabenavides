/**
 * Gallery image URLs (Supabase storage – public bucket).
 * Used on the Gallery page and in the Taos Plaza experience card.
 */
const BASE =
  "https://znceagtfodiaxzabnaoq.supabase.co/storage/v1/object/public/Casa%20B%20Gallery%20Photos";

export const GALLERY_IMAGE_URLS = {
  galleryBedroomTwoBeds: `${BASE}/gallery-bedroom-two-beds.png`,
  galleryFireplaceCorner: `${BASE}/gallery-fireplace-corner.png`,
  galleryFireplaceSunflowers: `${BASE}/gallery-fireplace-sunflowers.png`,
  galleryLivingRoomArt: `${BASE}/gallery-living-room-art.png`,
  galleryPatioBlueDoors: `${BASE}/gallery-patio-blue-doors.png`,
  galleryRoomLightBlue: `${BASE}/gallery-room-light-blue.png`,
  gallerySittingTeal: `${BASE}/gallery-sitting-teal.png`,
  galleryTurquoiseKiva: `${BASE}/gallery-turquoise-kiva.png`,
  taosPlazaNew: `${BASE}/taos-plaza-new.jpg`,
  /** Taos Plaza (alternate / main image) */
  taosPlaza: `${BASE}/64c3e21f53d97.image_1752510334315.jpg`,
} as const;
