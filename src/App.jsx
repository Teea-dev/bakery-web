import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Menu from "./routes/Menu";
import Story from "./routes/Ourstory";
import Blog from "./routes/Blog";
import BlogDetails from "./routes/BlogDetails";


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/*" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={Contact} />
        <Route path="Menu" component={<Menu />} />
        <Route path="/story" component={Story} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetails} />
      </Routes>
    </>
  );
};

export default App;
