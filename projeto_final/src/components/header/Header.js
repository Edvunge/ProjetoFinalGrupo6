import styles from "./Header.module.css";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export const Header = () => {
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
        <div className={styles.headerList}>
          <div className={styles.headerListItem}>
            <AssignmentIndIcon />
            <span>Freelancers</span>
          </div>
          <div className={styles.headerListItem}>
            <WorkIcon />
            <span>Empresas</span>
          </div>
          <div className={styles.headerListItem}>
            <GroupIcon />
            <span>Pequenos Grupos</span>
          </div>
          <div className={styles.headerListItem}>
            <PersonIcon />
            <span>Individuais</span>
          </div>
        </div>
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
            <span className={styles.headerSearchText}>{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.date}
            />
          </div>
          <div className={styles.headerSearchItem}>
            <PersonIcon className={styles.headerIcon} />
            <span className={styles.headerSearchText}>2 People</span>
          </div>
          <div className={styles.headerSearchItem}>
            <button className={styles.headerButton}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
