import styles from "./Skills.module.css";
import { tools, coreSkills, languages } from "@/data/profile";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="section-inner">
        <p className="eyebrow">Boîte à outils</p>
        <h2>Compétences &amp; langues</h2>

        <div className={styles.block}>
          <h3 className={styles.subhead}>Logiciels &amp; outils numériques</h3>
          <div className={styles.tags}>
            {tools.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.subhead}>Compétences clés</h3>
          <div className={styles.tags}>
            {coreSkills.map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.subhead}>Langues de travail</h3>
          {languages.map((l) => (
            <div className={styles.langRow} key={l.name}>
              <div className={styles.langTop}>
                <span>{l.name}</span>
                <span className={styles.langLevel}>{l.level}</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${l.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
