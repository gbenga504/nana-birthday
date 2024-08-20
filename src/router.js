import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home/home";

import { TreasureHuntGame } from "./pages/treasureHuntGame/treasureHuntGame";
import { Storyline } from "./pages/treasureHuntGame/storyline";
import { Rules } from "./pages/treasureHuntGame/rules";
import { FinalInstruction } from "./pages/treasureHuntGame/finalInstruction";

import { Countdown } from "./pages/countdown/countdown";
import { Cofetti } from "./pages/countdown/cofetti/cofetti";

export const routes = {
  home: "/",
  game: {
    home: "/game",
    storyline: "/game/storyline",
    rules: "/game/rules",
    finalInstruction: "/game/final",
  },
  countdown: {
    home: "/countdown",
    cofetti: "/countdown/cofetti",
  },
};

const browserRouter = createBrowserRouter([
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.game.home,
    Component: TreasureHuntGame,
  },
  {
    path: routes.game.storyline,
    Component: Storyline,
  },
  {
    path: routes.game.rules,
    Component: Rules,
  },
  {
    path: routes.game.finalInstruction,
    Component: FinalInstruction,
  },
  {
    path: routes.countdown.home,
    Component: Countdown,
  },
  {
    path: routes.countdown.cofetti,
    Component: Cofetti,
  },
]);

export const Router = () => <RouterProvider router={browserRouter} />;
