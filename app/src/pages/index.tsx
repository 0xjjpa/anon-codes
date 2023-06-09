import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>anon.codes</b>
        </h1>
        <p className={styles.description}>
          Generate zero-knowledge access codes for events.
        </p>
      </main>
    </div>
  );
};

export default Home;
