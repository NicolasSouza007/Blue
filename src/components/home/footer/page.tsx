import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { Mail, Map, Phone } from "lucide-react";

export function Footer({ object }: HomeProps) {
  return (
    <footer id="contatos" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>
        <div className={styles.content}>
          <article className={styles.item}>
            <Mail size={28} color="#9a1316" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </article>
          <article className={styles.item}>
            <Phone size={28} color="#9a1316" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.fone}</p>
            </div>
          </article>
          <article className={styles.item}>
            <Map size={28} color="#9a1316" />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </article>
        </div>
      </section>

      <p className={styles.copyText}>
        Todos os direitos reservados {object.title} @
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
