import React, { useState } from "react";
import Head from "./Head";
import Body from "./Body";



const UserLogin = () => {

  
  const [userEmail, setUserEmail] = useState("");
  const [signUp, setSignUp] = useState(userEmail);
  const [isLogin, setIsLogin] = useState(false);
  const [isAuth, setIsAuth] = useState();

  
  const DoSignIn = () => {
    
    {
      userEmail !== '' && userEmail === signUp ? setIsLogin(true) : setIsLogin(false);
      setIsAuth(true);
    }
  };

  const DoSignUp = () => {
    setSignUp(userEmail);
    {userEmail  === '' ? setIsAuth(false) : setIsAuth(true)}
  }

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
              {isAuth && signUp === '' ? (
                <h1 className="text-white -mt-6 -mb-4">
                  User not created yet! Do, Sign Up.
                </h1>
              ) : (
               ''
              )}
              {isAuth && signUp !== ''  ? (
                <h1 className="text-white -mt-6 -mb-4">
                  User created successfully.
                </h1>
              ) : (
               ''
              )}
              <div>
              <button
                  onClick={() => {
                    DoSignIn();
                  }}
                  className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
                <button onClick={() => {
                  DoSignUp();
                }} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLogin && 
      <>
      <Head />
      <Body user={userEmail}/>
      </>
      }
      
    </div>
  );
};

export default UserLogin;
