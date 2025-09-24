import "./App.css";

function Component() {
  return <button>click me man</button>;
}

const users = [
  {
    firstName: "Season 1: Kimetsu no Yaiba ",
    lastName: "",
    imageUrl:
      "https://images.steamusercontent.com/ugc/1768206388761433147/90516E21452574879A2768FCF0DCDE0B5CFBF4D2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    imageHeight: 450,
    imageWidth: 750,
    isMovie: false,
    demons: "shifting drum‐demon, Rui (Lower Moon 5)",
  },

  {
    firstName: "Movie 1: Mugen Train ",
    lastName: "",
    imageUrl: "https://m.media-amazon.com/images/I/719v7ckok7L.jpg",
    imageHeight: 450,
    imageWidth: 680,
    isMovie: true,
    demons: "Enmu (Lower Rank One), Akaza (Upper Rank Three)",
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
  },
  {
    firstName: "Movie 3: Sunrise Countdown ",
    lastName: "",
    imageUrl: "https://i.ytimg.com/vi/4Tvmi6tAKGw/maxresdefault.jpg",
    imageHeight: 450,
    imageWidth: 750,
    isMovie: true,
    demons: "Muzan is central. Also “Demonified Tanjiro” appears",
  },
];

export default function MyApp() {
  return (
    <div className="container">
        <h1>Demon Slayer Fan Website</h1>
      {users.length === 0 ? (
        <h3>No Arcs exist Please gtfoh</h3>
      ) : (
        users.map((user) => (
          <div key={user.firstName}>
            <h1
              className="heading"
              style={{ color: user.isMovie ? "#ff6600ff"  : "#ff1744" }}
            >
              {user.firstName + user.lastName}
            </h1>
            <img
              src={user.imageUrl}
              className="image"
              alt={"photo of " + user.firstName + user.lastName}
              style={{ height: user.imageHeight, width: user.imageWidth }}
            />
            <h3>Demons Encountered:  {user.demons}</h3>
            <p>This is a test for multiple components</p>   
            <Component />
          </div>
        ))
      )}
    </div>
  );
}
