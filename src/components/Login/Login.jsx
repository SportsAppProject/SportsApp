import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../Home/Home";
import ClipLoader from "react-spinners/ClipLoader";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA05fVHSqrQW08aW81v77i8eC6U0TU4E88",
  authDomain: "mypp-2369a.firebaseapp.com",
  databaseURL:
    "https://mypp-2369a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mypp-2369a",
  storageBucket: "mypp-2369a.appspot.com",
  messagingSenderId: "410505824221",
  appId: "1:410505824221:web:ca9180442a32f25fe49834",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const submitThis = (e) => {
    setLoading(true);
    e.preventDefault();
    const info = { email: email, passw: passw };
    setDataInput([info]);
    createUserWithEmailAndPassword(auth, email, passw)
      .then((Credential) => {
        setLoading(false);
        setUser(Credential.user);
        console.log("User Created", Credential.user);
        return <Home />;
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, passw)
      .then((res) => console.log("User LoggedIn", res.user))
      .then((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  if (loading) {
    return <ClipLoader color={"green"} loading={loading} size={300} />;
  }

  return (
    <div>
      {/* <!--Navbar --> */}
      <nav
        className="nav-box"
        style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
      >
        <h1
          className="welcome-banner"
          style={{ color: "white", textAlign: "center" }}
        >
          Welcome to our App !
        </h1>
      </nav>
      {/* <!--/.Navbar --> */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/58a1fe895016e192bf28ff7f/1568646848366-IYI7DZMOFU5L7AMJ2CTC/Eco.png?format=1500w"
                className="img-fluid"
                alt="x"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={(e) => submitThis(e)}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">Email address</label>
                  {error ? (
                    <p style={{ color: "red" }}>
                      Invalid Credentials: * Please make sure your password has
                      at least 6 characters. * If your account exists already,
                      press Login Instead.
                    </p>
                  ) : null}
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    onChange={(e) => setPassw(e.target.value)}
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
                >
                  Sign in
                </button>

                <button
                  onClick={handleLogin}
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
                >
                  Login
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
