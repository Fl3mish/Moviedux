import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
// import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title
      .trim()
      .toLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
