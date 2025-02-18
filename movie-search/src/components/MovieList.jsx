import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <p>Nessun film trovato.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) =>
        movie && movie.id ? <MovieCard key={movie.id} movie={movie} /> : null
      )}
    </div>
  );
};

export default MovieList;
