import styles from "./Hero.module.css";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <section id="accueil" className={`section ${styles.hero}`}>
      <div className="section-inner">
        <p className="eyebrow">Profil</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.tagline}</p>
        <p className={styles.bio}>{profile.bio}</p>

        <div className={styles.links}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a href="#publications">Publications →</a>
          <a href="#experience">Expériences →</a>
        </div>

        <div className={styles.ledger}>
          {stats.map((s) => (
            <div key={s.label} className={styles.ledgerItem}>
              <span className={styles.ledgerNum}>{s.value}</span>
              <span className={styles.ledgerLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
