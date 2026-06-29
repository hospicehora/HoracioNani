"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { profile } from "@/data/profile";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#parcours", label: "Parcours" },
  { href: "#experience", label: "Expérience" },
  { href: "#publications", label: "Publications" },
  { href: "#certifications", label: "Certifications" },
  { href: "#competences", label: "Compétences" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <div>
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>{profile.name}</div>
            <div className={styles.brandSub}>Économiste · Statisticien</div>
          </div>
          <button
            className={styles.toggle}
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? styles.active : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.foot}>
        {profile.location}
        <br />
        Mis à jour — juin 2026
      </div>
    </nav>
  );
}
