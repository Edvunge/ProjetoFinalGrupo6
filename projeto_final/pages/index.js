import Featured from "../src/components/featured/Featured";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
import Reserva from "../src/components/reserva/Reserva";
import RoomsList from "../src/components/roomsList/roomsList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
        <h1 className={styles.homeTitle}>Procure por tipo de sala</h1>
        <RoomsList />
      </div>
    </div>
  );
}
