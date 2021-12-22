import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Connection from "../../pages/Connection";
import Profil from "../../pages/Profil";
import NavBar from "../NavBar";

const index = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profil" element={<Profil />} />
        <Route exact path="/connection" element={<Connection />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
