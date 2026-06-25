import styles from "./Timeline.module.css";
import { featuredExperience, earlierExperience } from "@/data/profile";

function Item({ e }) {
  return (
    <div className={styles.item}>
      <div className={styles.date}>{e.period}</div>
      <div className={styles.org}>{e.org}</div>
      <div className={styles.role}>{e.role}</div>
      <div className={styles.desc}>{e.desc}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <p className="eyebrow">Terrain</p>
        <h2>Expérience professionnelle</h2>

        <div className={styles.timeline}>
          {featuredExperience.map((e) => (
            <Item e={e} key={e.period + e.org} />
          ))}

          <details className={styles.more}>
            <summary>
              Afficher les {earlierExperience.length} missions antérieures
              (2019 – 2024) ↓
            </summary>
            <div className={styles.timeline} style={{ marginTop: 6 }}>
              {earlierExperience.map((e) => (
                <Item e={e} key={e.period + e.org} />
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
