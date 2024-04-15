import React from "react";
import { BookmarkPlus } from "lucide-react";
import { addMovie } from "../Util/listSlice";
import { useDispatch } from "react-redux";


const MovieCard = ({ info }) => {
  const { Title, Year, Poster } = info;
 
  const dispatch = useDispatch();

  const addMovieList = (info) => {
    dispatch(addMovie(info));
  }
  
  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <img className="rounded-lg h-50" alt="poster" src={Poster} />
      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 truncate cursor-pointer" title={Title}>{Title}</li>
          <li>{Year}</li>
        </ul>
          <button onClick={() => addMovieList(info)}><BookmarkPlus className="mt-8 mr-2 mb-2"/></button>
      </div>
    </div>
  );
};

export default MovieCard;
