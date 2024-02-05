import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Intro from "./pages/IntroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Intro /> },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
