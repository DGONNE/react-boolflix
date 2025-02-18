import React from "react";

const MovieList = ({ movies }) => {
  const getStarRating = (vote) => Math.ceil(vote / 2);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p className="original-title">{movie.original_title}</p>
            <p className="language">
              🌍 {movie.original_language.toUpperCase()}
            </p>
            <p className="rating">⭐ {getStarRating(movie.vote_average)} / 5</p>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
