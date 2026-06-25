import styles from "./Timeline.module.css";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="parcours" className="section">
      <div className="section-inner">
        <p className="eyebrow">Formation</p>
        <h2>Parcours académique</h2>

        <div className={styles.timeline}>
          {education.map((e) => (
            <div className={styles.item} key={e.period + e.degree}>
              <div className={styles.date}>{e.period}</div>
              <div className={styles.org}>{e.institution}</div>
              <div className={styles.role}>{e.degree}</div>
              {e.detail ? <div className={styles.desc}>{e.detail}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
