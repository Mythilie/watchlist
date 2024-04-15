import React, { useState } from "react";
import { Home, Search, List, CircleUser } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Sidebar = ({user}) => {


  

  const location = useLocation();
  return (
    <div className="p-5 shadow-xl shadow-gray-250 col-span-0 h-screen">
      <h1 className="text-3xl font-bold text-red-500">WatchList</h1>
      <div className="mt-5">
        <input
          className="border border-gray-400 p-1 rounded-l w-[10rem]"
          type="text"
          placeholder="Search"
        />
        <button className="relative top-1.5 border border-gray-400 p-1 rounded-r bg-gray-100 ">
          <Search />
        </button>
      </div>
      <div className="mt-5 w-[12rem]">
        <ul>
          <li
            className={`py-2 pl-2 mb-4 rounded ${
              location.pathname === "/"
                ? "border border-red-500 bg-red-500 text-white"
                : "text-black"
            }`}
          >
            <Link to="/" className="flex gap-2">
              <Home />
              Home
            </Link>
          </li>
          <li
            className={`py-2 pl-2 rounded ${
              location.pathname === "/List"
                ? "border border-red-500 bg-red-500 text-white"
                : "text-black"
            }`}
          >
            <Link to="/List" className="flex gap-2"><List />My List</Link>
          </li>
        </ul>
      </div>
      <div className="relative flex top-[18rem] border-t border-gray-300 pt-2">
        <CircleUser className="w-8 h-8 text-gray-500"/> 
        <h1 className="ml-2 mt-1">{user}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
