import React from "react";
import { Route, Routes } from "react-router-dom";


const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
