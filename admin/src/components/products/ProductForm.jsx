import React, { useState } from 'react';
import { addProduct } from '../../api';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const productDetails = { name, description, price, category }; // Correctly build productDetails object

        try {
            const data = await addProduct(productDetails); // Call addProduct with productDetails

            // Check response and update message accordingly
            if (data) {
                setMessage(`Product created successfully with ID: ${data.id}`);
                setName('');
                setDescription('');
                setPrice('');
                setCategory('');
            } else {
                setMessage(`Error: Failed to create product`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Could not create product');
        }
    };

    

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ProductForm;
