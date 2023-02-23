import React, { useState, useEffect } from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const nameHandler = (data) => {
    setUser(data.given_name);
    setImage(data.picture);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader picture={image} />
      <main>
        {!isLoggedIn && (
          // <GoogleOAuthProvider clientId="433422342619-o7tponv545aplimrm8be4cqhb23rk9i7.apps.googleusercontent.com">
          //   <Login onLogin={loginHandler} />
          // </GoogleOAuthProvider>
          <Login onLogin={loginHandler} onName={nameHandler} />
        )}
        {isLoggedIn && <Home onLogout={logoutHandler} name={user} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
