import styles from "./Certifications.module.css";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <p className="eyebrow">Formation continue</p>
        <h2>Certifications professionnelles</h2>

        <div className={styles.list}>
          {certifications.map((c, i) => (
            <div className={styles.item} key={i}>
              <span className={styles.year}>{c.year}</span> — {c.title}
              <br />
              <span className={styles.org}>{c.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
