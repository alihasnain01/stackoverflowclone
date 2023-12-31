import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/pages/Home";
import IssueDetail from "./components/IssueDetail";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/Contactus";
import reportWebVitals from "./reportWebVitals";
import Category from "./components/pages/category/Category";
import CategoryIssues from "./components/pages/category/CategoryIssues";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Users from "./components/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Category />,
        children: [
          {
            path: "/categories/issues/:id",
            element: <CategoryIssues />,
          },
        ],
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/issues/:id",
        element: <IssueDetail />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/contact-us",
        element: <Contactus />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
