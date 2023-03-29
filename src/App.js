import { useState } from "react";
import "./styles.css";

const genreData = {
  Action_Adventure: [
    {
      name: "GTA 5",
      description:
        "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
      rating: "9/10"
    },
    {
      name: "Watch Dogs - Legion",
      description:
        "Watch Dogs: Legion is a 2020 action-adventure game developed by Ubisoft Toronto and published by Ubisoft.",
      rating: "7/10"
    },

    {
      name: "Red Dead Redemption 2",
      description:
        "The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.",
      rating: "9/10"
    }
  ],

  Racing: [
    {
      name: "Forza Horizon 5",
      description:
        "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title. ",
      rating: "9/10"
    },
    {
      name: "Need for speed payback",
      description:
        "Need for Speed Payback is a racing video game developed by Ghost Games and published by Electronic Arts for PlayStation 4, Windows, and Xbox One.",
      rating: "9/10"
    },

    {
      name: "The CREW 2",
      description:
        "The Crew 2 is a 2018 open world racing video game developed by Ubisoft Ivory Tower and published by Ubisoft for PlayStation 4, Windows, Xbox One, and Google Stadia.",
      rating: "8.5/10"
    }
  ],

  Battle_Royale: [
    {
      name: "PUBG",
      description:
        "PUBG: Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton. The game, which was inspired by the Japanese film",
      rating: "6/10"
    },
    {
      name: "Fortnite",
      description:
        "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay.",
      rating: "5.1/10"
    },

    {
      name: "Call of Duty Warzone 2.",
      description:
        "Call of Duty: Warzone 2.0 is a free-to-play battle royale video game developed by Infinity Ward and Raven Software for PlayStation 4, PlayStation 5, Windows, Xbox One.",
      rating: "5/10"
    }
  ]
};

var genreArray = Object.keys(genreData);

export default function App() {
  const [GenreSelect, setGenre] = useState("Action_Adventure");

  function clickHandler(item) {
    setGenre(item);
    // console.log(genreData[GenreSelect]);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        🎮 <span className="heading">Genre Explorer</span>
      </h1>
      <p>Checkout my favorite Video Games. Select a genre to get started</p>
      <div>
        {genreArray.map((item) => {
          return (
            <button onClick={() => clickHandler(item)} className="btn">
              {item}
            </button>
          );
        })}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {genreData[GenreSelect].map((genre) => (
            <li className="list-item">
              <div className="title">{genre.name}</div>
              <div className="description">{genre.description}</div>
              <div className="rating">{genre.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
