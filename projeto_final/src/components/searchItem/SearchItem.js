import React from "react";
import styles from "./SearchItem.module.css";

export default function SearchItem() {
  return (
    <div className={styles.searchItem}>
      <img
        src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
        alt="setubal"
        className={styles.siImg}
      />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle}>Title</h1>
        <span className={styles.siDistance}>Distancia</span>
        <span className={styles.siPlacesOfInterest}>Locais de interesse</span>
        <span className={styles.siFeatures}>Features</span>
      </div>
      <div className={styles.siDetails}>Detalhes</div>
    </div>
  );
}
