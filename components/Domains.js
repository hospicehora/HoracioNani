import styles from "./Domains.module.css";
import { researchDomains, sectorDomains, affiliations } from "@/data/profile";

export default function Domains() {
  return (
    <section id="domaines" className="section">
      <div className="section-inner">
        <p className="eyebrow">Champs d'intervention</p>
        <h2>Domaines de recherche &amp; d&apos;expertise</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.subhead}>Domaines de recherche</h3>
            <div className={styles.tags}>
              {researchDomains.map((d) => (
                <span key={d} className={styles.tag}>
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.subhead}>Domaines d&apos;expertise sectorielle</h3>
            <div className={styles.tags}>
              {sectorDomains.map((d) => (
                <span key={d} className={styles.tag}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className={styles.subhead} style={{ marginTop: 40 }}>
          Réseaux &amp; affiliations professionnelles
        </h3>
        <div className={styles.tags}>
          {affiliations.map((a) => (
            <span key={a} className={styles.tag}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
