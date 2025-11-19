import styles from "@/components/hero/style.module.scss";
import Image from "next/image";

interface HeroProps {
  heading: string;
  bannerUrl: string;
  buttonTitle?: string;
}

export function Hero({ heading, bannerUrl }: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
      </div>
      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          quality={100}
          fill={true}
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      </div>
    </main>
  );
}
