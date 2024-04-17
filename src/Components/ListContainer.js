import React from "react";
import { BookmarkX } from "lucide-react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";

const ListContainer = () => {
  const movieList = useSelector((store) => store.list.items);

  return (
    <div className="col-span-12 p-10 h-screen overflow-y-auto">
      <div className="border border-green-500 rounded px-2 py-5">
        <h1 className="text-2xl font-semibold">Welcome to Watchlist</h1>
        <p className="mt-4 font-sans">Movies which are added in your list.</p>
        <p className="mt-4 font-sans flex">
          Click the <BookmarkX className="mx-2" /> to Remove movie from your
          list.
        </p>
      </div>
      {movieList.length > 0 ? (
       <div className="flex flex-wrap gap-x-8 mb-10">
        {movieList.map((movieList, index) => (
          <ListCard key={index} index={index} info={movieList} />
        ))}
      </div>
      ) : (
        <div className="flex justify-center items-center relative top-40 font-bold text-2xl text-red-500">
          <h1>No movies in the watchlist.</h1>
        </div>
      )
    }
    </div>
  );
};

export default ListContainer;
