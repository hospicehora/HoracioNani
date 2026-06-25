import styles from "./Publications.module.css";
import { publications } from "@/data/profile";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="section-inner">
        <p className="eyebrow">Diffusion scientifique</p>
        <h2>Publications &amp; communications</h2>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Revues académiques</h3>
          {publications.journals.map((p, i) => (
            <div className={styles.item} key={i}>
              {p.text}
            </div>
          ))}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>
            Communications &amp; colloques scientifiques
          </h3>
          {publications.conferences.map((p, i) => (
            <div className={styles.item} key={i}>
              {p.text}
            </div>
          ))}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Travaux en cours</h3>
          {publications.ongoing.map((p, i) => (
            <div className={styles.item} key={i}>
              {p}
            </div>
          ))}
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Distinction</h3>
          <div className={styles.item}>{publications.distinction}</div>
        </div>
      </div>
    </section>
  );
}
