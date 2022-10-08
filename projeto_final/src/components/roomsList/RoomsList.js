import React from 'react'
import styles from "./roomsList.module.css";

export default function RoomsList() {
  return (
    <div className={styles.rList}>
        <div className={styles.rListItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.rListImg} />
            <div className={styles.rListTitles}>
                <h1>Setúbal</h1>
                <h2>125 Workstations</h2>
            </div>
        </div>
        <div className={styles.rListItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.rListImg} />
            <div className={styles.rListTitles}>
                <h1>Setúbal</h1>
                <h2>125 Workstations</h2>
            </div>
        </div>
        <div className={styles.rListItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.rListImg} />
            <div className={styles.rListTitles}>
                <h1>Setúbal</h1>
                <h2>125 Workstations</h2>
            </div>
        </div>
        <div className={styles.rListItem}>
            <img src="https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg" alt="setubal" className={styles.rListImg} />
            <div className={styles.rListTitles}>
                <h1>Setúbal</h1>
                <h2>125 Workstations</h2>
            </div>
        </div>
    </div>
  )
}
