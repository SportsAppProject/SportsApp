import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog.jsx";
import axios from "axios";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const [view, setView] = useState("Login");

  function changeView() {
    if (initializing) return null;
    if (!user) {
      return setView("Login");
    } else {
      return setView("Home");
    }
  }

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      console.log("user ", user);
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
      changeView();
    })
  );

  return (
    <div className="App">
      {view === "Home" && <Home />}
      {view === "Login" && <Login />}
      {view === "Blog" && <Blog />}
    </div>
  );
}

export default App;
