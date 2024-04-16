import React, { useState, useEffect } from "react";
import { MOVIE_API } from "../Util/Constant";
import MovieCard from "./MovieCard";
import { filterData } from "../Util/helper";
import Shimmer from "./Shimmer";

const MovieContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(MOVIE_API);
    const json = await data.json();
    setMovies(json?.Search);
    setFilteredMovie(json?.Search);
  };

  if (!movies) return null;
  // if (filteredVideos?.length === 0)
  //   return (
  //     <div className="flex justify-center items-center relative top-40 font-bold text-2xl text-red-500">
  //       <h1>No Movies Match Found.</h1>
  //     </div>
  //   );

  return movies?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mt-6">
        <input
          className="w-[94.3%] border border-gray-400 p-1 rounded-l"
          type="text"
          placeholder="Search Movies"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border border-gray-400 p-1 rounded-r bg-red-600 text-white"
          onClick={() => {
            const data = filterData(searchText, movies);
            setFilteredMovie(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-x-8 mb-10">
        {filteredMovie.map((movie, index) => (
          <MovieCard key={index} info={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
