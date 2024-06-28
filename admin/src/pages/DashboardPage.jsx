// src/pages/DashboardPage.jsx
import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import ProductForm from '../components/products/ProductForm';

const DashboardPage = () => {
    return (
        <div>
            <Dashboard />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                <ProductForm />
            </div>
        </div>
    );
};

export default DashboardPage;
