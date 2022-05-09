import Head from "next/head";
import { getSession,signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}

export default function Dashboard({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classroom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{user.email}</h1>

      <p>Sign Out</p>
      <button onClick={() => signOut()}>sign Out</button>
    </div>
  );
}
