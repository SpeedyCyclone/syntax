import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>
              home
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/about" className={styles.link}>
              about
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/reserve" className={styles.link}>
              reserve
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact" className={styles.link}>
              contact
            </Link>
          </li>
          <li className={styles.li}>
            <button className={styles.button}>
              <Link href="/login" className={styles.link1}>
                login
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
