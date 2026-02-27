import Image from "next/image";
import styles from "@/styles/IntroSection.module.css";

interface IntroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function IntroSection({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: IntroSectionProps) {
  return (
    <section
      className={`${styles.intro} ${reverse ? styles.reverse : ""}`}
      data-reverse={reverse ? "true" : undefined}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={480}
          height={320}
          className={styles.image}
          loading="lazy"
        />
      </div>
    </section>
  );
}
