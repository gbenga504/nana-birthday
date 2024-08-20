import React, { useEffect } from "react";
import { PageWrapper } from "../../../components/PageWrapper";

export const Cofetti = (props) => {
  useEffect(() => {
    if (window.confetti) {
      window.confetti.start();
    }
  }, []);

  return (
    <PageWrapper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/images/hbd-img.jpeg"
          alt="Nana hbd"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p style={{ fontSize: 70, fontWeight: "bold", margin: 0 }}>
          Happy birthday, Nana 🥂
        </p>
      </div>
    </PageWrapper>
  );
};
