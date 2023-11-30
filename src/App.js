import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import View from "./components/View/View";
import styled, { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter/Filter";

function App() {
  //using a global style to toggle the darkMoe colors
  const GlobalStyle = createGlobalStyle`
  header .right_nav li a {
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  }



.dropdown-menu.dropdown-menu-right.dropdownMenu.show {
    background: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
  }

  .form-control{
    background: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .form-control::placeholder{
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .col-1{
    background: ${(props) => (props.darkMode ? "#000000" : "")};
  }

  .iconsrch{
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .pagination .page-item .page-link{
    background: ${(props) => (props.darkMode ? "#000000" : "")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .explore_pill{

    background: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};

  }

  .explore_component{

    background: ${(props) => (props.darkMode ? "#000000" : "")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};

  }

  .dropdown-menu{
    background: ${(props) => (props.darkMode ? "#000000" : "")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .dropdown-item:hover{
    background: ${(props) => (props.darkMode ? "#000000" : "")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  #explore_interests > div.row.justify-content-center > div > div > div.col-11 > span > span.selection > span{
    background: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
  }

  .select2-search__field::placeholder{
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }

  .top-nw-nav-header.navbar .navbar-nav.right_nav.top-nw-nav .nav-item.dropdown .dropdown-menu.firstmenu li a.dropdown-item:hover{
    color: ${(props) => (props.darkMode ? "#27ae60" : "#000000")};
  }

  .side-nav.open{
    background-color: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
  }

  .side-nav li a {
    color: ${(props) => (props.darkMode ? "#27ae60" : "#000000")};
  }

  .bgWhite {
    background-color: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
  }

  .explore_section{

    background: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  }
  
  .viewContainer{
    background: ${(props) => (props.darkMode ? "#8b8b8b" : "#ffffff")};
  }


`;

  //darkmode toggle container
  const ToggleContainer = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    z-index: 3000;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  `;

  //darkmode button
  const ToggleButton = styled.div`
    display: inline-block;
    padding: 8px;
    background-color: ${(props) => (props.darkMode ? "#000000" : "#ffffff")};
    border: ${(props) =>
      props.darkMode ? "2px solid white" : "2px solid black"};
    color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
    border-radius: 4px;
    margin-right: 8px;
  `;

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <ToggleContainer darkMode={darkMode}>
        <ToggleButton darkMode={darkMode} onClick={toggleDarkMode}>
          {darkMode ? "On" : "Off"}
        </ToggleButton>
        Dark Mode
      </ToggleContainer>
      <Navbar />
      <LandingPage />
      <div className="viewSection">
        <View />
      </div>
    </>
  );
}

export default App;
