import React, { useState } from "react";
import Card from "./MovieCard";
import Img1 from "../conjuring.jpg";
import Img2 from "../it.jpg";
import Img3 from "../lotr.jpg";
import Img4 from "../matrix.jpg";
import Img5 from "../oceanseleven.jpg";
import Img6 from "../saw.jpg";
import Img7 from "../thenun.jpg";
import Img8 from "../us.png";
import Img9 from "../xmen.jpg";
import Img10 from "../thepursuitofhappyness.png";
import Img11 from "../irobot.jpg";
import Rating from "@material-ui/lab/Rating";
import AddMovie from "./addMovie/AddMovie";
function MovieList() {
  const [state, setState] = useState([
    {
      id: Math.random(),
      title: "The conjuring",
      img: Img1,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "It",
      img: Img2,
      rate: <Rating name="simple-controlled" value="3" />,
    },
    {
      id: Math.random(),
      title: "The lord of the rings",
      img: Img3,
      rate: <Rating name="simple-controlled" value={5} />,
    },
    {
      id: Math.random(),
      title: "The matrix",
      img: Img4,
      rate: <Rating name="simple-controlled" value={5} />,
    },
    {
      id: Math.random(),
      title: "Ocean's eleven",
      img: Img5,
      rate: <Rating name="simple-controlled" value={3} />,
    },
    {
      id: Math.random(),
      title: "Saw",
      img: Img6,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "The nun",
      img: Img7,
      rate: <Rating name="simple-controlled" value={1} />,
    },
    {
      id: Math.random(),
      title: "Us",
      img: Img8,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "X-men",
      img: Img9,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "The pursuit of happyness",
      img: Img10,
      rate: <Rating name="simple-controlled" value={4} />,
    },
    {
      id: Math.random(),
      title: "I, Robot",
      img: Img11,
      rate: <Rating name="simple-controlled" value={3} />,
    },
  ]);

  return (
    <div className="App">
      <div className="cards">
        {state.map((card) => (
          <Card
            className="card "
            key={card.id}
            img={card.img}
            title={card.title}
            rate={card.rate}
          />
        ))}
        <AddMovie
          className="card "
          addMovie={(newMovie) => this.add(newMovie)}
        />
      </div>
    </div>
  );
}

export default MovieList;
