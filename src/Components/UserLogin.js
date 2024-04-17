import React, { useState } from "react";
import Head from "./Head";
import Body from "./Body";
import { getSavedMovie } from "../Util/helper";
import { addMovies } from "../Util/listSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [showMessage, setshowMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DoSignIn = () => {
    let allAccounts = { users: [] };
    if (JSON.parse(localStorage.getItem("allAccounts"))) {
      allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
    }
    const isAvailable = allAccounts.users.filter(
      (user) => user.email === userEmail
    );
    navigate("/Home");
    isAvailable[0] ? setIsLogin(true) : (() => {
      if (!userEmail.trim()) {
        setshowMessage("User should not be empty.");
      } else {
        setshowMessage("User not created yet! Do, Sign Up.");
        setUserEmail("");
      }
    })();
     
    localStorage.setItem("loggedIn-User", userEmail);
    const movies = getSavedMovie(userEmail);
    dispatch(addMovies(movies?.savedMovies || []));
  };

  const DoSignUp = () => {
    if (userEmail) {
      localStorage.setItem("email", userEmail);
      let allAccounts = { users: [] };
      if (JSON.parse(localStorage.getItem("allAccounts"))) {
        allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
      }

      const userExists = allAccounts.users.some(
        (user) => userEmail.trim() === user.email.trim()
      );
      if (userExists) {
        setshowMessage("The user already exists.");
      } else {
        setshowMessage("User created successfully.");
      }
      let newUser = { email: userEmail, savedMovies: [] };
      allAccounts.users = [...allAccounts.users, newUser];
      localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {!isLogin && (
        <div
          style={{
            backgroundImage:
              "url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-70 h-screen w-screen">
            <div className="text-4xl font-bold text-red-500 absolute top-10 left-20">
              <h1>CiNi MiNi</h1>
            </div>
            <div className="relative top-60 flex flex-col items-center justify-center gap-y-8">
              <h1 className="text-white font-bold text-5xl">
                Unlimited Movies to Watch!
              </h1>
              <input
                className="bg-transparent border border-green-500 text-white py-2 pr-20 pl-2 rounded"
                type="text"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                placeholder="Email address"
              />
              <h1 className="text-white -mt-6 -mb-4">{showMessage}</h1>
              <div>
                <button
                  onClick={() => {
                    DoSignIn();
                  }}
                  className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    DoSignUp();
                  }}
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLogin && (
        <>
          <Head />
          <Body user={userEmail} />
        </>
      )}
    </div>
  );
};

export default UserLogin;
