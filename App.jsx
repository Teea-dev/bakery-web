import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import menu from './src/pages/menu'
import Story from "./pages/Story";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/menu" exact component={menu} />
        <Route path="/story" exact component={Story} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" exact component={BlogDetails} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
