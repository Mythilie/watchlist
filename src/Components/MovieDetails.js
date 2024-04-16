import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../Util/Constant";

const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      // Fetch movie details
      const response = await fetch(
        "https://www.omdbapi.com/?i=" +
          searchParams.get("v") +
          "&apikey=" +
          API_KEY
      );
      const data = await response.json();
      setMovieDetails(data);
    };

    getMovieDetails();
  }, [searchParams]);

  return (
    <div className="col-span-12">
      <div className=" mt-6 flex">
        <img
          className="shadow-xl shadow-gray-250 w-60 rounded-lg h-50"
          alt="poster"
          src={movieDetails.Poster}
        />
        <div className="mt-4 ml-8 ">
          <div className="flex mb-2">
            <h1 className="font-bold mr-2 text-red-500">Title:</h1>
            <h1>{movieDetails.Title}</h1>
          </div>
          <div className="flex mb-2">
            <h1 className="font-bold mr-2 text-red-500">Released Year:</h1>
            <h1>{movieDetails.Released}</h1>
          </div>
          <div className="flex">
            <h1 className="font-bold mr-2 text-red-500">Plot Summary:</h1>
            <h1 className="w-[40rem]">{movieDetails.Plot}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
