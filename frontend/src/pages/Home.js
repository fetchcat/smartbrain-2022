import React from "react";

import Tilt from "react-parallax-tilt";
import brain from "../assets/brain.png";

import Nav from "../components/Nav";

import Particles from "../components/Particles";

const Home = () => {
  return (
    <>
      {" "}
      <Nav />
      <section className="d-flex bg-dark text-light text-center text-sm-start p-5 h-100 align-items-center justify-content-center">
        <Particles />
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>Face Detection App</h1>
              <p className="lead my-4">
                This magic brain will detect faces in your pictures. Give it a
                try...
              </p>
              <button className="btn btn-outline-light btn-lg">
                Get Started
              </button>
            </div>
            <Tilt className="Tilt">
              <div className="img-fluid d-flex justify-content-center align-items-center h-100 Tilt-inner p-3">
                <img
                  src={brain}
                  alt="brain"
                  className="bg-light rounded-circle p-2 d-none d-sm-block"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
