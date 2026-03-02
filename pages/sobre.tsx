import Head from "next/head";
import Title from "@/components/ui/Title";
import styles from "@/styles/Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
        <meta name="description" content="Conheça a nossa empresa" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Title variant="h1" className={styles.title}>Sobre nós</Title>
          <p className={styles.subtitle}>
            Conheça a nossa história, missão e os valores que nos guiam.
          </p>
        </section>

        <section className={styles.section}>
          <Title variant="h2" className={styles.sectionTitle}>Nossa História</Title>
          <p className={styles.text}>
            Fundada em 2020, a MyApp nasceu da vontade de simplificar a vida das
            pessoas por meio da tecnologia. Desde o início, nosso foco foi criar
            soluções intuitivas e acessíveis para todos.
          </p>
          <p className={styles.text}>
            Ao longo dos anos, crescemos de uma pequena equipe de
            entusiastas para uma empresa reconhecida pela qualidade e inovação
            nos produtos que entregamos.
          </p>
        </section>

        <section className={styles.section}>
          <Title variant="h2" className={styles.sectionTitle}>Missão</Title>
          <p className={styles.text}>
            Transformar a experiência digital das pessoas oferecendo produtos
            simples, eficientes e seguros que gerem valor real no dia a dia.
          </p>
        </section>

        <section className={styles.section}>
          <Title variant="h2" className={styles.sectionTitle}>Valores</Title>
          <ul className={styles.valuesList}>
            <li className={styles.valueItem}>
        
              <div>
                <strong>Transparência</strong>
                <p className={styles.valueText}>
                  Agimos com honestidade e clareza em todas as nossas relações.
                </p>
              </div>
            </li>
            <li className={styles.valueItem}>
             
              <div>
                <strong>Inovação</strong>
                <p className={styles.valueText}>
                  Buscamos sempre novas formas de resolver problemas e criar
                  valor.
                </p>
              </div>
            </li>
            <li className={styles.valueItem}>
            
              <div>
                <strong>Simplicidade</strong>
                <p className={styles.valueText}>
                  Acreditamos que as melhores soluções são aquelas que qualquer
                  pessoa consegue usar.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <Title variant="h2" className={styles.sectionTitle}>Nossa Equipe</Title>
          <div className={styles.teamGrid}>
            {[
              { name: "Cacazinho Mlk Bolado", role: "CEO & Fundadora" },
              { name: "Bruno Costa", role: "CTO" },
              { name: "Carla Souza", role: "Design Lead" },
              { name: "Diego Martins", role: "Engenheiro de Software" },
              { name: "Guiguizinho codador", role: "Ajudante do estagiário" },
            ].map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.name.charAt(0)}
                </div>
                <strong className={styles.memberName}>{member.name}</strong>
                <span className={styles.memberRole}>{member.role}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
