interface ImageData {
  src: string;
  srcFull: string;
  alt: string;
}

interface FeaturePhotosGridData {
  title: string;
  description: string;
  footnoteLabel: string;
  footnoteContent: string;
  images: ImageData[];
}

interface PostData {
  imgsrc: string;
  imgsrcFull: string;
  title: string;
  excerpt: string;
  url: string;
}

interface FeaturedPostsData {
  title: string;
  posts: PostData[];
}

interface FeaturePhotosGridSection {
  sectionTag: "featured-photos-grid";
  data: FeaturePhotosGridData;
}

interface FeaturedPostsSection {
  sectionTag: "featured-posts";
  data: FeaturedPostsData;
}

type Section = FeaturePhotosGridSection | FeaturedPostsSection;

export type { Section };
