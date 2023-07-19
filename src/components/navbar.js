import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

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
            {status === "authenticated" ? (
              <button className={styles.button}>
                <Link href="/profile" className={styles.link1}>
                  profile
                </Link>
              </button>
            ) : (
              <button className={styles.button}>
                <Link href="/login" className={styles.link1}>
                  login
                </Link>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
