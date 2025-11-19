import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="hq">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativo do Herói"
            quality={100}
            fill={true}
            src={object.metadata.about.banner.url}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
      </section>
      <h2 className={styles.hqTitle}>
        Conheça os Maiores Vilões do Homem-Aranha
      </h2>
      <section className={styles.hqs}>
        {object.metadata.hq.map((hq) => (
          <article key={hq.description} className={styles.hq}>
            <div className={styles.innerHq}>
              <Image
                className={styles.imageHq}
                alt="Imagens dos Vições"
                quality={100}
                fill={true}
                src={hq.banner.url}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
              />
            </div>
            <p>{hq.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
