"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { galleryImages } from "@/data/profile";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="galerie" className="section">
      <div className="section-inner">
        <p className="eyebrow">En images</p>
        <h2 className={styles.title}>Galerie</h2>

        <div className={styles.grid}>
          {galleryImages.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              className={styles.cell}
              onClick={() => setActive(img)}
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
                className={styles.img}
              />
              {img.caption && (
                <span className={styles.caption}>{img.caption}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className={styles.lightbox}
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setActive(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <div className={styles.lightboxInner}>
            <Image
              src={active.src}
              alt={active.alt}
              width={1200}
              height={1200}
              className={styles.lightboxImg}
            />
            {active.caption && (
              <p className={styles.lightboxCaption}>{active.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
