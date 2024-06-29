import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                console.log('Products fetched:', response); // Log the response to inspect
                setProducts(response); // Assuming response is an array of products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log('Products State:', products); // Log the products state

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mb-4">Product List</h1>
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                                    <h2 className="text-lg font-semibold">{product.name}</h2>
                                    <p className="text-gray-600">₹{product.price}</p>
                                    <p className="text-gray-600">Quantity: {product.quantity}</p>
                                    <p className="text-gray-600">Category: {product.category}</p>
                                    <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                                        <i className="fas fa-eye"></i> View Product
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No products available.</p>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ProductList;
