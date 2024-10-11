




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Productlist.css'

function Productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/productlist');
        console.log('API Response:', response);
        if (response.data) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching product data', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img 
              src={`http://localhost:4000${product.imageUrl}`} 
              alt={product.productName} 
              className="product-image" 
            />
            <h3>{product.productName}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">{product.category}</p>
            <Link to={`/admin/Editproduct/${product._id}`}>
              <button className="edit-button" type="button">
                Edit
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlist
