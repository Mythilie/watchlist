import React from "react";
import MovieContainer from "./MovieContainer";
import { BookmarkPlus } from "lucide-react";

const MainContainer = () => {
  return (
    <div className="col-span-12 p-10 h-screen overflow-y-auto">
      <div className="border border-green-500 rounded px-2 py-5">
        <h1 className="text-2xl font-semibold">Welcome to Watchlist</h1>
        <p className="mt-4 font-sans">
          Browse movies, add them to watchlist and share them with your friends.
        </p>
        <p className="mt-4 font-sans flex">
          Click the <BookmarkPlus className="mx-2 text-blue-700" /> to add movie in your list.
        </p>
      </div>
      <MovieContainer />
    </div>
  );
};

export default MainContainer;
