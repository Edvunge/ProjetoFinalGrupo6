import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import styles from "./List.module.css";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { DateRange } from "react-date-range";
import SearchItem from "../searchItem/SearchItem";

export default function List() {
  const router = useRouter();
  const [qtdPeople, setQtdPeople] = useState(router.query.qtdPeople);
  const [dateCheckIn, setDateCheckIn] = useState(router.query.dateCheckIn);
  const [dateCheckOut, setDateCheckOut] = useState(router.query.dateCheckOut);
  const [districts, setDistricts] = useState(router.query.districts);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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
              <input placeholder={districts} type="text" />
            </div>
            <div className={styles.lsItem}>
              <label>Data de Check-in</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                placeholder={`${dateCheckIn} to ${dateCheckOut}`}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  rangeColors={["#ffbd59", "#231f1f", "#ffbd59"]}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Opções</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Preço Min <small>por dia</small>
                  </span>
                  <input type="number" min={10} className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Preço Max <small>por dia</small>
                  </span>
                  <input type="number" min={10} className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Pessoas</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={qtdPeople}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
