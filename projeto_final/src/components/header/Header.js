import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
  const [qtdPeople, setQtdPeople] = useState(1);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Be with us</h1>
        <p className={styles.headerDescription}>
          Encontre locais para trabalhar em seu próximo projeto...
        </p>
        <div className={styles.headerSearch}>
          <div className={styles.headerSearchItem}>
            <MeetingRoomIcon className={styles.headerIcon} />
            <input
              type="text"
              placeholder="Lisboa..."
              className={styles.headerSearchInput}
            ></input>
          </div>
          <div className={styles.headerSearchItem}>
            <CalendarMonthIcon className={styles.headerIcon} />
            <span onClick={() => setOpenDate(!openDate)}className={styles.headerSearchText}>{`${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.date}
            />}
          </div>
          <div className={styles.headerSearchItem}>
            <PersonIcon className={styles.headerIcon} />
            <span className={styles.headerSearchText}>{`${qtdPeople} Pessoa`}</span>
          </div>
          <div className={styles.headerSearchItem}>
            <button className={styles.headerButton}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
