import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ProductList from "../pages/product/ProductList";
import ProductSingle from "../pages/product/ProductSingle";
import Register from "../pages/register/Register";
import AddProduct from "../pages/register/AddProduct";
import SuccessPage from "../pages/register/SuccessPage";
import DashboardPage from "../pages/dashboard/DashboardPage";


const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product_list" element={<ProductList />} />
        <Route path="/product_single" element={<ProductSingle />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/dashboard" element={<DashboardPage/> } />
      </Routes>
    </div>
  );
};

export default PageRoutes;
