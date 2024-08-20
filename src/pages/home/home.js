import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import "./home.css";
import { Link } from "react-router-dom";
import { routes } from "../../router";

export const Home = () => {
  const renderBackgroundCircles = () => {
    return (
      <React.Fragment>
        <div className="background-decoration-circle small" />
        <div className="background-decoration-circle large" />
      </React.Fragment>
    );
  };

  return (
    <PageWrapper
      style={{
        background: "#9C27B0",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      {renderBackgroundCircles()}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={routes.game.home} className="links">
          Game
        </Link>
        <Link to={routes.countdown.home} className="links">
          Countdown
        </Link>
      </div>
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 30,
              color: "#4a148c",
              fontWeight: "bold",
              fontFamily: "sofia",
            }}
          >
            Queen Nana! HAPPY
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 100,
              fontWeight: "bold",
              fontFamily: "sofia",
            }}
          >
            BIRTHDAY
          </p>
          <p style={{ color: "#fff", maxWidth: "50%", textAlign: "center" }}>
            To the most amazing woman in the world, to our friend, sister and
            partner in everything, we say a happy birthday!
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <img src="/images/home1.png" alt="hero" className="hero-image" />
        </div>
      </div>
    </PageWrapper>
  );
};
