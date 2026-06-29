import styles from "./Contact.module.css";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="section-inner">
        <p className={`eyebrow ${styles.eyebrow}`}>Échangeons</p>
        <h2 className={styles.heading}>Contact</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Email</p>
            <a href={`mailto:${profile.email}`} className={styles.cardLink}>
              {profile.email}
            </a>
          </div>

          <div className={styles.card}>
            <p className={styles.cardLabel}>Téléphone</p>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className={styles.cardLink}
            >
              {profile.phone}
            </a>
          </div>

          <div className={styles.card}>
            <p className={styles.cardLabel}>Localisation</p>
            <p className={styles.cardValue}>{profile.location}</p>
          </div>
        </div>

        <div className={styles.foot}>
          <span>{profile.name} — {profile.role}</span>
          <span className={styles.footAccent}>Portfolio · {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
