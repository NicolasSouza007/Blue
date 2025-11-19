import { Hero } from "@/components/hero/page";
import styles from "./styles.module.scss";

import { getItemBySlug } from "@/utils/actions/get.data";
import { PostProps } from "@/utils/post.type";
import { Container } from "@/components/container/page";
import Image from "next/image";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <>
      <Hero
        heading={objects[0].title}
        bannerUrl={objects[0].metadata.banner.url}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.TitleAbout}>
              {objects[0].metadata.description.title}
            </h1>
            <p className={styles.p}>{objects[0].metadata.description.text}</p>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              priority={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
