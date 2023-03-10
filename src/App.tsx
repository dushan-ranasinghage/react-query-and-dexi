import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import DefaultLayout from "./Layouts/DefaultLayout";

import NoMatch from "./modules/NoMatch";
import Home from "./modules/Home";
import Gallery from "./modules/Gallery";
import HooksGallery from "./modules/HooksGallery";
import MemoComments from "./modules/MemoComments";
import Localforage from "./modules/Localforage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="hooks-gallery" element={<HooksGallery />} />
        <Route path="memo-comments" element={<MemoComments />} />
        <Route path="localforage" element={<Localforage />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App

