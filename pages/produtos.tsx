import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import styles from "@/styles/Produtos.module.css";

const BLOCKS = [
  {
    id: 1,
    title: "Produto Alpha",
    description:
      "Solução completa para gestão de projetos com integração em tempo real. Aumente a produtividade da sua equipe com dashboards intuitivos e relatórios automáticos.",
    image: "https://picsum.photos/seed/produto1/480/320",
    alt: "Produto Alpha",
  },
  {
    id: 2,
    title: "Produto Beta",
    description:
      "Plataforma de análise de dados com visualizações interativas. Tome decisões embasadas em métricas precisas e atualizadas continuamente.",
    image: "https://picsum.photos/seed/produto2/480/320",
    alt: "Produto Beta",
  },
  {
    id: 3,
    title: "Produto Gamma",
    description:
      "Ferramenta de automação de fluxos de trabalho que elimina tarefas repetitivas. Integre sistemas legados e modernos sem escrever uma linha de código.",
    image: "https://picsum.photos/seed/produto3/480/320",
    alt: "Produto Gamma",
  },
  {
    id: 4,
    title: "Produto Delta",
    description:
      "Suite de segurança corporativa com monitoramento 24/7 e resposta a incidentes. Proteja seus dados com criptografia de ponta a ponta e auditoria completa.",
    image: "https://picsum.photos/seed/produto4/480/320",
    alt: "Produto Delta",
  },
];

const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: "https://picsum.photos/seed/carousel1/800/400",
    alt: "Imagem do carrossel 1",
    caption: "Tecnologia de ponta",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/carousel2/800/400",
    alt: "Imagem do carrossel 2",
    caption: "Interface intuitiva",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/carousel3/800/400",
    alt: "Imagem do carrossel 3",
    caption: "Integração completa",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/carousel4/800/400",
    alt: "Imagem do carrossel 4",
    caption: "Suporte especializado",
  },
];

export default function Produtos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1
    );
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  return (
    <>
      <Head>
        <title>Produtos</title>
        <meta name="description" content="Conheça nossos produtos" />
      </Head>
      <main className={styles.main}>
        {/* Hero Header */}
        <section className={styles.hero}>
          <Title variant="h1" className={styles.heroTitle}>
            Nossos Produtos
          </Title>
          <p className={styles.heroSubtitle}>
            Soluções inovadoras para impulsionar o seu negócio. Descubra
            ferramentas poderosas criadas para simplificar o seu dia a dia.
          </p>
          <Link href="/contato" className={styles.heroButton}>
            Fale conosco
          </Link>
        </section>

        {/* Content Blocks */}
        <section className={styles.blocksSection}>
          {BLOCKS.map((block) => (
            <div key={block.id} className={styles.block}>
              <div className={styles.blockText}>
                <Title variant="h2" className={styles.blockTitle}>
                  {block.title}
                </Title>
                <p className={styles.blockDescription}>{block.description}</p>
              </div>
              <div className={styles.blockImageWrapper}>
                <Image
                  src={block.image}
                  alt={block.alt}
                  className={styles.blockImage}
                  width={480}
                  height={320}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Carousel */}
        <section className={styles.carouselSection}>
          <Title variant="h2" className={styles.carouselTitle}>
            Galeria
          </Title>
          <div className={styles.carousel} aria-label="Galeria de imagens">
            <button
              className={styles.carouselBtn}
              onClick={goToPrev}
              aria-label="Imagem anterior"
            >
              &#8592;
            </button>
            <div className={styles.carouselTrack}>
              <Image
                src={CAROUSEL_IMAGES[currentSlide].src}
                alt={CAROUSEL_IMAGES[currentSlide].alt}
                className={styles.carouselImage}
                width={800}
                height={400}
              />
              <p className={styles.carouselCaption}>
                {CAROUSEL_IMAGES[currentSlide].caption}
              </p>
            </div>
            <button
              className={styles.carouselBtn}
              onClick={goToNext}
              aria-label="Próxima imagem"
            >
              &#8594;
            </button>
          </div>
          <div className={styles.carouselDots}>
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <Title variant="h2" className={styles.ctaTitle}>
            Pronto para começar?
          </Title>
          <p className={styles.ctaText}>
            Entre em contato com nossa equipe e descubra como podemos
            transformar o seu negócio hoje mesmo.
          </p>
          <Link href="/contato" className={styles.ctaButton}>
            Entrar em contato
          </Link>
        </section>
      </main>
    </>
  );
}
