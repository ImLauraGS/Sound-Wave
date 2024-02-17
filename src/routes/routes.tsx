import {
    createBrowserRouter
  } from "react-router-dom";
import { Home } from "../pages/Home";
import Discover from "../pages/Discover";
import Join from "../pages/Join";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/discover",
        element: <Discover/>
    },
    {
        path: "/join",
        element: <Join/>
    }
  ]);