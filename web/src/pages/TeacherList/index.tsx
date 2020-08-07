import React from "react";

import backIcon from "../../assets/images/icons/back.svg";
import logoIcon from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Back" />
          </Link>
          <img src={logoIcon} alt="Logo" />
        </div>
        <div className="header-content">
          <strong>This are the proffys available.</strong>
        </div>
      </header>
    </div>
  );
}

export default TeacherList;
