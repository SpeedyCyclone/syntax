import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.boxbox}>
          <div className={styles.box}>
            <div>
              <h1 className={styles.sign}>Sign Up</h1>
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="name"
                  className={styles.input}
                  required
                ></input>
                <input
                  type="text"
                  placeholder="email"
                  className={styles.input}
                  required
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  className={styles.input}
                  required
                ></input>
                <center>
                  <button type="submit" className={styles.submit}>
                    Submit
                  </button>
                </center>
              </form>
              <center>
                <button type="submit" className={styles.login}>
                  <Link className={styles.link} href="/api/auth/signin">
                    Sign In With Google
                  </Link>
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
