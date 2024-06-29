import React, { useState, useEffect } from 'react';
import { addProduct } from '../../api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const productDetails = { name, description, price, category, image, quantity };

        try {
            const data = await addProduct(productDetails);

            if (data) {
                setMessage(`Product created successfully`);
                // Clear form fields
                setName('');
                setDescription('');
                setPrice('');
                setCategory('');
                setImage('');
                setQuantity('');
            } else {
                setMessage(`Error: Failed to create product`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Could not create product');
        }
    };

    // Redirect to ProductList on successful product addition
    useEffect(() => {
        if (message === 'Product added successfully') {
            setTimeout(() => {
                navigate('/products');
            }, 2000); // Redirect after 2 seconds
        }
    }, [message, navigate]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <br/>
            <br/>
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1">
                    <br/>
                    <br/>
                    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description:</label>
                                <input
                                    id="description"
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price:</label>
                                <input
                                    id="price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category:</label>
                                <input
                                    id="category"
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image:</label>
                                <input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {image && (
                                    <img src={image} alt="Product Preview" className="mt-2 w-full h-48 object-cover rounded-lg" />
                                )}
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Product Quantity:</label>
                                <input
                                    id="quantity"
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add Product</button>
                        </form>
                        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ProductForm;
