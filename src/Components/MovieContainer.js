import React, { useState, useEffect } from "react";
import { MOVIE_API } from "../Util/constant";
import MovieCard from "./MovieCard";
import { filterData, getSavedMovie } from "../Util/helper";
import Shimmer from "./Shimmer";

const MovieContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isSearchNotFound, setIsSearchNotFound] = useState(false);
  const user = localStorage.getItem("loggedIn-User");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(MOVIE_API);
    const json = await data.json();
    setMovies(json?.Search);
    setFilteredMovie(json?.Search);
  };

  const SearchMovie = () => {
    const data = filterData(searchText, movies);
    movies?.map((movie) => {
      if (movie.Title !== searchText) setIsSearchNotFound(true);
    });
    setFilteredMovie(data);
  };

  if (!movies) return null;

  return movies?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mt-6">
        <input
          className="w-[94%] border border-gray-400 p-1 rounded-l"
          type="text"
          placeholder="Search Movies"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border border-gray-400 p-1 rounded-r bg-red-600 text-white"
          onClick={() => {
            SearchMovie();
          }}
        >
          Search
        </button>
      </div>
      {isSearchNotFound && <div className="flex justify-center items-center relative top-40 font-bold text-2xl text-red-500">
        <h1>No Movies Match Found.</h1>
      </div>}
      <div className="flex flex-wrap gap-x-8 mb-10">
        {filteredMovie?.map((movie, index) => {
          const savedMovies = getSavedMovie(user);
          const isListAdd =
            savedMovies?.savedMovies.some(
              (savedMovie) => savedMovie.Title === movie.Title
            ) || false;
          console.log(savedMovies?.savedMovies);
          return <MovieCard key={index} info={movie} isListAdd={isListAdd} />;
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
