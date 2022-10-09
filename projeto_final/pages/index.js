import Featured from "../src/components/featured/Featured";
import FeaturedProperties from "../src/components/featuredProperties/FeaturedProperties";
import Header from "../src/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
import BotaoReserva from "../src/components/reserva/BotaoReserva";
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
        <h1 className={styles.homeTitle}>Salas que os utilizadores amaram</h1>
        <FeaturedProperties />
        <BotaoReserva/>
      </div>
    </div>
  );
}
