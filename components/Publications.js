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
      {items.map((p, i) => {
        const text = typeof p === "string" ? p : p.text;
        const url  = typeof p === "object" ? p.url : null;
        return (
          <div className={styles.item} key={i}>
            {numbered && <span className={styles.itemNum}>{i + 1}.</span>}
            <div className={styles.itemBody}>
              <span>{text}</span>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemLink}
                  aria-label="Consulter l'article"
                >
                  Consulter →
                </a>
              )}
            </div>
          </div>
        );
      })}
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
