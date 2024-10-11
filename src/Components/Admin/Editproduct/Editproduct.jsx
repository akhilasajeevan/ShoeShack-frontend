import React, { useState } from 'react';
import './Editproduct.css';

const Editproduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., API call to save the product
        console.log('Product submitted', product);
    };

    return (
        <div className="add-product">
            <h2 style={{color:"brown"}}>EDIT PRODUCT</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Kids">Kids</option>
                        <option value="Womens">Womens</option>
                        <option value="Mens">Mens</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">ADD PRODUCT</button>
            </form>
        </div>
    );
};

export default Editproduct;
