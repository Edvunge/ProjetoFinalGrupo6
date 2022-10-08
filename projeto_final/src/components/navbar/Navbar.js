import styles from "./Navbar.module.css";
import HailIcon from "@mui/icons-material/Hail";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navconteiner}>
        <span className={styles.logo}>Hive.co</span>
        <div className={styles.navitens}>
          <button className={styles.navbutton}>Registo</button>
          <button className={styles.navbutton}>Login</button>
        </div>
      </div>
    </div>
  );
};
