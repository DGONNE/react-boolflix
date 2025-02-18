const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x500"; // Placeholder se manca l'immagine

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title || movie.name} />
      <h3>{movie.title || movie.name}</h3>
      <p>Lingua: {movie.original_language.toUpperCase()}</p>
      <p>Voto: {Math.ceil(movie.vote_average / 2)} ⭐</p>
    </div>
  );
};

export default MovieCard;
