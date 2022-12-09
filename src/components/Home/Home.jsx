import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";
import Profile from "../Profile/Profile.jsx";
import axios from "axios";

const Home = ({ dataUser }) => {
  // console.log("------->",dataUser)
  // let [post, setPost] = useState([]);
  // let [comment, setComment] = useState([]);
  // let [check, setCheck] = useState(false);

  // const [profile, setProfile] = useState(dataUser);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/posts/getall").then((result) => {
  //     // console.log(result.data);
  //     setPost(result.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/comments/getall").then((result) => {
  //     // console.log(result.data);
  //     setComment(result.data);
  //   });
  // }, []);
  // const toggleCheck = () => {
  //   setCheck(!check);
  // };

  return (
    <div>
      <div>
        {/* <!--Navbar --> */}
        <OurNavbar />
        {/* <div className="component-container">
          <button onClick={toggleCheck}>Show profile</button>
        </div> */}
        <div>
          {/* {check ? (
            <div>
              <Profile profile={profile} />
            </div>
          ) : null} */}
        </div>
        {/* <Profile profile={profile} /> */}
        {/* <Blog post={post} comment={comment} /> */}
      </div>
    </div>
  );
};

export default Home;
