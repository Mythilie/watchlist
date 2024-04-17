import React, { useState } from "react";
import { BookmarkPlus, BookmarkX } from "lucide-react";
import { addMovie, removeMovie } from "../Util/listSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSavedMovie } from "../Util/helper";

const MovieCard = ({ info }) => {
  const { Title, Year, Poster, imdbID } = info;
  const [isListAdd, setIsListAdd] = useState(false);
  const user = localStorage.getItem("loggedIn-User");

  const dispatch = useDispatch();
  const addMovieList = (info) => {
    dispatch(addMovie(info));
    setIsListAdd(true);
    setSavedMovie(user, info);
    // const movies = getSavedMovie(user);
    // {movies?.savedMovies.find(movie => movie.Title === info.Title) && setIsListAdd(true)}
  };

  const removeMovieList = (Title) => {
    dispatch(removeMovie(Title));
    setIsListAdd(false);
  };

  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <Link
        to={"/movieDetails?v=" + imdbID}
      >
        <img className="rounded-lg h-50 hover:shadow-lg hover:border-2 hover:border-blue-500" alt="poster" src={Poster} />
      </Link>

      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 overflow-hidden truncate cursor-pointer " title={Title} >
            <Link
              to={"/movieDetails?v=" + imdbID}
              className="flex gap-2  
          hover:text-blue-700 hover:underline overflow-hidden" 
            >
              <span className="truncate">{Title}</span>
            </Link>
          </li>
          <li>{Year}</li>
        </ul>
        {!isListAdd ? (
          <button onClick={() => addMovieList(info)}>
            <BookmarkPlus className="mt-8 mr-2 mb-2" />
          </button>
        ) : (
          <button onClick={() => removeMovieList(Title)}>
            <BookmarkX className="mt-8 mr-2 mb-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
