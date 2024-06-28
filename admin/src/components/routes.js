// components/routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage"; // Example import of your DashboardPage component
import ProfileSettings from "./common/ProfileSettings";
import ProductForm from "./products/ProductForm";
import ProductUpdateForm from "./products/ProductUpdateForm";

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<ProductForm />} />
      <Route path="/updateproduct/:id" element={<ProductUpdateForm />} />      
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profilesettings" element={<ProfileSettings />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}{" "}
      {/* Optional 404 page */}
    </Routes>
  );
};

export default ComponentRoutes;
