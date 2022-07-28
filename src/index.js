import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { makeServer } from "./server";
import Main from "./pages/Main";
// import MockApi from "./pages/MockApi";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import MockApi from "./pages/MockApi";
import Playlist from "./pages/playlist";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="mockapi" element={<MockApi />} />
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="explore" element={<Explore />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
