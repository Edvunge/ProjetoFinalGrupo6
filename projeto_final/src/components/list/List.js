import React from 'react'
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import styles from "./List.module.css";

export default function List() {
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        <div className={styles.listContainer}>
          <div className={styles.listWrapper}>
            <div className={styles.listSearch}>
              <h1 className={styles.lsTitle}>Search</h1>
            </div>
            <div className={styles.listResult}></div>
          </div>
        </div>
    </div>
  )
}
