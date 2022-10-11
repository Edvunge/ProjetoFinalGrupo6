import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import styles from "./List.module.css";
import { useRouter } from "next/router";

export default function List() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  });
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label>Distritos</label>
              <input type="text" />
            </div>
            <div className={styles.lsItem}>
              <label>Data de Check-in</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.listResult}></div>
        </div>
      </div>
    </div>
  );
}
