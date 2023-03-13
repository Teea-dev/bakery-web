import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import BlogDetails from "./routes/BlogDetails";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Story from "./routes/Ourstory";
import Blog from "./routes/Blog";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />
    ),
  },
  {
    path: "/menu",
    element: (
      <Menu />
    )
  },
  {
    path: "/blog/:id",
    element: (
      <BlogDetails />
    )
  },
  {
    path: "about",
    element: (
      <About/>
    )
  },
  {
    path: "/contact",
    element: (
      <Contact />
    )
  },
  {
    path: "story",
    element: (
      <Story />
    )
  },
  {
    path: "blog",
    element: (
      <Blog />
    )
  },


]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
