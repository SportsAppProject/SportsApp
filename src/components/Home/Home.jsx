import React, { useState } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";

const Home = () => {
  return (
    <div>
      {/* <!--Navbar --> */}
      <OurNavbar />
    </div>
  );
};

export default Home;