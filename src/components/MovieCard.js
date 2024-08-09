import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  // Replace with default image in case of error
  const handleError = (e) => (e.target.src = "images/default.jpg");

  return (
    <div className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-rating">{movie.rating}</p>
      </div>
    </div>
  );
}
