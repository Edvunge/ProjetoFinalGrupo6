import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navconteiner}>
        <span className={styles.logo}>Hive.Co</span>
        <div className={styles.navitens}>
          <button className={styles.navbutton}>Registro</button>
          <button className={styles.navbutton}>Login</button>
        </div>
      </div>
    </div>
  );
};
