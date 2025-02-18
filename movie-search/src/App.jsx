import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&language=it-IT`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Errore nel recupero dati:", error);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
