import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";
import Profile from '../Profile/Profile.jsx'
import axios from "axios";


const Home = ({dataUser}) => {
 // console.log("------->",dataUser)
  let [post, setPost] = useState([]);
  let [comment, setComment] = useState([]);

  const[profile,setProfile]=useState(dataUser)

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
        <Profile profile={profile}/>
      </div>
    </div>
  );
};

export default Home;
