import React, { useState } from "react";
import { BookmarkPlus } from "lucide-react";
import { addMovie } from "../Util/listSlice";
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
  };

  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <img className="rounded-lg h-50" alt="poster" src={Poster} />
      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 truncate cursor-pointer" title={Title}>
            <Link
              to={"/movieDetails?v=" + imdbID}
              className="flex gap-2  
          hover:text-blue-700 hover:underline"
            >
              {Title}
            </Link>
          </li>
          <li>{Year}</li>
        </ul>
        <button onClick={() => addMovieList(info)}>
          <BookmarkPlus
            className={`mt-8 mr-2 mb-2 ${isListAdd ? "text-[#1F9B04]" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
