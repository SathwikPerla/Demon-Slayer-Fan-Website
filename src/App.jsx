import { useState, useRef } from "react";
import AkazaTheme from "./music/akazas_theme.mp3";
import "./App.css";

function Component({ message, onPlayMusic }) {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  function handleEvent() {
    setCount(count + 1);
    if (count + 1 === 3) {
      onPlayMusic();
    }
  }
  // alert(message)
  return (
    <>
      <button onClick={handleEvent}>You like this Arc {count} times</button>
    </>
  );
}

const users = [
  {
    firstName: "Season 1: Kimetsu no Yaiba ",
    lastName: "",
    imageUrl:
      "https://wallpapers.com/images/featured/demon-slayer-4k-pictures-5v5lz47uso2tx2kr.jpg",
    imageHeight: 450,
    imageWidth: 750,
    isMovie: false,
    demons: "shifting drum‐demon, Rui (Lower Moon 5)",
    breathingStyle: "Beast Breathing...🐗",
    music: AkazaTheme,
  },

  {
    firstName: "Movie 1: Mugen Train ",
    lastName: "",
    imageUrl: "https://m.media-amazon.com/images/I/719v7ckok7L.jpg",
    imageHeight: 450,
    imageWidth: 680,
    isMovie: true,
    demons: "Enmu (Lower Rank One), Akaza (Upper Rank Three)",
    breathingStyle: "Flame Breathing...🔥",
    music: AkazaTheme,
  },

  {
    firstName: "Season 2: Entertainment District ",
    lastName: "",
    imageUrl:
      "https://geek-network.com/wp-content/uploads/2021/09/FAI7EuZUcAYM5nC-edited.jpg",
    imageHeight: 450,
    imageWidth: 680,
    isMovie: false,
    demons: "Gyutaro and Daki (Upper Rank Six)",
    breathingStyle: "Sound Breathing...🔊",
    music: AkazaTheme,
  },

  {
    firstName: "Season 3: Swordsmith Village ",
    lastName: "",
    imageUrl:
      "https://wallpapers.com/images/hd/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q.jpg",
    imageHeight: 450,
    imageWidth: 690,
    isMovie: false,
    demons: "Upper Rank Four & Five demons appear (Hantengu and Gyokko)",
    breathingStyle: "Mist Breathing 💦 , Love Breathing...💖",
    music: AkazaTheme,
  },
  {
    firstName: "Season 4: Hashira Training Arc ",
    lastName: "",
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/gyomei-tanjiro.jpeg?w=1600&h=900&fit=crop",
    imageHeight: 450,
    imageWidth: 750,
    isMovie: false,
    demons: "Not many major Upper Kizuki",
    breathingStyle:
      "Stone Breathing 🗿 and Serpent Breathing 🐍 and Wind Breathing...💨",
    music: AkazaTheme,
  },

  {
    firstName: "Movie 2: Infinity Castle ",
    lastName: "",
    imageUrl:
      "https://4kwallpapers.com/images/wallpapers/demon-slayer-5120x2880-22988.jpg",
    imageHeight: 450,
    imageWidth: 700,
    isMovie: true,
    demons:
      "Muzan Kibutsuji, Upper Moon One (Kokushibo), Upper Moon Two (Doma), Akaza, Nakime",
    breathingStyle: "Water Breathing 🌊 and Insect Breathing...🦋",
    music: AkazaTheme,
  },
  {
    firstName: "Movie 3: Sunrise Countdown ",
    lastName: "",
    imageUrl: "https://i.ytimg.com/vi/4Tvmi6tAKGw/maxresdefault.jpg",
    imageHeight: 450,
    imageWidth: 750,
    isMovie: true,
    demons: "Muzan is central. Also “Demonified Tanjiro” appears",
    breathingStyle: "Muzan Breathing...😂 🧛🏼 🕺🏿 ",
    music: AkazaTheme,
  },
];

export default function MyApp() {
  const audioRef = useRef(null);

  function playMusic() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }
  return (
    <div className="container">
      <h1>Demon Slayer 🕺🏿 Fan Website</h1>
      <audio ref={audioRef} src={AkazaTheme} style={{ display: "none" }} />
      {users.length === 0 ? (
        <h3>No Arcs exist Please gtfoh</h3>
      ) : (
        users.map((user) => (
          <div key={user.firstName}>
            <h1
              className="heading"
              style={{ color: user.isMovie ? "#ff6600ff" : "#ff1744" }}
            >
              {user.firstName + user.lastName}
            </h1>
            <img
              src={user.imageUrl}
              className="image"
              alt={"photo of " + user.firstName + user.lastName}
              style={{ height: user.imageHeight, width: user.imageWidth }}
            />
            <h3 style={{}}>Demons Encountered: {user.demons}</h3>
            <Component
              message={` ${user.breathingStyle}`}
              onPlayMusic={playMusic}
            />
            <p>Click the button as many times as Akaza's rank for a suprise</p>
          </div>
        ))
      )}
    </div>
  );
}
