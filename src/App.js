import "./styles.css";
import React, {
  useState
} from "react";

const gameLibrary = {
  OpenWorld: [{
      name: "Grand Theft Auto 5",
      metascore: "96"
    },
    {
      name: "Mafia 3",
      metascore: "68"
    },
    {
      name: "Assassin's Creed Valhalla",
      metascore: "84"
    },
    {
      name: "Days Gone",
      metascore: "76"

    },
     {
      name: "Ghost of Tsuhima",
      metascore: "83"
    }


  ],

  FPS: [{
      name: "Call of Duty : Vanguard",
      metascore: "73"
    },

    {
      name: "Battlefield 2042",
      metascore: "68"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("FPS");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return ( <
    div className = "App" >
    <
    h1 > GoodGames < /h1>  <
    p style = {
      {
        fontSize: "smaller"
      }
    } >
    Checkout my favorite games.Select a genre to get started <
    /p>

    <
    div > {
      Object.keys(gameLibrary).map((genre) => ( <
        button onClick = {
          () => genreClickHandler(genre)
        }
        style = {
          {
            cursor: "pointer",
            background: "#E5E7EB",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem",
            margin: "auto",
          }
        } > {
          genre
        } < /button>
      ))
    } < /div> <
    hr / >
    <
    div style = {
      {
        textAlign: "left"
      }
    } >
    <
    ul style = {
      {
        paddingInlineStart: "0"
      }
    } > {
      gameLibrary[selectedGenre].map((game) => (

        <
        li key = {
          game.name
        }
        style = {
          {
            listStyle: "none",
            padding: "1rem",
            border: "1px solid #D1D5DB",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem"
          }
        } > {
          " "
        } <
        div style = {
          {
            fontSize: "larger"
          }
        } > {
          game.name
        } <
        /div> 

        <
        div style = {
          {
            fontSize: "smaller"
          }
        } > {
          " "
        }
        Metascore: {
          game.metascore
        } {
          " "
        } < /div>  < /
        li >
      ))
    } <
    /ul>  < /
    div > <
    /div>
  );
}