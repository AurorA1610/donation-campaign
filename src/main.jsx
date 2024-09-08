import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home/Home.jsx";
import DonationDetails from "./Components/DonationDetails/DonationDetails.jsx";
import DonationsPage from "./Components/GivenDonations/DonationsPage/DonationsPage.jsx";
import StatsPage from "./Components/StatsPage/StatsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/donation-details/:donationId",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/donation",
        element: <DonationsPage></DonationsPage>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/stats",
        element: <StatsPage></StatsPage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
