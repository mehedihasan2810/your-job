import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper container-center">
        <div className="hero-info">
          <h1>
            One Step <br /> Closer To Your <br /> 
            <span className="dream-job">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="img-container">
        <img
          src="./assets/All Images/P3OLGJ1 copy 1.png"
          alt=""
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
