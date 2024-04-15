import React from "react";
import { BookmarkX } from "lucide-react";

const ListContainer = () => {
  return (
    <div className="col-span-12 p-10 h-screen overflow-y-auto">
      <div className="border border-green-500 rounded px-2 py-5">
        <h1 className="text-2xl font-semibold">Welcome to Watchlist</h1>
        <p className="mt-4 font-mono">
          Movies which are added in your list.
        </p>
        <p className="mt-4 font-mono flex">
          Click the <BookmarkX className="mx-2"/> to Remove movie from your list.
        </p>
      </div>
    </div>
  );
};

export default ListContainer;
