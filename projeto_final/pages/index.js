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
      5,
      9,
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
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
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
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
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
    "ratings": [
      2,
      7,
      3,
      2,
      10
    ],
    "steet": "Kane Place",
    "name": "Satiance",
    "location": "Kerby",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961712c37a8310f02f28",
    "roomNr": 3,
    "ratings": [
      5
    ],
    "steet": "Bijou Avenue",
    "name": "Netility",
    "location": "Nelson",
    "workStations": 71
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617a6f45e943613deae",
    "roomNr": 12,
    "ratings": [
      4,
      1,
      9,
      10,
      2,
      2
    ],
    "steet": "Cleveland Street",
    "name": "Orboid",
    "location": "Eggertsville",
    "workStations": 71
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617dc06d64accad01d7",
    "roomNr": 3,
    "ratings": [
      3,
      2,
      4,
      5,
      9
    ],
    "steet": "Chestnut Avenue",
    "name": "Qiao",
    "location": "Florence",
    "workStations": 87
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617d6220e08f01ef3df",
    "roomNr": 3,
    "ratings": [
      10,
      7,
      9
    ],
    "steet": "Willow Place",
    "name": "Stucco",
    "location": "Hegins",
    "workStations": 95
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696170d04fc953493b264",
    "roomNr": 7,
    "ratings": [
      8,
      7,
      1,
      6,
      6,
      3,
      9
    ],
    "steet": "Emerald Street",
    "name": "Konnect",
    "location": "Salunga",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617333ff86c259f6be8",
    "roomNr": 5,
    "ratings": [
      7
    ],
    "steet": "Madison Street",
    "name": "Xplor",
    "location": "Chumuckla",
    "workStations": 153,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173aeea3da5f6d1620",
    "roomNr": 11,
    "ratings": [
      8,
      6
    ],
    "steet": "Grattan Street",
    "name": "Gracker",
    "location": "Brookfield",
    "workStations": 151,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961747a285f87ce9087b",
    "roomNr": 5,
    "ratings": [
      5,
      9,
      7,
      7,
      4,
      6,
      8,
      3,
      7,
      9
    ],
    "steet": "Hall Street",
    "name": "Unia",
    "location": "Grill",
    "workStations": 32
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617d851914cd5d58380",
    "roomNr": 2,
    "ratings": [
      9,
      4,
      9,
      10,
      6
    ],
    "steet": "Dobbin Street",
    "name": "Tetratrex",
    "location": "Detroit",
    "workStations": 78
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961780d26b962a23d311",
    "roomNr": 10,
    "ratings": [
      7,
      8
    ],
    "steet": "Engert Avenue",
    "name": "Edecine",
    "location": "Allensworth",
    "workStations": 164,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  /*{
    "_id": "63469617d5dfc8bce1e4bb3b",
    "roomNr": 4,
    "ratings": [
      7,
      7,
      7,
      1
    ],
    "steet": "Dictum Court",
    "name": "Lyria",
    "location": "Chalfant",
    "workStations": 181,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ebfe8e68af83ab3d",
    "roomNr": 9,
    "ratings": [
      10,
      3,
      7,
      8,
      5,
      6,
      3,
      5,
      2
    ],
    "steet": "Church Avenue",
    "name": "Bluplanet",
    "location": "Dixie",
    "workStations": 87
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696173bcad8a1d4434a5e",
    "roomNr": 6,
    "ratings": [
      9,
      3,
      4,
      2,
      6,
      7
    ],
    "steet": "Vermont Street",
    "name": "Grok",
    "location": "Cuylerville",
    "workStations": 163,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696178dbd1edc76ab1341",
    "roomNr": 6,
    "ratings": [
      5,
      4,
      6,
      10,
      1,
      7,
      3,
      8,
      2
    ],
    "steet": "Sharon Street",
    "name": "Franscene",
    "location": "Grayhawk",
    "workStations": 142,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ad7b67baa00307d3",
    "roomNr": 1,
    "ratings": [
      5,
      1,
      5,
      7,
      3
    ],
    "steet": "Richards Street",
    "name": "Conferia",
    "location": "Edgewater",
    "workStations": 92
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617a4dfa38f906c0280",
    "roomNr": 9,
    "ratings": [
      3,
      7,
      2,
      7,
      3,
      8,
      5,
      5,
      2,
      10
    ],
    "steet": "Maple Avenue",
    "name": "Flexigen",
    "location": "Coinjock",
    "workStations": 36
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617c7f3675270d77e21",
    "roomNr": 6,
    "ratings": [
      6
    ],
    "steet": "Cooke Court",
    "name": "Darwinium",
    "location": "Iberia",
    "workStations": 169,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617009480203c2d2f1a",
    "roomNr": 10,
    "ratings": [
      5,
      1,
      8,
      9
    ],
    "steet": "Nova Court",
    "name": "Kongene",
    "location": "Cartwright",
    "workStations": 172,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961775483a7492e5ec2a",
    "roomNr": 1,
    "ratings": [
      6,
      4,
      8,
      3,
      4,
      10,
      3,
      7,
      5
    ],
    "steet": "Atkins Avenue",
    "name": "Oronoko",
    "location": "Glenbrook",
    "workStations": 144,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617073c796f2dc60594",
    "roomNr": 6,
    "ratings": [
      1,
      5,
      5,
      8,
      5,
      6,
      6,
      3,
      1
    ],
    "steet": "Frank Court",
    "name": "Digigen",
    "location": "Warsaw",
    "workStations": 198,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961714e9a5a37a423dc8",
    "roomNr": 11,
    "ratings": [
      5,
      9,
      3,
      6,
      3
    ],
    "steet": "Williamsburg Street",
    "name": "Cogentry",
    "location": "Wright",
    "workStations": 176,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617c23f0dc14d2d3ab3",
    "roomNr": 5,
    "ratings": [
      5,
      4,
      5,
      2,
      5,
      10,
      8
    ],
    "steet": "Ocean Parkway",
    "name": "Combogen",
    "location": "Lewis",
    "workStations": 102,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173ee588aac7b678a6",
    "roomNr": 11,
    "ratings": [
      1,
      1,
      6,
      2,
      7,
      5
    ],
    "steet": "Sutton Street",
    "name": "Ecrater",
    "location": "Malo",
    "workStations": 116,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e7e7620169b76279",
    "roomNr": 4,
    "ratings": [
      9,
      6,
      5,
      6
    ],
    "steet": "Campus Place",
    "name": "Krog",
    "location": "Tetherow",
    "workStations": 160,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617eac867d2dbaad519",
    "roomNr": 12,
    "ratings": [
      4,
      2,
      8,
      5,
      7,
      2,
      10,
      10,
      9
    ],
    "steet": "Lawton Street",
    "name": "Enersol",
    "location": "Maplewood",
    "workStations": 39
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f229c55f969ea986",
    "roomNr": 3,
    "ratings": [
      2,
      8
    ],
    "steet": "Raleigh Place",
    "name": "Halap",
    "location": "Forestburg",
    "workStations": 113,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961743a36bac56e00f58",
    "roomNr": 2,
    "ratings": [
      6,
      7,
      6,
      10,
      7,
      6
    ],
    "steet": "Kings Place",
    "name": "Eyeris",
    "location": "Rockbridge",
    "workStations": 137,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961783ba41a0c29d862c",
    "roomNr": 12,
    "ratings": [
      4,
      6,
      9,
      5,
      9
    ],
    "steet": "Imlay Street",
    "name": "Inear",
    "location": "Farmers",
    "workStations": 46
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617c97edfb8e0bbafcb",
    "roomNr": 12,
    "ratings": [
      1,
      4
    ],
    "steet": "Tampa Court",
    "name": "Cipromox",
    "location": "Heil",
    "workStations": 61
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617d52027c8bae430f0",
    "roomNr": 3,
    "ratings": [
      1,
      10,
      4,
      8,
      10,
      10
    ],
    "steet": "Bouck Court",
    "name": "Magnina",
    "location": "Roberts",
    "workStations": 134,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617397f4c9824a2dda6",
    "roomNr": 5,
    "ratings": [
      4,
      7,
      1,
      10
    ],
    "steet": "Bryant Street",
    "name": "Uberlux",
    "location": "Troy",
    "workStations": 63
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696174695f46a773c1b25",
    "roomNr": 10,
    "ratings": [
      8,
      9,
      6,
      3,
      8
    ],
    "steet": "Hanover Place",
    "name": "Ziore",
    "location": "Orovada",
    "workStations": 16
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961774cc834cc520260a",
    "roomNr": 8,
    "ratings": [
      7,
      3,
      7,
      8
    ],
    "steet": "Paerdegat Avenue",
    "name": "Comverges",
    "location": "Rodman",
    "workStations": 135,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b7889cac893b1614",
    "roomNr": 12,
    "ratings": [
      1,
      3,
      9,
      4,
      10,
      2,
      5,
      1
    ],
    "steet": "Halsey Street",
    "name": "Bolax",
    "location": "Wadsworth",
    "workStations": 125,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961719b0d48b877a4294",
    "roomNr": 5,
    "ratings": [
      8,
      8,
      2,
      6
    ],
    "steet": "Will Place",
    "name": "Enomen",
    "location": "Takilma",
    "workStations": 199,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961730346591a1602bea",
    "roomNr": 1,
    "ratings": [
      1,
      3
    ],
    "steet": "Ridge Court",
    "name": "Quinex",
    "location": "Vandiver",
    "workStations": 34
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961775a7a46024a8bdfb",
    "roomNr": 6,
    "ratings": [
      7,
      10,
      7,
      8,
      4,
      3,
      9,
      10
    ],
    "steet": "Hausman Street",
    "name": "Wrapture",
    "location": "Welch",
    "workStations": 133,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175ba231e3a1fd6b29",
    "roomNr": 1,
    "ratings": [
      2,
      8
    ],
    "steet": "Cornelia Street",
    "name": "Entropix",
    "location": "Wauhillau",
    "workStations": 160,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961721beb80f5e67b880",
    "roomNr": 6,
    "ratings": [
      7,
      2,
      9
    ],
    "steet": "Lake Street",
    "name": "Katakana",
    "location": "Stevens",
    "workStations": 152,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617c0fcd739b54a2c5e",
    "roomNr": 8,
    "ratings": [
      2
    ],
    "steet": "Hegeman Avenue",
    "name": "Solgan",
    "location": "Turah",
    "workStations": 73
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617536c7883061d0a22",
    "roomNr": 1,
    "ratings": [
      7,
      1,
      4,
      6,
      10,
      4,
      6,
      5
    ],
    "steet": "Kingsway Place",
    "name": "Frosnex",
    "location": "Marenisco",
    "workStations": 148,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a66f432c893c9750",
    "roomNr": 9,
    "ratings": [
      8,
      4,
      1,
      6,
      10,
      2
    ],
    "steet": "Girard Street",
    "name": "Plutorque",
    "location": "Cade",
    "workStations": 95
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617065542ce60857348",
    "roomNr": 10,
    "ratings": [
      5,
      7,
      6,
      8,
      3
    ],
    "steet": "Voorhies Avenue",
    "name": "Confrenzy",
    "location": "Cecilia",
    "workStations": 196,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696172d7af315b386f5e1",
    "roomNr": 8,
    "ratings": [
      10,
      1,
      9,
      8
    ],
    "steet": "Billings Place",
    "name": "Tingles",
    "location": "Stagecoach",
    "workStations": 119,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617be3900a1f99945b4",
    "roomNr": 7,
    "ratings": [
      5,
      5,
      5,
      1,
      7,
      2,
      7,
      1,
      5,
      7
    ],
    "steet": "Hubbard Place",
    "name": "Uncorp",
    "location": "Torboy",
    "workStations": 118,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617f18f3f39446235f8",
    "roomNr": 11,
    "ratings": [
      2,
      10,
      3,
      4,
      10,
      8,
      10,
      6,
      9
    ],
    "steet": "Java Street",
    "name": "Zytrac",
    "location": "Mooresburg",
    "workStations": 129,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696170c2b3f399197a18b",
    "roomNr": 12,
    "ratings": [
      8,
      3,
      3,
      6,
      3,
      5,
      6,
      4
    ],
    "steet": "Harrison Place",
    "name": "Krag",
    "location": "Kent",
    "workStations": 117,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175b3a03365c48a8df",
    "roomNr": 1,
    "ratings": [
      4,
      4,
      10,
      1,
      4,
      1,
      5
    ],
    "steet": "Tompkins Avenue",
    "name": "Insectus",
    "location": "Cazadero",
    "workStations": 171,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961744b7e6971e4909eb",
    "roomNr": 10,
    "ratings": [
      1,
      2,
      7,
      2,
      8,
      3,
      10,
      5
    ],
    "steet": "Ebony Court",
    "name": "Mobildata",
    "location": "Caledonia",
    "workStations": 154,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696170f2f0d1397afe005",
    "roomNr": 12,
    "ratings": [
      9,
      6,
      7,
      9,
      9,
      9,
      8,
      6,
      2
    ],
    "steet": "Bennet Court",
    "name": "Equicom",
    "location": "Rosburg",
    "workStations": 124,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b5b78bb7e308339a",
    "roomNr": 7,
    "ratings": [
      2,
      8,
      8,
      2,
      5,
      2,
      6,
      2
    ],
    "steet": "Cambridge Place",
    "name": "Ecosys",
    "location": "Lavalette",
    "workStations": 151,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617deb8e31564a8d29e",
    "roomNr": 1,
    "ratings": [
      8,
      10,
      7,
      10,
      8,
      3,
      10,
      3
    ],
    "steet": "Sedgwick Street",
    "name": "Snips",
    "location": "Windsor",
    "workStations": 147,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961787ab49d80df4f2db",
    "roomNr": 7,
    "ratings": [
      1
    ],
    "steet": "Wyckoff Avenue",
    "name": "Ceprene",
    "location": "Churchill",
    "workStations": 147,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617694de5dd04f45872",
    "roomNr": 6,
    "ratings": [
      5,
      8,
      8,
      2,
      10,
      8
    ],
    "steet": "Devoe Street",
    "name": "Nebulean",
    "location": "Blanco",
    "workStations": 45
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617b5e06684acc4839a",
    "roomNr": 11,
    "ratings": [
      7,
      3,
      7
    ],
    "steet": "Diamond Street",
    "name": "Keeg",
    "location": "Cornfields",
    "workStations": 90
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961787bfd55f0211f79f",
    "roomNr": 9,
    "ratings": [
      5,
      3
    ],
    "steet": "Ridge Boulevard",
    "name": "Golistic",
    "location": "Inkerman",
    "workStations": 197,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961733c19440a487ef9d",
    "roomNr": 11,
    "ratings": [
      10,
      7,
      10,
      3,
      7
    ],
    "steet": "Grand Street",
    "name": "Bluegrain",
    "location": "Beaverdale",
    "workStations": 181,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ae8f2f5483a86b17",
    "roomNr": 5,
    "ratings": [
      10,
      1,
      7,
      7,
      7,
      6,
      4
    ],
    "steet": "Onderdonk Avenue",
    "name": "Obliq",
    "location": "Harrodsburg",
    "workStations": 114,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696171290cb3510b708f8",
    "roomNr": 6,
    "ratings": [
      9,
      1,
      3,
      4,
      7,
      5,
      1,
      1,
      6,
      7
    ],
    "steet": "Colby Court",
    "name": "Idealis",
    "location": "Leroy",
    "workStations": 196,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173d035664246a3feb",
    "roomNr": 12,
    "ratings": [
      9,
      1,
      3,
      2,
      8,
      9,
      1
    ],
    "steet": "Jewel Street",
    "name": "Nitracyr",
    "location": "Sandston",
    "workStations": 82
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617edca3b34b5cb3a88",
    "roomNr": 4,
    "ratings": [
      5,
      1,
      2
    ],
    "steet": "Anna Court",
    "name": "Combot",
    "location": "Tryon",
    "workStations": 188,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617250816bf8c8ad56c",
    "roomNr": 6,
    "ratings": [
      4,
      9
    ],
    "steet": "Polhemus Place",
    "name": "Xinware",
    "location": "Umapine",
    "workStations": 86
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696174870bca6afe3e7db",
    "roomNr": 8,
    "ratings": [
      4,
      9,
      8,
      7
    ],
    "steet": "Miami Court",
    "name": "Biolive",
    "location": "Ahwahnee",
    "workStations": 37
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617fac7aadd0815833e",
    "roomNr": 8,
    "ratings": [
      5,
      3
    ],
    "steet": "India Street",
    "name": "Buzzmaker",
    "location": "Chesapeake",
    "workStations": 101,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617345f6557b9a33b90",
    "roomNr": 9,
    "ratings": [
      4,
      9,
      8,
      8,
      8,
      2,
      9
    ],
    "steet": "Woodside Avenue",
    "name": "Dadabase",
    "location": "Belmont",
    "workStations": 38
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178254672d8f39c57e",
    "roomNr": 1,
    "ratings": [
      3,
      10,
      9,
      5,
      3,
      9
    ],
    "steet": "Box Street",
    "name": "Slumberia",
    "location": "Keyport",
    "workStations": 108,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175bf0fe90d396eb2e",
    "roomNr": 10,
    "ratings": [
      4,
      6,
      10,
      4,
      7
    ],
    "steet": "Lott Street",
    "name": "Farmex",
    "location": "Gardiner",
    "workStations": 97
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961797f4770b74d6eed9",
    "roomNr": 7,
    "ratings": [
      10,
      4,
      2,
      8,
      9,
      1,
      6
    ],
    "steet": "Dare Court",
    "name": "Grainspot",
    "location": "Marbury",
    "workStations": 106,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617df1bfe4f6127ad7c",
    "roomNr": 4,
    "ratings": [
      8,
      5,
      5,
      5,
      10,
      2,
      7,
      1,
      2
    ],
    "steet": "Hendrix Street",
    "name": "Rockyard",
    "location": "Hoehne",
    "workStations": 147,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696172aadcdab3861a897",
    "roomNr": 11,
    "ratings": [
      4,
      4,
      7,
      7,
      7,
      7,
      9,
      4
    ],
    "steet": "Brighton Avenue",
    "name": "Idego",
    "location": "Tuttle",
    "workStations": 98
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617c180288afeb6e516",
    "roomNr": 5,
    "ratings": [
      6,
      4,
      10,
      1,
      6,
      1,
      2
    ],
    "steet": "Graham Avenue",
    "name": "Netur",
    "location": "Shasta",
    "workStations": 36
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696179fde608a5ccf59ca",
    "roomNr": 6,
    "ratings": [
      7,
      10,
      9,
      4,
      5,
      8,
      1,
      3
    ],
    "steet": "Vermont Court",
    "name": "Imkan",
    "location": "Hailesboro",
    "workStations": 97
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617dd5c57a892fe2552",
    "roomNr": 10,
    "ratings": [
      3,
      4,
      3,
      9,
      1,
      9,
      10,
      5,
      3
    ],
    "steet": "Minna Street",
    "name": "Geeknet",
    "location": "Springhill",
    "workStations": 27
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617899ef38488eff721",
    "roomNr": 5,
    "ratings": [
      3,
      3,
      5,
      4,
      8,
      10,
      4,
      6,
      3
    ],
    "steet": "Banner Avenue",
    "name": "Xth",
    "location": "Stewart",
    "workStations": 67
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696172603e2daa9348e88",
    "roomNr": 5,
    "ratings": [
      5
    ],
    "steet": "Coffey Street",
    "name": "Automon",
    "location": "Centerville",
    "workStations": 122,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617326d7b20b84ceeb1",
    "roomNr": 6,
    "ratings": [
      7,
      4,
      7,
      10,
      2,
      7,
      10,
      5
    ],
    "steet": "Bridge Street",
    "name": "Sentia",
    "location": "Wyoming",
    "workStations": 93
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617594b7b30b4705115",
    "roomNr": 10,
    "ratings": [
      2
    ],
    "steet": "Glen Street",
    "name": "Egypto",
    "location": "Urbana",
    "workStations": 109,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b332d8aa7f477d30",
    "roomNr": 2,
    "ratings": [
      3,
      4,
      8,
      2,
      2
    ],
    "steet": "Suydam Street",
    "name": "Neteria",
    "location": "Rutherford",
    "workStations": 161,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961763f1e22107b6dc73",
    "roomNr": 6,
    "ratings": [
      3,
      2,
      10,
      4,
      1,
      2
    ],
    "steet": "Berkeley Place",
    "name": "Daisu",
    "location": "Linganore",
    "workStations": 149,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696177e98eac04dfad03c",
    "roomNr": 5,
    "ratings": [
      6
    ],
    "steet": "Varick Avenue",
    "name": "Ramjob",
    "location": "Murillo",
    "workStations": 70
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617aabad2c1ffb7dda5",
    "roomNr": 7,
    "ratings": [
      1,
      2,
      9
    ],
    "steet": "Lee Avenue",
    "name": "Enerforce",
    "location": "Leyner",
    "workStations": 129,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b09cbeba2f59009f",
    "roomNr": 6,
    "ratings": [
      1,
      9,
      5
    ],
    "steet": "Kensington Walk",
    "name": "Lunchpod",
    "location": "Bentley",
    "workStations": 157,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617dffba7429f64df00",
    "roomNr": 1,
    "ratings": [
      2,
      6,
      10,
      2,
      7,
      7,
      3
    ],
    "steet": "Menahan Street",
    "name": "Interloo",
    "location": "Felt",
    "workStations": 170,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696178107263185c7704d",
    "roomNr": 3,
    "ratings": [
      8,
      7,
      8,
      4,
      4,
      6,
      1,
      10,
      1
    ],
    "steet": "Conduit Boulevard",
    "name": "Digifad",
    "location": "Marion",
    "workStations": 70
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696176df035bafd432fbe",
    "roomNr": 3,
    "ratings": [
      9,
      1,
      5,
      8
    ],
    "steet": "Harwood Place",
    "name": "Papricut",
    "location": "Walker",
    "workStations": 40
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617135c88c7f64bd2f2",
    "roomNr": 5,
    "ratings": [
      2,
      10,
      6,
      2,
      9,
      3,
      1,
      10
    ],
    "steet": "Ocean Court",
    "name": "Digitalus",
    "location": "Shindler",
    "workStations": 118,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617dba492e502361ac9",
    "roomNr": 2,
    "ratings": [
      2,
      6,
      4,
      4,
      8,
      2,
      8,
      5,
      10,
      6
    ],
    "steet": "Meserole Street",
    "name": "Otherside",
    "location": "Lemoyne",
    "workStations": 42
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617e2858e24b2aa9121",
    "roomNr": 4,
    "ratings": [
      8,
      10,
      1,
      8,
      3,
      2,
      10,
      10
    ],
    "steet": "Beaumont Street",
    "name": "Otherway",
    "location": "Veguita",
    "workStations": 141,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179a584f72bccd65c1",
    "roomNr": 1,
    "ratings": [
      3,
      5,
      2
    ],
    "steet": "Scholes Street",
    "name": "Amril",
    "location": "Lisco",
    "workStations": 164,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961712d4d57b8fcf2bb2",
    "roomNr": 6,
    "ratings": [
      4,
      6,
      9,
      8,
      7,
      2,
      1,
      9,
      5,
      5
    ],
    "steet": "Jerome Street",
    "name": "Vetron",
    "location": "Fannett",
    "workStations": 85
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617344b2a16c7716d61",
    "roomNr": 12,
    "ratings": [
      8,
      8,
      4,
      2,
      5,
      6
    ],
    "steet": "Richmond Street",
    "name": "Ecratic",
    "location": "Cochranville",
    "workStations": 42
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178a8faeb8e65f0f6e",
    "roomNr": 5,
    "ratings": [
      6,
      1,
      4
    ],
    "steet": "Bayview Avenue",
    "name": "Sealoud",
    "location": "Tivoli",
    "workStations": 94
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696171e580ae96ab7c016",
    "roomNr": 2,
    "ratings": [
      3,
      9,
      5
    ],
    "steet": "Ridgewood Avenue",
    "name": "Nixelt",
    "location": "Singer",
    "workStations": 64
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696174c93bd85209621d1",
    "roomNr": 5,
    "ratings": [
      4,
      10,
      2,
      5,
      4,
      2,
      7,
      6
    ],
    "steet": "Harway Avenue",
    "name": "Techmania",
    "location": "Yorklyn",
    "workStations": 156,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961756eb9203d27fbe4b",
    "roomNr": 9,
    "ratings": [
      10,
      1,
      8,
      9,
      8,
      6,
      9,
      6,
      6
    ],
    "steet": "McClancy Place",
    "name": "Rugstars",
    "location": "Rose",
    "workStations": 79
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617528d8360d9f62e39",
    "roomNr": 3,
    "ratings": [
      10,
      8
    ],
    "steet": "Prescott Place",
    "name": "Netbook",
    "location": "Condon",
    "workStations": 161,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179bbf843e35aedbca",
    "roomNr": 9,
    "ratings": [
      2,
      10,
      5,
      5
    ],
    "steet": "Hubbard Street",
    "name": "Geekular",
    "location": "Century",
    "workStations": 74
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617e5ccb6b2167ad31b",
    "roomNr": 12,
    "ratings": [
      9,
      7,
      1,
      1,
      8
    ],
    "steet": "Navy Street",
    "name": "Biflex",
    "location": "Muir",
    "workStations": 151,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175b9220d0c35bc67c",
    "roomNr": 10,
    "ratings": [
      3
    ],
    "steet": "Kingston Avenue",
    "name": "Syntac",
    "location": "Marshall",
    "workStations": 109,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696174a3cb22cfcae34f8",
    "roomNr": 10,
    "ratings": [
      5,
      7,
      2,
      2,
      7,
      4,
      4
    ],
    "steet": "Bartlett Street",
    "name": "Pholio",
    "location": "Zarephath",
    "workStations": 100,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e4e136763a631d4e",
    "roomNr": 10,
    "ratings": [
      10
    ],
    "steet": "Just Court",
    "name": "Genmy",
    "location": "Gerber",
    "workStations": 32
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696173ebf63635ffc25a6",
    "roomNr": 5,
    "ratings": [
      4,
      1
    ],
    "steet": "Duffield Street",
    "name": "Datacator",
    "location": "Barrelville",
    "workStations": 179,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175fdf570c1ee412b4",
    "roomNr": 1,
    "ratings": [
      5,
      2
    ],
    "steet": "Williams Avenue",
    "name": "Bovis",
    "location": "Springville",
    "workStations": 41
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f20e8a30df503488",
    "roomNr": 7,
    "ratings": [
      6,
      2,
      2,
      9,
      9,
      4,
      9,
      6,
      8,
      2
    ],
    "steet": "Forest Place",
    "name": "Singavera",
    "location": "Imperial",
    "workStations": 50
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696177987fc68a05accff",
    "roomNr": 5,
    "ratings": [
      1,
      5,
      2,
      5
    ],
    "steet": "Oak Street",
    "name": "Nurplex",
    "location": "Limestone",
    "workStations": 41
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961708b24d4cfe01332a",
    "roomNr": 8,
    "ratings": [
      10,
      5,
      10,
      7,
      7,
      7,
      1,
      2
    ],
    "steet": "Micieli Place",
    "name": "Blurrybus",
    "location": "Barronett",
    "workStations": 183,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617368614b106e0602c",
    "roomNr": 4,
    "ratings": [
      8,
      4,
      4,
      8,
      4,
      1,
      3,
      3
    ],
    "steet": "Cooper Street",
    "name": "Zepitope",
    "location": "Conway",
    "workStations": 91
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617fb24813ff9e2a5e1",
    "roomNr": 3,
    "ratings": [
      3,
      2
    ],
    "steet": "Gilmore Court",
    "name": "Niquent",
    "location": "Islandia",
    "workStations": 34
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617b54c6afc859e782e",
    "roomNr": 9,
    "ratings": [
      7,
      9
    ],
    "steet": "Portal Street",
    "name": "Repetwire",
    "location": "Bendon",
    "workStations": 176,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696170b8f2a95e750fd85",
    "roomNr": 11,
    "ratings": [
      1,
      10,
      7,
      8,
      9,
      10,
      2
    ],
    "steet": "Desmond Court",
    "name": "Proflex",
    "location": "Frizzleburg",
    "workStations": 23
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696175f5713bcc3f45b11",
    "roomNr": 8,
    "ratings": [
      5,
      6,
      8,
      9,
      4,
      8
    ],
    "steet": "Huron Street",
    "name": "Circum",
    "location": "Brenton",
    "workStations": 86
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961788e337baaa3807d6",
    "roomNr": 10,
    "ratings": [
      7,
      6,
      8
    ],
    "steet": "Bond Street",
    "name": "Lexicondo",
    "location": "Baden",
    "workStations": 182,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696177e6e69a7a9387262",
    "roomNr": 5,
    "ratings": [
      2,
      10
    ],
    "steet": "Duryea Court",
    "name": "Tubalum",
    "location": "Suitland",
    "workStations": 178,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696172e562fb72fe57677",
    "roomNr": 7,
    "ratings": [
      5,
      3,
      8,
      4,
      10,
      10
    ],
    "steet": "Randolph Street",
    "name": "Polaria",
    "location": "Linwood",
    "workStations": 66
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961769e352c70570d13c",
    "roomNr": 3,
    "ratings": [
      1,
      3,
      5,
      9,
      6,
      3,
      9,
      2
    ],
    "steet": "Everit Street",
    "name": "Lingoage",
    "location": "Bordelonville",
    "workStations": 66
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617a57a46927f54ec80",
    "roomNr": 7,
    "ratings": [
      1,
      3,
      8,
      4,
      8,
      10,
      10
    ],
    "steet": "Williams Place",
    "name": "Furnafix",
    "location": "Northchase",
    "workStations": 188,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696171a098ea3b0b354dd",
    "roomNr": 8,
    "ratings": [
      3,
      8,
      7,
      6,
      4,
      6,
      6,
      8,
      7
    ],
    "steet": "Elmwood Avenue",
    "name": "Recognia",
    "location": "Delshire",
    "workStations": 146,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617bf7aed7d566a7b2d",
    "roomNr": 2,
    "ratings": [
      10,
      8,
      8,
      2,
      2,
      9,
      1,
      1
    ],
    "steet": "Stillwell Avenue",
    "name": "Myopium",
    "location": "Cutter",
    "workStations": 41
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617447ce83f70783f3a",
    "roomNr": 3,
    "ratings": [
      5
    ],
    "steet": "Baltic Street",
    "name": "Comvene",
    "location": "Tibbie",
    "workStations": 185,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617c81be38100332f50",
    "roomNr": 9,
    "ratings": [
      2,
      10,
      3,
      7,
      7,
      8,
      9,
      2,
      2,
      5
    ],
    "steet": "Heyward Street",
    "name": "Moltonic",
    "location": "Vincent",
    "workStations": 136,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617f83d4a726bffccf9",
    "roomNr": 7,
    "ratings": [
      5,
      4
    ],
    "steet": "Cass Place",
    "name": "Namebox",
    "location": "Kapowsin",
    "workStations": 58
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696175a72b7bd7665f70b",
    "roomNr": 9,
    "ratings": [
      3,
      10,
      9,
      9,
      5,
      7,
      10,
      2,
      5
    ],
    "steet": "Cobek Court",
    "name": "Zoinage",
    "location": "Sisquoc",
    "workStations": 47
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617b51b3a2d07a90f90",
    "roomNr": 10,
    "ratings": [
      8,
      4,
      1,
      3,
      6
    ],
    "steet": "Maple Street",
    "name": "Comtours",
    "location": "Sehili",
    "workStations": 30
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696179dd6f1a87902675c",
    "roomNr": 10,
    "ratings": [
      3,
      9,
      4,
      2,
      8,
      8,
      5,
      3,
      6
    ],
    "steet": "Canda Avenue",
    "name": "Photobin",
    "location": "Helen",
    "workStations": 100,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696178249b66c01fc71ed",
    "roomNr": 5,
    "ratings": [
      1
    ],
    "steet": "Moultrie Street",
    "name": "Zomboid",
    "location": "Greenbush",
    "workStations": 68
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696172ba2b341e641b436",
    "roomNr": 9,
    "ratings": [
      8,
      10,
      3
    ],
    "steet": "Vandam Street",
    "name": "Neocent",
    "location": "Trail",
    "workStations": 191,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179a64814a0fd9c113",
    "roomNr": 3,
    "ratings": [
      5,
      9,
      3,
      7,
      5,
      6
    ],
    "steet": "Locust Avenue",
    "name": "Genmex",
    "location": "Rossmore",
    "workStations": 105,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961781d9b6bb5d654e63",
    "roomNr": 4,
    "ratings": [
      2,
      10,
      1,
      6,
      10
    ],
    "steet": "Hoyts Lane",
    "name": "Malathion",
    "location": "Farmington",
    "workStations": 83
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961714aced9f0debf07e",
    "roomNr": 10,
    "ratings": [
      10,
      9,
      5,
      6,
      8,
      10,
      6
    ],
    "steet": "Ralph Avenue",
    "name": "Visalia",
    "location": "Gouglersville",
    "workStations": 123,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ab2bcc7e9d0eca1c",
    "roomNr": 7,
    "ratings": [
      7,
      9
    ],
    "steet": "Gotham Avenue",
    "name": "Entroflex",
    "location": "Cowiche",
    "workStations": 152,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696174c11c4b4ad352cd5",
    "roomNr": 5,
    "ratings": [
      5,
      10,
      10,
      3,
      9
    ],
    "steet": "Times Placez",
    "name": "Zytrax",
    "location": "Sedley",
    "workStations": 72
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617caeaaf4cf2fb4be7",
    "roomNr": 8,
    "ratings": [
      2,
      5,
      10,
      10,
      4
    ],
    "steet": "Victor Road",
    "name": "Pulze",
    "location": "Hendersonville",
    "workStations": 86
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617ad267beef99485ab",
    "roomNr": 11,
    "ratings": [
      10
    ],
    "steet": "Crown Street",
    "name": "Aquacine",
    "location": "Floris",
    "workStations": 86
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617431c64c7a6334292",
    "roomNr": 10,
    "ratings": [
      10,
      6,
      5,
      3
    ],
    "steet": "Chauncey Street",
    "name": "Bitrex",
    "location": "Moquino",
    "workStations": 81
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f33698e73fb82521",
    "roomNr": 8,
    "ratings": [
      3,
      3,
      2,
      7,
      1
    ],
    "steet": "Seacoast Terrace",
    "name": "Flumbo",
    "location": "Lutsen",
    "workStations": 87
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617b1b90ccd802973ba",
    "roomNr": 2,
    "ratings": [
      8,
      3,
      5,
      6
    ],
    "steet": "Albee Square",
    "name": "Cujo",
    "location": "Riceville",
    "workStations": 17
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617c2ef2879192135c0",
    "roomNr": 11,
    "ratings": [
      2,
      5,
      4,
      7,
      3,
      3,
      10
    ],
    "steet": "Seigel Street",
    "name": "Accidency",
    "location": "Leeper",
    "workStations": 71
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617caddf3966009e753",
    "roomNr": 7,
    "ratings": [
      3,
      3,
      1,
      1
    ],
    "steet": "Summit Street",
    "name": "Andryx",
    "location": "Sexton",
    "workStations": 155,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179b72b1357921ab3d",
    "roomNr": 2,
    "ratings": [
      6,
      5,
      10,
      7,
      9,
      10,
      5,
      8,
      8,
      4
    ],
    "steet": "College Place",
    "name": "Zyple",
    "location": "Nogal",
    "workStations": 158,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175dd45e2b033756a6",
    "roomNr": 8,
    "ratings": [
      7,
      6,
      7,
      5,
      3
    ],
    "steet": "Pineapple Street",
    "name": "Ecstasia",
    "location": "Kidder",
    "workStations": 24
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f7709986f0448d9a",
    "roomNr": 9,
    "ratings": [
      2,
      2,
      4,
      9,
      8,
      9,
      2,
      4,
      8,
      5
    ],
    "steet": "Vanderbilt Street",
    "name": "Glukgluk",
    "location": "Cucumber",
    "workStations": 195,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d7d5bf67646228d9",
    "roomNr": 12,
    "ratings": [
      6
    ],
    "steet": "Bainbridge Street",
    "name": "Zytrek",
    "location": "Rosedale",
    "workStations": 44
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696176ea6b56e99b72ac2",
    "roomNr": 1,
    "ratings": [
      4,
      9,
      3,
      7,
      2,
      4
    ],
    "steet": "Elizabeth Place",
    "name": "Tersanki",
    "location": "Bellamy",
    "workStations": 84
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617ca3db12cc6ecc0bd",
    "roomNr": 11,
    "ratings": [
      4,
      4,
      1,
      6,
      7,
      4,
      10,
      3,
      8
    ],
    "steet": "Newport Street",
    "name": "Songlines",
    "location": "Carrizo",
    "workStations": 57
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f64dacf400befb35",
    "roomNr": 4,
    "ratings": [
      3,
      5,
      3,
      5,
      2,
      2,
      5
    ],
    "steet": "Highland Place",
    "name": "Indexia",
    "location": "Fredericktown",
    "workStations": 161,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ef3798033966bac5",
    "roomNr": 10,
    "ratings": [
      9,
      1,
      4,
      2,
      8
    ],
    "steet": "Dooley Street",
    "name": "Dragbot",
    "location": "Hillsboro",
    "workStations": 84
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617d8eddb7dfde9e38e",
    "roomNr": 2,
    "ratings": [
      4
    ],
    "steet": "Gunnison Court",
    "name": "Acium",
    "location": "Edmund",
    "workStations": 57
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617372a81af325bfe9a",
    "roomNr": 1,
    "ratings": [
      8,
      3,
      4,
      5,
      5,
      4,
      2,
      7,
      9,
      5
    ],
    "steet": "Lynch Street",
    "name": "Zensus",
    "location": "Wikieup",
    "workStations": 65
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961748e992adf63d649c",
    "roomNr": 12,
    "ratings": [
      4,
      5,
      5,
      7,
      4,
      6,
      6
    ],
    "steet": "Metropolitan Avenue",
    "name": "Orbixtar",
    "location": "Hardyville",
    "workStations": 164,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175579d7be0cae7208",
    "roomNr": 6,
    "ratings": [
      5,
      3,
      6,
      1,
      2,
      2
    ],
    "steet": "National Drive",
    "name": "Teraprene",
    "location": "Dubois",
    "workStations": 161,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e4a92c928a4511cf",
    "roomNr": 4,
    "ratings": [
      3
    ],
    "steet": "Powell Street",
    "name": "Exiand",
    "location": "Gorham",
    "workStations": 187,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617db802c22eac723c1",
    "roomNr": 6,
    "ratings": [
      1,
      6,
      2,
      10,
      1,
      9,
      4,
      1
    ],
    "steet": "Stryker Street",
    "name": "Squish",
    "location": "Stollings",
    "workStations": 141,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617cbd823c432b8ce93",
    "roomNr": 3,
    "ratings": [
      9,
      1
    ],
    "steet": "Gerritsen Avenue",
    "name": "Rodeocean",
    "location": "Summerset",
    "workStations": 111,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617f4bf32b700bf4e6a",
    "roomNr": 9,
    "ratings": [
      6,
      2,
      4,
      9,
      10,
      7,
      10,
      2,
      9
    ],
    "steet": "Crystal Street",
    "name": "Anarco",
    "location": "Bluffview",
    "workStations": 179,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e31159c0ddaa05ef",
    "roomNr": 12,
    "ratings": [
      9,
      2,
      7
    ],
    "steet": "Kings Hwy",
    "name": "Zillan",
    "location": "Cliffside",
    "workStations": 150,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617f6bf9cfc9ede345b",
    "roomNr": 12,
    "ratings": [
      5,
      8,
      3,
      1,
      1,
      9,
      3,
      3,
      2
    ],
    "steet": "Beaver Street",
    "name": "Xylar",
    "location": "Nipinnawasee",
    "workStations": 155,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961795cb6ef80d1314c5",
    "roomNr": 10,
    "ratings": [
      3,
      8,
      10,
      1,
      5,
      5,
      9,
      4
    ],
    "steet": "Furman Street",
    "name": "Ohmnet",
    "location": "Why",
    "workStations": 200,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b6ad581d07618f70",
    "roomNr": 9,
    "ratings": [
      10,
      1,
      10,
      7,
      3,
      9,
      10,
      3,
      4
    ],
    "steet": "Fair Street",
    "name": "Blanet",
    "location": "Dale",
    "workStations": 24
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961779234aae3a0e331c",
    "roomNr": 10,
    "ratings": [
      5,
      3,
      3,
      4,
      10
    ],
    "steet": "Dorchester Road",
    "name": "Metroz",
    "location": "Newkirk",
    "workStations": 35
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696170977158d87558cbc",
    "roomNr": 3,
    "ratings": [
      10,
      10,
      10,
      7,
      3,
      4
    ],
    "steet": "Hamilton Avenue",
    "name": "Zillanet",
    "location": "Lumberton",
    "workStations": 171,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961797499e7778c40550",
    "roomNr": 6,
    "ratings": [
      1,
      8,
      3,
      10,
      6
    ],
    "steet": "Estate Road",
    "name": "Opportech",
    "location": "Lawrence",
    "workStations": 108,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a2308305d7d0f45c",
    "roomNr": 5,
    "ratings": [
      10,
      6,
      1,
      9,
      7,
      10
    ],
    "steet": "Maujer Street",
    "name": "Centrexin",
    "location": "Cetronia",
    "workStations": 166,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d007677b8e03bc81",
    "roomNr": 10,
    "ratings": [
      10,
      2,
      8
    ],
    "steet": "Adler Place",
    "name": "Cubicide",
    "location": "Rockingham",
    "workStations": 112,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617bdb04b66ed0da003",
    "roomNr": 8,
    "ratings": [
      2,
      5,
      9,
      6,
      5,
      2,
      4,
      2
    ],
    "steet": "Cadman Plaza",
    "name": "Springbee",
    "location": "Riviera",
    "workStations": 191,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961733341876572ee2b5",
    "roomNr": 12,
    "ratings": [
      10,
      9,
      9,
      2,
      2,
      2,
      10,
      5,
      10,
      7
    ],
    "steet": "Lewis Avenue",
    "name": "Mantrix",
    "location": "Dodge",
    "workStations": 104,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696171ddd6e04c6d374c0",
    "roomNr": 6,
    "ratings": [
      10,
      2,
      2,
      10,
      6,
      3,
      4,
      6
    ],
    "steet": "Howard Place",
    "name": "Plexia",
    "location": "Floriston",
    "workStations": 188,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617986216905a797353",
    "roomNr": 10,
    "ratings": [
      3,
      10,
      2,
      1
    ],
    "steet": "Ludlam Place",
    "name": "Roughies",
    "location": "Trinway",
    "workStations": 105,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961774245e8845808b4e",
    "roomNr": 11,
    "ratings": [
      8,
      1,
      8
    ],
    "steet": "Halleck Street",
    "name": "Medifax",
    "location": "Lynn",
    "workStations": 109,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696175c8178b2c403cff5",
    "roomNr": 9,
    "ratings": [
      5,
      8,
      2
    ],
    "steet": "Linden Street",
    "name": "Ebidco",
    "location": "Waterford",
    "workStations": 45
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178a9ddfb3b9dc56d1",
    "roomNr": 10,
    "ratings": [
      10,
      1,
      4,
      10,
      7,
      8,
      7,
      1,
      2
    ],
    "steet": "Evergreen Avenue",
    "name": "Bisba",
    "location": "Bennett",
    "workStations": 128,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617fd3608ea8f5e5309",
    "roomNr": 2,
    "ratings": [
      1,
      9,
      5,
      9,
      2,
      3,
      9,
      1
    ],
    "steet": "Bath Avenue",
    "name": "Voratak",
    "location": "Yogaville",
    "workStations": 191,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617fe16da2e28253011",
    "roomNr": 11,
    "ratings": [
      2,
      9,
      8,
      10,
      7,
      9,
      8,
      9
    ],
    "steet": "Pioneer Street",
    "name": "Dyno",
    "location": "Coral",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696170c4222c6d3f87366",
    "roomNr": 2,
    "ratings": [
      5,
      3,
      7,
      8,
      8,
      5,
      1,
      9
    ],
    "steet": "Lefferts Place",
    "name": "Omatom",
    "location": "Coldiron",
    "workStations": 121,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617885f068063302902",
    "roomNr": 4,
    "ratings": [
      10,
      9,
      3,
      2,
      3,
      8
    ],
    "steet": "Wythe Place",
    "name": "Memora",
    "location": "Dellview",
    "workStations": 170,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d59f02663771ce70",
    "roomNr": 5,
    "ratings": [
      4
    ],
    "steet": "Monument Walk",
    "name": "Xleen",
    "location": "Waterloo",
    "workStations": 93
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "6346961787dfe5ab907c9cf0",
    "roomNr": 6,
    "ratings": [
      3,
      3,
      8,
      6
    ],
    "steet": "Autumn Avenue",
    "name": "Prosely",
    "location": "Belleview",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617da5efbb3a92ebb8e",
    "roomNr": 12,
    "ratings": [
      2,
      2
    ],
    "steet": "Amherst Street",
    "name": "Optyk",
    "location": "Osmond",
    "workStations": 116,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ae4ed898aa8d0f81",
    "roomNr": 10,
    "ratings": [
      7,
      1,
      6,
      9,
      5,
      10
    ],
    "steet": "Crooke Avenue",
    "name": "Sonique",
    "location": "Longbranch",
    "workStations": 121,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617582c2e63efc56059",
    "roomNr": 1,
    "ratings": [
      5,
      3,
      2
    ],
    "steet": "Havemeyer Street",
    "name": "Geostele",
    "location": "Loyalhanna",
    "workStations": 193,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696177d7bf6ada2fb6ec4",
    "roomNr": 11,
    "ratings": [
      8,
      5,
      9
    ],
    "steet": "Wilson Street",
    "name": "Xerex",
    "location": "Camino",
    "workStations": 144,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e7541394e8688f6b",
    "roomNr": 2,
    "ratings": [
      2,
      7,
      7,
      1,
      9,
      5,
      5,
      8
    ],
    "steet": "Grant Avenue",
    "name": "Enquility",
    "location": "Dixonville",
    "workStations": 161,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617deb1408c7a3686da",
    "roomNr": 9,
    "ratings": [
      1,
      10,
      2,
      1,
      9,
      5
    ],
    "steet": "Liberty Avenue",
    "name": "Geoform",
    "location": "Monument",
    "workStations": 170,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ed827aef39ac96b2",
    "roomNr": 2,
    "ratings": [
      3,
      6,
      5,
      7,
      4
    ],
    "steet": "Sumpter Street",
    "name": "Olympix",
    "location": "Boykin",
    "workStations": 107,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961737c5fb86e6131713",
    "roomNr": 9,
    "ratings": [
      5,
      10,
      3,
      2,
      4,
      1,
      7,
      5,
      4
    ],
    "steet": "Indiana Place",
    "name": "Slambda",
    "location": "Lookingglass",
    "workStations": 174,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696172438d11492b877ab",
    "roomNr": 2,
    "ratings": [
      7,
      2,
      2,
      7,
      3
    ],
    "steet": "Ruby Street",
    "name": "Cablam",
    "location": "Deltaville",
    "workStations": 130,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696176f1317f086911983",
    "roomNr": 8,
    "ratings": [
      3,
      10,
      4,
      1,
      1,
      10
    ],
    "steet": "Berriman Street",
    "name": "Remotion",
    "location": "Duryea",
    "workStations": 115,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696170d913ba648840b56",
    "roomNr": 12,
    "ratings": [
      10,
      4,
      2,
      9,
      7,
      5,
      6
    ],
    "steet": "Duryea Place",
    "name": "Medalert",
    "location": "Chamizal",
    "workStations": 139,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696176886a5e18c64c297",
    "roomNr": 2,
    "ratings": [
      9,
      6,
      7,
      2
    ],
    "steet": "Evans Street",
    "name": "Eplode",
    "location": "Cumminsville",
    "workStations": 53
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178ae9b034fa7155fe",
    "roomNr": 12,
    "ratings": [
      7,
      3
    ],
    "steet": "Clara Street",
    "name": "Renovize",
    "location": "Brownsville",
    "workStations": 179,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696172c00b96fd96dd499",
    "roomNr": 6,
    "ratings": [
      4,
      6,
      3,
      9,
      1,
      9,
      9,
      1
    ],
    "steet": "Chapel Street",
    "name": "Pyramis",
    "location": "Noxen",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696176cc13c4d55d4ec37",
    "roomNr": 8,
    "ratings": [
      10,
      8,
      7,
      1,
      7,
      3,
      5,
      6
    ],
    "steet": "Crosby Avenue",
    "name": "Boilcat",
    "location": "Verdi",
    "workStations": 89
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617bd3458560bef6c5a",
    "roomNr": 5,
    "ratings": [
      6,
      2,
      10,
      8,
      6,
      2,
      9,
      3,
      1,
      9
    ],
    "steet": "Kimball Street",
    "name": "Extro",
    "location": "Sims",
    "workStations": 125,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696171d8015d78a07850e",
    "roomNr": 8,
    "ratings": [
      9,
      7
    ],
    "steet": "Bills Place",
    "name": "Volax",
    "location": "Bancroft",
    "workStations": 114,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617614728b1e40f4e66",
    "roomNr": 11,
    "ratings": [
      7,
      8,
      7,
      7,
      2,
      2,
      8
    ],
    "steet": "Beadel Street",
    "name": "Viasia",
    "location": "Russellville",
    "workStations": 51
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617850d954ed1aaa560",
    "roomNr": 4,
    "ratings": [
      2,
      4,
      3,
      9,
      8,
      7,
      7,
      3
    ],
    "steet": "Jefferson Street",
    "name": "Chorizon",
    "location": "Castleton",
    "workStations": 103,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617560912195eb51f3d",
    "roomNr": 12,
    "ratings": [
      9
    ],
    "steet": "Lott Avenue",
    "name": "Qimonk",
    "location": "Bagtown",
    "workStations": 168,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617138725e57cba972a",
    "roomNr": 1,
    "ratings": [
      8,
      7,
      2,
      5,
      4,
      3,
      8,
      2,
      6,
      8
    ],
    "steet": "Doscher Street",
    "name": "Lotron",
    "location": "Harmon",
    "workStations": 42
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696172178b88be44e53d9",
    "roomNr": 2,
    "ratings": [
      8,
      9,
      10
    ],
    "steet": "Emmons Avenue",
    "name": "Zentry",
    "location": "Kenwood",
    "workStations": 198,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961767054a61eb0f39b8",
    "roomNr": 8,
    "ratings": [
      9,
      8,
      9,
      9,
      4
    ],
    "steet": "Chase Court",
    "name": "Comcubine",
    "location": "Datil",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696173b919625e8954a0a",
    "roomNr": 5,
    "ratings": [
      1
    ],
    "steet": "Lester Court",
    "name": "Zerbina",
    "location": "Whitestone",
    "workStations": 64
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617e129491cbc616e9d",
    "roomNr": 3,
    "ratings": [
      4,
      2,
      3,
      6,
      5
    ],
    "steet": "Danforth Street",
    "name": "Radiantix",
    "location": "Norwood",
    "workStations": 146,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e1d55d914f3ff2b9",
    "roomNr": 3,
    "ratings": [
      9,
      3,
      6,
      10,
      6,
      4,
      9
    ],
    "steet": "Borinquen Pl",
    "name": "Utara",
    "location": "Abrams",
    "workStations": 149,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ee25ed78384f6f8b",
    "roomNr": 10,
    "ratings": [
      2,
      4,
      9,
      5,
      5,
      8,
      7,
      2,
      7
    ],
    "steet": "Village Court",
    "name": "Acrodance",
    "location": "Durham",
    "workStations": 120,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696176a1da4a5ea53ac8d",
    "roomNr": 11,
    "ratings": [
      4,
      9,
      7,
      8,
      7,
      5
    ],
    "steet": "Brevoort Place",
    "name": "Liquidoc",
    "location": "Blue",
    "workStations": 82
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696170b5407692c387093",
    "roomNr": 5,
    "ratings": [
      2,
      1,
      2,
      1,
      8
    ],
    "steet": "Banker Street",
    "name": "Steeltab",
    "location": "Ferney",
    "workStations": 152,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d0b4ae788c96c241",
    "roomNr": 11,
    "ratings": [
      4,
      6,
      10
    ],
    "steet": "Newel Street",
    "name": "Imaginart",
    "location": "Neibert",
    "workStations": 44
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696170f819de130f212e9",
    "roomNr": 3,
    "ratings": [
      5
    ],
    "steet": "Jay Street",
    "name": "Schoolio",
    "location": "Muse",
    "workStations": 114,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961703470c677f8da257",
    "roomNr": 12,
    "ratings": [
      5
    ],
    "steet": "Douglass Street",
    "name": "Musanpoly",
    "location": "Bangor",
    "workStations": 139,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617367d763d34eff721",
    "roomNr": 10,
    "ratings": [
      10,
      1,
      8
    ],
    "steet": "Lewis Place",
    "name": "Pheast",
    "location": "Norfolk",
    "workStations": 139,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a8417972c8471c25",
    "roomNr": 4,
    "ratings": [
      10,
      5,
      6,
      10,
      3,
      10
    ],
    "steet": "Hamilton Walk",
    "name": "Gology",
    "location": "Ruffin",
    "workStations": 89
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617dc81a754eb473d5a",
    "roomNr": 5,
    "ratings": [
      1,
      10,
      6,
      1,
      8,
      8,
      2,
      7,
      8
    ],
    "steet": "Belmont Avenue",
    "name": "Elpro",
    "location": "Kempton",
    "workStations": 166,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696179bdc6ec1b46ee5bf",
    "roomNr": 7,
    "ratings": [
      6,
      8
    ],
    "steet": "Grace Court",
    "name": "Utarian",
    "location": "Stonybrook",
    "workStations": 173,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617bbdab7643028fdb6",
    "roomNr": 12,
    "ratings": [
      5,
      4,
      9,
      7,
      1,
      10,
      6,
      5,
      9,
      8
    ],
    "steet": "Gain Court",
    "name": "Premiant",
    "location": "Juntura",
    "workStations": 63
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178dcfd092c91c2927",
    "roomNr": 9,
    "ratings": [
      6,
      4,
      4
    ],
    "steet": "Greenpoint Avenue",
    "name": "Permadyne",
    "location": "Groveville",
    "workStations": 195,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696171cad5b98b0724c72",
    "roomNr": 11,
    "ratings": [
      10,
      6,
      10,
      5,
      10,
      10
    ],
    "steet": "Georgia Avenue",
    "name": "Xumonk",
    "location": "Roosevelt",
    "workStations": 198,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961777c6a44b09fe40cf",
    "roomNr": 12,
    "ratings": [
      9,
      4
    ],
    "steet": "Elliott Place",
    "name": "Zenolux",
    "location": "Williamson",
    "workStations": 62
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696174207e78f40e7dcbe",
    "roomNr": 7,
    "ratings": [
      1,
      4,
      6,
      4,
      6
    ],
    "steet": "Llama Court",
    "name": "Hairport",
    "location": "Day",
    "workStations": 81
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617b05f37bd55ab9de2",
    "roomNr": 8,
    "ratings": [
      4,
      1,
      1,
      1,
      3,
      4,
      7,
      5,
      1,
      7
    ],
    "steet": "Stockholm Street",
    "name": "Isosure",
    "location": "Garfield",
    "workStations": 84
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696178071b98cf80ff668",
    "roomNr": 8,
    "ratings": [
      1,
      9,
      9,
      1,
      7,
      2,
      2
    ],
    "steet": "Schweikerts Walk",
    "name": "Reversus",
    "location": "Sunnyside",
    "workStations": 125,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961756d29512fc5e6791",
    "roomNr": 8,
    "ratings": [
      6,
      4,
      1,
      7
    ],
    "steet": "Hornell Loop",
    "name": "Newcube",
    "location": "Holtville",
    "workStations": 54
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617c8718b1453502a8a",
    "roomNr": 3,
    "ratings": [
      1,
      7,
      4,
      1,
      6
    ],
    "steet": "Irving Street",
    "name": "Besto",
    "location": "Volta",
    "workStations": 112,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961790778d71209c114f",
    "roomNr": 6,
    "ratings": [
      8
    ],
    "steet": "Calyer Street",
    "name": "Calcu",
    "location": "Jenkinsville",
    "workStations": 170,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173dd68cd5d6ed133a",
    "roomNr": 10,
    "ratings": [
      2,
      5
    ],
    "steet": "Rapelye Street",
    "name": "Dancity",
    "location": "Lloyd",
    "workStations": 186,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617b5f89faf7d07940e",
    "roomNr": 6,
    "ratings": [
      2,
      4,
      6,
      2,
      9,
      3,
      2
    ],
    "steet": "Mill Lane",
    "name": "Sulfax",
    "location": "Mansfield",
    "workStations": 174,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617379c508ccf6e7f9f",
    "roomNr": 7,
    "ratings": [
      3,
      5,
      4
    ],
    "steet": "Kensington Street",
    "name": "Neurocell",
    "location": "Coventry",
    "workStations": 191,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173011802188a50e9b",
    "roomNr": 2,
    "ratings": [
      3,
      4,
      5,
      8
    ],
    "steet": "Middleton Street",
    "name": "Daido",
    "location": "Bannock",
    "workStations": 192,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696174e9ce21712435d3b",
    "roomNr": 1,
    "ratings": [
      8,
      1,
      1,
      6,
      6,
      1
    ],
    "steet": "Harman Street",
    "name": "Comtrek",
    "location": "Blodgett",
    "workStations": 173,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617c4265002f96b4514",
    "roomNr": 12,
    "ratings": [
      4,
      1,
      4
    ],
    "steet": "Nixon Court",
    "name": "Exoswitch",
    "location": "Masthope",
    "workStations": 169,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173f59379043add56b",
    "roomNr": 2,
    "ratings": [
      5,
      9,
      9,
      4,
      9,
      3,
      9,
      6,
      4
    ],
    "steet": "Brown Street",
    "name": "Eschoir",
    "location": "Lithium",
    "workStations": 86
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617f3136376c3ecea49",
    "roomNr": 5,
    "ratings": [
      6,
      2,
      1,
      6,
      6,
      8
    ],
    "steet": "Atlantic Avenue",
    "name": "Extremo",
    "location": "Sardis",
    "workStations": 150,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961758e2da7bcb34a52e",
    "roomNr": 10,
    "ratings": [
      5,
      5,
      7,
      6,
      5,
      2,
      4
    ],
    "steet": "Hunts Lane",
    "name": "Vixo",
    "location": "Golconda",
    "workStations": 127,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617ef99e7f27a770f12",
    "roomNr": 10,
    "ratings": [
      3,
      7,
      9,
      1,
      1,
      9,
      7,
      5,
      2
    ],
    "steet": "Alice Court",
    "name": "Signity",
    "location": "Vienna",
    "workStations": 109,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617e184b68c6830a7aa",
    "roomNr": 6,
    "ratings": [
      9,
      1,
      3
    ],
    "steet": "Sackman Street",
    "name": "Austex",
    "location": "Camas",
    "workStations": 146,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617d086181ae737969d",
    "roomNr": 4,
    "ratings": [
      4,
      3,
      3,
      5,
      5,
      4,
      5,
      6,
      8,
      4
    ],
    "steet": "Fleet Street",
    "name": "Dogtown",
    "location": "Rivereno",
    "workStations": 15
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696172492513736e78a5a",
    "roomNr": 9,
    "ratings": [
      4,
      2,
      1,
      9,
      4,
      1,
      10,
      2,
      3,
      7
    ],
    "steet": "Fleet Place",
    "name": "Songbird",
    "location": "Needmore",
    "workStations": 141,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617da19116fd2e0ef36",
    "roomNr": 7,
    "ratings": [
      6,
      1,
      4,
      5,
      7,
      9,
      2
    ],
    "steet": "Colonial Road",
    "name": "Fortean",
    "location": "Broadlands",
    "workStations": 121,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617a6095fff2d4fd08c",
    "roomNr": 12,
    "ratings": [
      1,
      8,
      3,
      8,
      10,
      4,
      10,
      2
    ],
    "steet": "Kenmore Terrace",
    "name": "Aeora",
    "location": "Grazierville",
    "workStations": 122,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696173cd965e4e1fe2271",
    "roomNr": 7,
    "ratings": [
      5,
      4,
      9,
      5,
      1,
      6,
      4,
      9,
      9,
      2
    ],
    "steet": "Friel Place",
    "name": "Cormoran",
    "location": "Fedora",
    "workStations": 200,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "63469617f2aa6caecbff583b",
    "roomNr": 9,
    "ratings": [
      8,
      4,
      5,
      3,
      4,
      2,
      3,
      4,
      3
    ],
    "steet": "Kermit Place",
    "name": "Xurban",
    "location": "Hondah",
    "workStations": 22
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "63469617ced658e2072ca212",
    "roomNr": 11,
    "ratings": [
      4,
      5,
      8,
      10,
      10,
      7,
      2
    ],
    "steet": "Jamison Lane",
    "name": "Kineticut",
    "location": "Hayes",
    "workStations": 134,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961731245298d86510d7",
    "roomNr": 9,
    "ratings": [
      4,
      5,
      10,
      10,
      1,
      10,
      3,
      9,
      10,
      3
    ],
    "steet": "Forrest Street",
    "name": "Zilencio",
    "location": "Veyo",
    "workStations": 27
,
"image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"  },
  {
    "_id": "634696174d3c5b5819165710",
    "roomNr": 2,
    "ratings": [
      6,
      8,
      10,
      8,
      9
    ],
    "steet": "Murdock Court",
    "name": "Skyplex",
    "location": "Delco",
    "workStations": 168,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961722a123a5a0bbf5a6",
    "roomNr": 6,
    "ratings": [
      2,
      10,
      1,
      6,
      2
    ],
    "steet": "Regent Place",
    "name": "Autograte",
    "location": "Coleville",
    "workStations": 196,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "634696178f19fc3aac2d6a7f",
    "roomNr": 6,
    "ratings": [
      6,
      8,
      9,
      2,
      7,
      9,
      6
    ],
    "steet": "Dahill Road",
    "name": "Lunchpad",
    "location": "Colton",
    "workStations": 191,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346961785538d662f10ea1a",
    "roomNr": 10,
    "ratings": [
      5,
      3,
      9,
      3,
      2,
      10,
      10
    ],
    "steet": "Dupont Street",
    "name": "Boink",
    "location": "Cherokee",
    "workStations": 172,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  }*/
]

const loved = [
  {
    "_id": "6346943d564da2d1e57d8f9d",
    "roomNr": 12,
    "ratings": [
      2,
      7,
      9,
      10,
      10
    ],
    "steet": "Dupont Street",
    "name": "Zillacom",
    "location": "Nicholson",
    "workStations": 101,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/07/Sitio_Setubal__0299.jpg"
  },
  {
    "_id": "6346943df8dee3bd72901eb9",
    "roomNr": 9,
    "ratings": [
      8
    ],
    "steet": "Turnbull Avenue",
    "name": "Medalert",
    "location": "Ryderwood",
    "workStations": 131,
    "image": "https://sitio.pt/cms/wp-content/uploads/2021/02/DedicatedDesk_Visconde.jpg"
  },
  {
    "_id": "6346943da5917838d5faf54e",
    "roomNr": 12,
    "ratings": [
      9,
      4,
      3,
      3,
      3,
      5,
      1,
      1,
      4
    ],
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
    "ratings": [
      7,
      8,
      10
    ],
    "steet": "Hubbard Street",
    "name": "Omatom",
    "location": "Gadsden",
    "workStations": 70
  },
  {
    "_id": "6346944a2a952fe46fe119e2",
    "roomNr": 10,
    "ratings": [
      4,
      5,
      9,
      10,
      9,
      3,
      3
    ],
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
  const [properties, setProperties] = useState(espacinhosFofinhosLolOkTabem)

  /*function carregarDados() {
    // fgdnjkrsdfhl
      fetch("/nasa/data-base", {
      method: "DELETE"
    })
    // with tha solution
    // sav to the state
  }

  useEffect(() => {
    carregarDados()
  }, [])*/
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
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
