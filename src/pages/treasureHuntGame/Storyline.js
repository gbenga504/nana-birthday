import React from "react";
import { PageWrapper } from "../../components/PageWrapper";

export const Storyline = () => {
  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: 700 }}>
        <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          The Lost Manuscript 🗞
        </p>
        <p>
          You are descendants of a renowned explorer, Professor Elara Thorne,
          who vanished mysteriously while searching for a lost civilization in
          the heart of the Amazon rainforest. Legend has it that she discovered
          a hidden manuscript detailing the location of an ancient, priceless
          artifact.
        </p>
        <p>
          Before her disappearance, she managed to leave behind a series of
          cryptic clues, scattered across your hometown. Your mission: to follow
          these clues, decipher her enigmatic messages, and ultimately uncover
          the lost manuscript.
        </p>
      </div>
    </PageWrapper>
  );
};
