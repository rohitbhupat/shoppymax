// components/routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage"; // Example import of your DashboardPage component
import ProfileSettings from "./common/ProfileSettings";
import ProductForm from "./products/ProductForm";
import ProductUpdateForm from "./products/ProductUpdateForm";
import ProductDetails from "./products/ProductDetails"; // Import ProductDetail component
import ProductList from "./products/ProductList"; // Import ProductList component

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<ProductForm />} />
      <Route path="/updateproduct/:id" element={<ProductUpdateForm />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profilesettings" element={<ProfileSettings />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductList />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */} {/* Optional 404 page */}
    </Routes>
  );
};

export default ComponentRoutes;
