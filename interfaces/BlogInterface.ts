export default interface BlogAttrs {
  name: string;
  slug: string;
  publish_date: string;
  description: string;
  video_link: string;
  image: string;
  is_video: string;
  category: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTag?: string;
  schemaOrg?: string;
  canonicalTag?: string;
}
