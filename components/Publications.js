import styles from "./Publications.module.css";
import { publications } from "@/data/profile";

function Group({ title, items, numbered = true }) {
  return (
    <div className={styles.group}>
      <div className={styles.groupHeader}>
        <h3 className={styles.groupTitle}>{title}</h3>
        {numbered && items.length > 0 && (
          <span className={styles.groupCount}>{items.length}</span>
        )}
      </div>
      {items.map((p, i) => (
        <div className={styles.item} key={i}>
          {numbered && <span className={styles.itemNum}>{i + 1}.</span>}
          <span>{typeof p === "string" ? p : p.text}</span>
        </div>
      ))}
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="section-inner">
        <p className="eyebrow">Diffusion scientifique</p>
        <h2>Publications &amp; communications</h2>

        <Group title="Publications" items={publications.journals} />
        <Group title="Communications &amp; colloques" items={publications.conferences} />
        <Group title="Travaux en cours" items={publications.ongoing} numbered={false} />

        <div className={styles.group}>
          <div className={styles.groupHeader}>
            <h3 className={styles.groupTitle}>Distinction</h3>
          </div>
          <div className={styles.distinction}>
            <span className={styles.distinctionIcon}>🏆</span>
            <span>{publications.distinction}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
