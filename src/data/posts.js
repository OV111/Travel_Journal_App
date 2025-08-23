import KyotoImage from "../assets/kyoto.jpg";
import SwissAlps from "../assets/swiss-alps.jpg";
import Bangkok from "../assets/bangkok.jpg";
import AmalfiCoast from "../assets/amalfiCoast.jpg";
import Marrakech from "../assets/marrakech.jpg";

export const initialPosts  = [
  {
    id: 1,
    title: "Exploring Kyoto’s Temples",
    location: "Kyoto, Japan",
    date: "2025-04-12",
    image: KyotoImage,
    shortDescription:
      "A serene walk through ancient temples and cherry blossom gardens.",
  },
  {
    id: 2,
    title: "Hiking the Swiss Alps",
    location: "Zermatt, Switzerland",
    date: "2025-06-20",
    image: SwissAlps,
    shortDescription:
      "An unforgettable trek with breathtaking mountain views and fresh alpine air.",
  },
  {
    id: 3,
    title: "Desert Adventure in Marrakech",
    location: "Marrakech, Morocco",
    date: "2025-03-03",
    image: Marrakech,
    shortDescription:
      "Camel rides, golden dunes, and a night under the starry desert sky.",
  },
  {
    id: 4,
    title: "Street Food Tour in Bangkok",
    location: "Bangkok, Thailand",
    date: "2025-01-15",
    image: Bangkok,
    shortDescription:
      "Sampling spicy noodles, sweet mango sticky rice, and sizzling satay skewers.",
  },
  {
    id: 5,
    title: "Road Trip Along the Amalfi Coast",
    location: "Amalfi, Italy",
    date: "2025-07-08",
    image: AmalfiCoast,
    shortDescription:
      "Coastal drives, colorful villages, and the best lemon gelato in the world.",
  },
];