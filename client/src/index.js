import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Subscribers from "./page/Subscribers";
import SubscribersName from "./page/SubscribersName";
import Subscriber from "./page/Subscriber";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "", element: <App /> },
      { path: "subscribers", element: <Subscribers /> },
      { path: "subscribers/names", element: <SubscribersName /> },
      { path: "subscriber/:id", element: <Subscriber /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
