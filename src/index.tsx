import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main";
import CowntDown from "./pages/cowndown";
import Loader from "./pages/loader";
import "./assets/css/index.css";

export const ROUTESENUM = {
  countDown: "/",
  loader: "/loader",
  main: "/main",
};

const router = createBrowserRouter([
  {
    path: ROUTESENUM.countDown,
    element: <CowntDown />,
  },
  {
    path: ROUTESENUM.loader,
    element: <Loader />,
  },
  {
    path: ROUTESENUM.main,
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
