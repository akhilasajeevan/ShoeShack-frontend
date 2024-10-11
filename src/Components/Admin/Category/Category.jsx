import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
const CategoryPage = () => {
    return (
        <div className="category-page">
            <h2>Product Categories</h2>
            <ul className="category-list">
                <li className="category-item"><Link to="/mensshoes">Men's Shoes</Link> </li>
                <li className="category-item"><Link to="/womensshoes">Women's Shoes</Link></li>
                <li className="category-item"><Link to="/kid'ssshoes">Kid's Shoes</Link></li>
            </ul>
        </div>
    );
};

export default CategoryPage;
