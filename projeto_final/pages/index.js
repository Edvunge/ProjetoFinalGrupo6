import { Header } from "../src/components/header/Header";
import { Navbar } from "../src/components/navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
    </div>
  );
}
