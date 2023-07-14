import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
