import React from "react";
import { BookmarkPlus } from "lucide-react";


const MovieCard = ({ info }) => {
  const { Title, Year, Poster } = info;


  
  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <img className="rounded-lg h-50" alt="poster" src={Poster} />
      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 truncate cursor-pointer" title={Title}>{Title}</li>
          <li>{Year}</li>
        </ul>
          <button ><BookmarkPlus className="mt-8 mr-2 mb-2"/></button>
      </div>
    </div>
  );
};

export default MovieCard;
