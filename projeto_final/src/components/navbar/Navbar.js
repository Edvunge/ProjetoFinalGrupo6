import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navconteiner}>
        <Link href="/"><a><span className={styles.logo}>Hive.co</span></a></Link>
        <div className={styles.navitens}>
          <button className={styles.navbutton}>Registo</button>
          <button className={styles.navbutton}>Login</button>
        </div>
      </div>
    </div>
  );
};
