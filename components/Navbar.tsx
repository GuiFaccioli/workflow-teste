import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    function handleResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }

    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          MyApp
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <Link href="/sobre" className={styles.navLink}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/produtos" className={styles.navLink}>
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/contato" className={styles.navLink}>
              Contato
            </Link>
          </li>
          <li>
            <Link href="/login" className={styles.navLink}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
