import Featured from "../src/components/featured/Featured";
import FeaturedProperties from "../src/components/featuredProperties/FeaturedProperties";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import MailList from "../src/components/mailList/MailList";
import Navbar from "../src/components/navbar/Navbar";
import BotaoReserva from "../src/components/reserva/BotaoReserva";
import PropertiesList from "../src/components/roomsList/PropertiesList";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import BotaoParceiro from "../src/components/parceiro/BotaoParceiro";
const prupridades = [
  {
    "_id": "6346961732cc944bf9f831c4",
    "roomNr": 8,
    "ratings": [
      5, 9,
      6,
      1,
      6,
      3,
      1,
      4,
      3
    ],
    "steet": "Fillmore Avenue",
    "name": "Zanymax",
    "location": "Finzel",
    "workStations": 82,
    "image": "./aaaaa.jpg"
  },
  {
    "_id": "63469617967fd31c748d8843",
    "roomNr": 5,
    "ratings": [
      2,
      7,
      2,
      8,
      3
    ],
    "steet": "Nelson Street",
    "name": "Sportan",
    "location": "Haring",
    "workStations": 112,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617520507620784854b",
    "roomNr": 8,
    "ratings": [
      1,
      6
    ],
    "steet": "Freeman Street",
    "name": "Kog",
    "location": "Cotopaxi",
    "workStations": 143,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a096bbe40fe7f3e8",
    "roomNr": 5,
    "ratings": [
      6,
      6,
      5,
      4
    ],
    "steet": "Pilling Street",
    "name": "Ezent",
    "location": "Tilleda",
    "workStations": 111,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617614d05614bff1b8e",
    "roomNr": 8,
    "ratings": [
      6
    ],
    "steet": "Perry Place",
    "name": "Zoxy",
    "location": "Deseret",
    "workStations": 188,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696177a1289a7e186ee6a",
    "roomNr": 5,
    "ratings": [
      10,
      2
    ],
    "steet": "Hicks Street",
    "name": "Portica",
    "location": "Waverly",
    "workStations": 177,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961777534ea50c8a812b",
    "roomNr": 8,
    "ratings": [
      9,
      6,
      8,
      4,
      5,
      9,
      1,
      5
    ],
    "steet": "Jackson Court",
    "name": "Talkola",
    "location": "Allamuchy",
    "workStations": 47
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617bd99e7118970974d",
    "roomNr": 7,
    "ratings": [
      5,
      9,
      1,
      3,
      8,
      3,
      7,
      9,
      6
    ],
    "steet": "Joralemon Street",
    "name": "Peticular",
    "location": "Brethren",
    "workStations": 106,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696176a44a7206d317ae4",
    "roomNr": 11,
    "ratings": [
      6,
      5,
      10,
      5
    ],
    "steet": "Court Street",
    "name": "Polarax",
    "location": "Buxton",
    "workStations": 116,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179f5f416d097eae08",
    "roomNr": 11,
    "ratings": [
      1,
      4,
      5,
      1,
      1,
      1,
      1,
      2,
      7,
      10
    ],
    "steet": "Kay Court",
    "name": "Comtrail",
    "location": "Hackneyville",
    "workStations": 110,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617bd971ab428402af9",
    "roomNr": 3,
    "ratings": [
      2,
      1,
      8,
      8,
      8,
      6,
      4,
      1,
      7,
      6
    ],
    "steet": "Woodbine Street",
    "name": "Playce",
    "location": "Kylertown",
    "workStations": 20
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617c6c68d1833de15e1",
    "roomNr": 1,
    "ratings": [
      4,
      6,
      8
    ],
    "steet": "Monaco Place",
    "name": "Intradisk",
    "location": "Chemung",
    "workStations": 195,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617274ec5dd3fb086b9",
    "roomNr": 9,
    "ratings": [2, 7, 3, 2, 10],
    "steet": "Kane Place",
    "name": "Satiance",
    "location": "Kerby",
    "workStations": 54
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961712c37a8310f02f28",
    "roomNr": 3,
    "ratings": [5],
    "steet": "Bijou Avenue",
    "name": "Netility",
    "location": "Nelson",
    "workStations": 71
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a6f45e943613deae",
    "roomNr": 12,
    "ratings": [4, 1, 9, 10, 2, 2],
    "steet": "Cleveland Street",
    "name": "Orboid",
    "location": "Eggertsville",
    "workStations": 71
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617dc06d64accad01d7",
    "roomNr": 3,
    "ratings": [3, 2, 4, 5, 9],
    "steet": "Chestnut Avenue",
    "name": "Qiao",
    "location": "Florence",
    "workStations": 87
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d6220e08f01ef3df",
    "roomNr": 3,
    "ratings": [10, 7, 9],
    "steet": "Willow Place",
    "name": "Stucco",
    "location": "Hegins",
    "workStations": 95
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696170d04fc953493b264",
    "roomNr": 7,
    "ratings": [8, 7, 1, 6, 6, 3, 9],
    "steet": "Emerald Street",
    "name": "Konnect",
    "location": "Salunga",
    "workStations": 54
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617333ff86c259f6be8",
    "roomNr": 5,
    "ratings": [7],
    "steet": "Madison Street",
    "name": "Xplor",
    "location": "Chumuckla",
    "workStations": 153,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173aeea3da5f6d1620",
    "roomNr": 11,
    "ratings": [8, 6],
    "steet": "Grattan Street",
    "name": "Gracker",
    "location": "Brookfield",
    "workStations": 151,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961747a285f87ce9087b",
    "roomNr": 5,
    "ratings": [5, 9, 7, 7, 4, 6, 8, 3, 7, 9],
    "steet": "Hall Street",
    "name": "Unia",
    "location": "Grill",
    "workStations": 32
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d851914cd5d58380",
    "roomNr": 2,
    "ratings": [9, 4, 9, 10, 6],
    "steet": "Dobbin Street",
    "name": "Tetratrex",
    "location": "Detroit",
    "workStations": 78
    ,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961780d26b962a23d311",
    "roomNr": 10,
    "ratings": [7, 8],
    "steet": "Engert Avenue",
    "name": "Edecine",
    "location": "Allensworth",
    "workStations": 164,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },

]

const loved = [
  {
    "_id": "6346943d564da2d1e57d8f9d",
    "roomNr": 12,
    "ratings": [2, 7, 9, 10, 10],
    "steet": "Dupont Street",
    "name": "Zillacom",
    "location": "Nicholson",
    "workStations": 101,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346943df8dee3bd72901eb9",
    "roomNr": 9,
    "ratings": [8],
    "steet": "Turnbull Avenue",
    "name": "Medalert",
    "location": "Ryderwood",
    "workStations": 131,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/02/DedicatedDesk_Visconde.jpg"
  },
  {
    "_id": "6346943da5917838d5faf54e",
    "roomNr": 12,
    "ratings": [9, 4, 3, 3, 3, 5, 1, 1, 4],
    "steet": "Lake Street",
    "name": "Junipoor",
    "location": "Hollins",
    "workStations": 113,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  }
]


const featured = [
  {
    "_id": "6346944a267a6896f66f38ea",
    "roomNr": 12,
    "ratings": [7, 8, 10],
    "steet": "Hubbard Street",
    "name": "Omatom",
    "location": "Gadsden",
    "workStations": 70
  },
  {
    "_id": "6346944a2a952fe46fe119e2",
    "roomNr": 10,
    "ratings": [4, 5, 9, 10, 9, 3, 3],
    "steet": "Celeste Court",
    "name": "Boilicon",
    "location": "Graball",
    "workStations": 143
  }
]

const espacinhosFofinhosLolOkTabem = {
  features: featured,
  loved: loved,
  default: prupridades
}
export default function Home() {
  const [properties, setProperties] = useState({ default: [], loved: [], featured: [] })

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await fetch("/api/places")
      if (res.status === 200) {
        const json = await res.json()
        setProperties({ loved: json.loved, default: json.default, featured: json.featured })
      }
    }

    fetchPlaces()
  }, [])

  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured properties={properties.featured}/>
        <h1 className={styles.homeTitle}>Procure por tipo de sala</h1>
        <PropertiesList properties={properties.default} />
        <h1 className={styles.homeTitle}>Salas que os utilizadores amaram</h1>
        <FeaturedProperties properties={properties.loved} />
        <BotaoParceiro />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
