import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.box}>
          <div>
            <h1 className={styles.sign}>Sign Up</h1>
            <center>
              <button type="submit" className={styles.login}>
                <Link className={styles.link} href="/api/auth/signin">
                  Sign In With Google
                </Link>
              </button>
              <button type="submit" className={styles.login1}>
                <Link className={styles.link1} href="/api/auth/signin">
                  Sign In With Github
                </Link>
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
