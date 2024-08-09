import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
// import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("movies.json");
  //       const data = await response.json();
  //       setMovies(data);
  //     };

  //     fetchData();
  //   }, []);
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
