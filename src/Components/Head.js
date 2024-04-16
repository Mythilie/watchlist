import React from "react";
import { Clapperboard, Power } from "lucide-react";

const Head = () => {
  const LogOut = () => {
    localStorage.removeItem("movieString");
    localStorage.removeItem("signIn");
    window.location.reload();
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex col-span-10 mt-1">
        <button>
          <Clapperboard className="text-red-500" />
        </button>
        <h1 className="font-bold text-red-500 ml-2">CiNi MiNi</h1>
      </div>
      <div className="col-span-1 relative left-20 flex cursor-pointer">
        <button
          title="Logout"
          onClick={() => {
            LogOut();
          }}
        >
          <Power />
        </button>
      </div>
    </div>
  );
};

export default Head;
