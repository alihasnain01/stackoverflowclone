import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import IssueDetail from "./components/IssueDetail";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import reportWebVitals from "./reportWebVitals";
import Category from "./components/Category";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { isLogin } from "./App";

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
        element: isLogin ? <Home /> : <Login />,
      },
      {
        path: "/signup",
        element: isLogin ? <Home /> : <Signup />,
      }
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
