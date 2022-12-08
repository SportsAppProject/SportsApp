import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";
import axios from "axios";
import Search from "../search/Search.jsx";

const Home = () => {
  let [post, setPost] = useState([]);
  let [comment, setComment] = useState([]);
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts/getall").then((result) => {
      // console.log(result.data);
      setPost(result.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/getall").then((result) => {
      // console.log(result.data);
      setUser(result.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/comments/getall").then((result) => {
      // console.log(result.data);
      setComment(result.data);
    });
  }, []);

  return (
    <div>
      <div>
        {/* <!--Navbar --> */}
        <OurNavbar />
        <Blog post={post} user={user} comment={comment} />
        <Search post={post} />
      </div>
    </div>
  );
};

export default Home;
