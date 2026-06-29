import styles from "./Certifications.module.css";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <p className="eyebrow">Formation continue</p>
        <h2>Certifications professionnelles</h2>

        <div className={styles.grid}>
          {certifications.map((c, i) => (
            <div className={styles.card} key={i}>
              <span className={styles.year}>{c.year}</span>
              <p className={styles.title}>{c.title}</p>
              <p className={styles.org}>{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
