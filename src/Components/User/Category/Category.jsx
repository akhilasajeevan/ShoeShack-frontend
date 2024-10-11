import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="category-list">
      <h2>Explore Our Shoe Categories</h2>
      <div className="category-grid">
        <div className="category">
          <Link to="/Menscategory">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1dluE3Vacsmkq5uPoyw3t6SjMtFKbiitSl_00P1d0qcXCdafYkutd17P9UG_zm8kOQFruOI9HWV4o1JSFgGQ3m-cd5zKMoR8ONuItUkk" alt="Men's Shoes" />
            <h3>Men's Shoes
            </h3>
          </Link>
          URBANBOX
Stylish & Trending Outdoor Walking Comfortable Sneakers...
₹299₹99970% off
Hot Deal
Size 6, 7, 8, 9, 10
        </div>
        <div className="category">
          {/* <Link to="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> */}
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women's Shoes" />
            <h3>Women's Shoes</h3>Fabbmate Stylish 2 Pair Bellies Shoes for Women Casual ...
₹589₹99941% off
Size 5, 6, 7, 8
          {/* </Link> */}
        </div>
        <div className="category">
          {/* <Link to="https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw6f40886a/images/95022NBLLM/BLACK-KIDS-BOYS-SKECHERS-SNEAKERS-95022NBLLM_5.JPG"> */}
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8gWMsXMzlA6uDtdIUHmY0vostZIVJywHAsC4VMvLPvtmCgJH_WLG8eqBljxpsLhEqj9l0JD3eb0aqNeMy-CYNttg6SbYJSCDvVuj-SLq1" alt="Kids' Shoes" />
            <h3>Kids' Shoes</h3>Modern Trendy Shoes Sneakers For Men
₹260₹1,29979% off
Size 6, 7, 8, 9, 10
          {/* </Link> */}
        </div>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
}

export default Category;
