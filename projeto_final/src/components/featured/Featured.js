import React from 'react'
import styles from "./Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.featured}>
        <div className={styles.featuredItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.featuredImg} />
            <div className={styles.featuredTitles}>
                <h1>Setúbal</h1>
                <h2>125 Workstations</h2>
            </div>
        </div>
        <div className={styles.featuredItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/02/thumbnail-2-1.jpg" alt="marques" className={styles.featuredImg}/>
            <div className={styles.featuredTitles}>
                <h1>Marquês</h1>
                <h2>157 Workstations</h2>
            </div>
        </div>
    </div>
  )
}
