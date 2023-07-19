import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import { signOut } from "next-auth/react";
import Head from "next/head";

export default function Page() {
  const { data: session, status, update } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Profile</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.body}>
          <div className={styles.box}>
            <div>
              <h1 className={styles.heading}>{session.user.name}</h1>
              <Image
                className={styles.img}
                src={session.user.image}
                alt=""
                width={100}
                height={100}
              ></Image>
              <div className={styles.flex}>
                <Link
                  onClick={() => signOut({ callbackUrl: "/" })}
                  href="/"
                  className={styles.link}
                >
                  <button className={styles.loginbtn}>Log Out</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.body1}>
        <div className={styles.box}>
          <center>
            <h1 className={styles.ok}>Not Authenticated</h1>
          </center>
          <center>
            <Link href="/api/auth/signin" className={styles.link}>
              <button className={styles.loginbtn}>Log In</button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}
