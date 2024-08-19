import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home/home";
import { TreasureHuntGame } from "./pages/treasureHuntGame/treasureHuntGame";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/game",
    Component: TreasureHuntGame,
  },
]);

export const Router = () => <RouterProvider router={browserRouter} />;
