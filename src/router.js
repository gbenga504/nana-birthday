import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home/home";
import { TreasureHuntGame } from "./pages/treasureHuntGame/treasureHuntGame";
import { Storyline } from "./pages/treasureHuntGame/Storyline";
import { Rules } from "./pages/treasureHuntGame/Rules";
import { FinalInstruction } from "./pages/treasureHuntGame/FinalInstruction";

export const routes = {
  home: "/",
  game: {
    home: "/game",
    storyline: "/game/storyline",
    rules: "/game/rules",
    finalInstruction: "/game/final",
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
]);

export const Router = () => <RouterProvider router={browserRouter} />;
