"use client";

import styles from "@/components/header/style.module.scss";
import Link from "next/link";
import { useState, useEffect, useEffectEvent } from "react";

export function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.backgound}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Spider</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/#hq">HQ</Link>
            <Link href="/#contatos">Contatos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
