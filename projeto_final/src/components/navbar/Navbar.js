import styles from "./Navbar.module.css";
import Link from "next/link";
import Header from "../header/Header";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navconteiner}>
        <Link href="/"><a><span className={styles.logo}>Hive.co</span></a></Link>
        <div className={styles.navitens}>
          <Link href="/registar"><button className={styles.navbutton}>Registo</button></Link>
          <Link href="/login"><button className={styles.navbutton}>Login</button></Link>
        </div>
      </div>
      <Header type="list" />
    </div>
  );
};
