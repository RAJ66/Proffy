import React from "react";
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

// import { Container } from './styles';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-lading-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />´
          <h2>Your platform of online studies</h2>
        </div>

        <img src={landingImg} alt="Platform of studies" />

        <div className="button-container">
          <a className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </a>
          <a className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes" />
            Give Classes
          </a>
        </div>

        <span className="total-connections">
          Total of 200 connections made{" "}
          <img src={purpleHeartIcon} alt="Purple Heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
