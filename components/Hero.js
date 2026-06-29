import Image from "next/image";
import styles from "./Hero.module.css";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <section id="accueil" className={`section ${styles.hero}`}>
      <div className="section-inner">

        {/* Two-column grid: content | photo */}
        <div className={styles.grid}>

          {/* Left — Content */}
          <div className={styles.content}>
            <p className={`eyebrow ${styles.eyebrow}`}>Profil</p>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.role}>{profile.tagline}</p>
            <p className={styles.bio}>{profile.bio}</p>

            <div className={styles.ctas}>
              <a href="#contact" className={styles.ctaPrimary}>Me contacter</a>
              <a href="#publications" className={styles.ctaSecondary}>Voir les publications →</a>
            </div>

            <div className={styles.contacts}>
              <a href={`mailto:${profile.email}`} className={styles.contactItem}>
                <span aria-hidden="true">✉</span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={styles.contactItem}>
                <span aria-hidden="true">☏</span>
                {profile.phone}
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <Image
                src="/Horacio_NANI.png"
                alt="Portrait de Horacio NANI"
                width={320}
                height={320}
                priority
                className={styles.photo}
              />
            </div>
            <div className={styles.photoBadge}>{profile.location}</div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.statsStrip}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
