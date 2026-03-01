/**
 * Homepage image URLs (Supabase storage – public bucket).
 * Uses public URLs so they never expire. Update paths here if you rename files in the bucket.
 */
const SUPABASE_PUBLIC =
  "https://znceagtfodiaxzabnaoq.supabase.co/storage/v1/object/public/Casa%20B%20Photos";

export const HOME_IMAGE_URLS = {
  /** Hero / homepage banner */
  heroBanner: `${SUPABASE_PUBLIC}/Homepage%20Banner.jpg`,

  /** Second section image (location / "In the heart of Taos") */
  locationGraphic: `${SUPABASE_PUBLIC}/Graphic.PNG`,

  /** Gallery strip image (Veranda) */
  galleryVeranda: `${SUPABASE_PUBLIC}/Veranda%20.jpg`,

  /** Experience Taos section (4 photos) */
  experienceTaos: {
    pueblo: `${SUPABASE_PUBLIC}/14515880450_5d32f4038c_o.jpg`,
    rioGrandeGorge: `${SUPABASE_PUBLIC}/Rio-Grande-Gorge-History.webp`,
    taosSkiValley: `${SUPABASE_PUBLIC}/taos-ski-valley.jpg`,
    taosMountains: `${SUPABASE_PUBLIC}/taos%20mountains.webp`,
  },
} as const;
