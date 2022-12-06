import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";
import axios from "axios";

const Home = () => {
  let [post, setPost] = useState([]);
  let [comment, setComment] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts/getall").then((result) => {
      // console.log(result.data);
      setPost(result.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/comments/getall").then((result) => {
      // console.log(result.data);
      setComment(result.data);
    });
  }, []);

  return (
    <div>
      <div>
        {/* <!--Navbar --> */}
        <OurNavbar />
        <Blog post={post} comment={comment} />
      </div>
    </div>
  );
};

export default Home;
