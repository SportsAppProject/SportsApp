import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog.jsx";
import AddBlog from "./components/AddBlog/AddBlog.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import WorldNews from "./components/WorldNews/WorldNews.jsx";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const [view, setView] = useState("Login");

  function changeView() {
    if (initializing) return null;
    if (!user) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      console.log("user ", user);
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
      if (!user) {
        // navigate("/login");
      } else {
        // navigate("/home");
      }
    })
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home profile={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/WorldNews" element={<WorldNews />} />
        <Route path="/Profile" element={<Profile profile={user} />} />
      </Routes>
      {/* {view === "Home" && <Home dataUser={user} />}
      {view === "Login" && <Login />}
      {view === "Blog" && <Blog />} */}
    </div>
  );
}

export default App;
