import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.main}>
        <Hero />
        <Domains />
        <Education />
        <Experience />
        <Publications />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
