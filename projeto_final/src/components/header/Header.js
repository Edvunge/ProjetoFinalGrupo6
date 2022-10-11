import styles from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import { useRouter } from "next/router";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header({ type }) {
  const router = useRouter();
  const [districts, setDistricts] = useState("");
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

  const handleOption = (operation) => {
    setQtdPeople((previous) =>
      operation === "i" ? previous + 1 : previous - 1
    );
  };
  const handleClick = () => {
    router.push(
      `/places?qtdPeople=${qtdPeople}&&dateCheckIn=${format(
        date[0].startDate,
        "dd/MM/yyyy"
      )}&&dateCheckOut=${format(
        date[0].endDate,
        "dd/MM/yyyy"
      )}&&districts=${districts}`
    );
  };

  return (
    <div className={styles.header}>
      <div
        className={
          type === "list"
            ? styles.headerContainerlistMode
            : styles.headerContainer
        }
      >
        {type !== "list" && (
          <>
            <h1 className={styles.headerTitle}>
              Cansado de trabalhar em casa?
            </h1>
            <p className={styles.headerDescription}>
              Encontre espaços para trabalhar em seu próximo projeto...
            </p>
            <div className={styles.headerSearch}>
              <div className={styles.headerSearchItem}>
                <MeetingRoomIcon className={styles.headerIcon} />
                <input
                  type="text"
                  placeholder="Lisboa..."
                  className={styles.headerSearchInput}
                  onChange={(e) => setDistricts(e.target.value)}
                />
              </div>
              <div className={styles.headerSearchItem}>
                <CalendarMonthIcon className={styles.headerIcon} />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className={styles.headerSearchText}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.date}
                    minDate={new Date()}
                    rangeColors={["#ffbd59", "#231f1f", "#ffbd59"]}
                  />
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <PersonIcon className={styles.headerIcon} />
                <span
                  onClick={() => setOpenPeople(!openPeople)}
                  className={styles.headerSearchText}
                >
                  {qtdPeople}
                </span>
              </div>
              {openPeople && (
                <div className={styles.qtdPeople}>
                  <div className={styles.optionQtdPeople}>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={qtdPeople <= 1}
                        className={styles.optionCounterButton}
                        onClick={() => handleOption("d")}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {qtdPeople}
                      </span>
                      <button
                        disabled={qtdPeople >= 12}
                        className={styles.optionCounterButton}
                        onClick={() => handleOption("i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.headerSearchItem}>
                <button onClick={handleClick} className={styles.headerButton}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
