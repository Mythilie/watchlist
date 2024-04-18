import React from "react";
import { BookmarkX } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../Util/listSlice";
import { modifySavedMovie } from "../Util/helper";
import { Link } from "react-router-dom";

const ListCard = ({ info }) => {
  const { Title, Year, Poster, imdbID } = info;

  const dispatch = useDispatch();
  const user = localStorage.getItem("loggedIn-User");

  const removeMovieList = (Title) => {
    dispatch(removeMovie(Title));
    modifySavedMovie(user, Title);
  };
  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <Link to={"/movieDetails?v=" + imdbID}>
        <img
          className="rounded-lg h-50 hover:shadow-lg hover:border-2 hover:border-blue-500"
          alt="poster"
          src={Poster}
        />
      </Link>

      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 truncate cursor-pointer" title={Title}>
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
        <button
          onClick={() => {
            removeMovieList(Title);
          }}
        >
          <BookmarkX className="mt-8 mr-2 mb-2 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default ListCard;
