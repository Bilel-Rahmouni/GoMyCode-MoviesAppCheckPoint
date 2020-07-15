import React from "react";
import "./App.css";
import Nav from "./component/navbar";
import MovieList from "./component/MovieList";
function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
