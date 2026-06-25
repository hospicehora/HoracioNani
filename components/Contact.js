import styles from "./Contact.module.css";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="section-inner">
        <p className={`eyebrow ${styles.eyebrow}`}>Échangeons</p>
        <h2 className={styles.heading}>Contact</h2>

        <div className={styles.grid}>
          <div>
            <div className={styles.label}>Email</div>
            <a href={`mailto:${profile.email}`} className={styles.link}>
              {profile.email}
            </a>
          </div>
          <div>
            <div className={styles.label}>Téléphone</div>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className={styles.link}
            >
              {profile.phone}
            </a>
          </div>
          <div>
            <div className={styles.label}>Localisation</div>
            <span className={styles.white}>{profile.location}</span>
          </div>
        </div>

        <div className={styles.foot}>
          {profile.name} — {profile.role} · Portfolio professionnel
        </div>
      </div>
    </section>
  );
}
