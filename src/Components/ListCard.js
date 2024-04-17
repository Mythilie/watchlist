import React from "react";
import { BookmarkX } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../Util/listSlice";

const ListCard = ({ index, info }) => {

  const { Title, Year, Poster } = info;

  const dispatch = useDispatch();

  const removeMovieList = (Title) => {
    dispatch(removeMovie(Title));
  };
  return (
    <div className="shadow-xl shadow-gray-250 w-40 mt-6 ">
      <img className="rounded-lg h-50" alt="poster" src={Poster} />
      <div className="flex">
        <ul className="w-[8rem]">
          <li className="font-bold h-8 truncate cursor-pointer" title={Title}>
            {Title}
          </li>
          <li>{Year}</li>
        </ul>
        <button
          onClick={() => {
            removeMovieList(Title);
          }}
        >
          <BookmarkX className="mt-8 mr-2 mb-2" />
        </button>
      </div>
    </div>
  );
};

export default ListCard;
