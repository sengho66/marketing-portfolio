import styles from "./page.module.css";
import Header from "@/components/header";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <Tabs />
        </main>
      </div>
    </>
  );
}
