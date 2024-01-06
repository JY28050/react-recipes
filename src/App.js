import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import SingleRecipe from "./pages/SingleRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import Category from "./components/Category";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Search />
      <Category />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:search" element={<SingleRecipe />} />
          <Route path="/recipeDetails/:name" element={<RecipeDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
