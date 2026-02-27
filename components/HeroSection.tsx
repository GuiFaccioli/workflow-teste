import styles from "@/styles/HeroSection.module.css";

interface HeroSectionProps {
  imageUrl?: string;
  altText?: string;
}

export default function HeroSection({
  imageUrl = "https://picsum.photos/seed/hero/1200/500",
  altText = "Hero background",
}: HeroSectionProps) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={altText}
    />
  );
}
