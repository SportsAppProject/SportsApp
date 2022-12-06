import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBButton,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import WorldNews from "../WorldNews/WorldNews.jsx";
import Home from "../Home/Home.jsx";

function OurNavbar() {
  const [view, setView] = useState("Home");
  const [showBasic, setShowBasic] = useState(false);

  const disconnect = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <MDBNavbar expand="lg" style={{ backgroundColor: "#77DD77" }}>
        <MDBContainer fluid style={{ backgroundColor: "#77DD77" }}>
          <MDBNavbarBrand href="#">
            <img
              src="https://toppng.com/public/uploads/preview/silhouette-football-player-shooting-soccer-player-silhouette-11563236530t8inyn0tfx.png"
              alt="..."
              height="36"
            />
            SportApp
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <div>Home</div>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setView("WorldNews")} href="#">
                  World News
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>FootBall</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type Something"
                aria-label="Search"
              />
              <MDBBtn color="success">Search</MDBBtn>
            </form>
          </MDBCollapse>
          <MDBNavbarItem>
            <button
              type="button"
              class="btn btn-primary"
              onClick={disconnect}
              style={{ backgroundColor: "red", border: "red" }}
            >
              Logout
            </button>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
      {view === "WorldNews" && <WorldNews />}
    </div>
  );
}

export default OurNavbar;
