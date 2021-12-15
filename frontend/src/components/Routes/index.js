import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";

const index = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profil" element={<Profil />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default index;