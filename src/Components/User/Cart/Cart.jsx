




import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getcart, removecartitem, updatecartitem, addtocart } from '../../../Services/userApi'; 
import { jwtDecode } from 'jwt-decode';

const Cart = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getcart(decodedToken.id); 
        if (response.data.status) {
          setCartItems(response.data.cartItems); 
        } else {
          console.log("No items in cart");
        }
      } catch (error) {
        console.log("Error fetching cart items", error);
      }
    };

    fetchCartItems();
  }, [decodedToken.id]);

  const handleRemove = async (userId, productId) => {
    try {
      const response = await removecartitem(userId, productId);
      if (response.data.status) {
        setCartItems(response.data.cartItems);
      } else {
        console.log("Failed to remove item from cart");
      }
    } catch (error) {
      console.log("Error removing item from cart", error);
    }
  };

  const handleQuantityChange = async (userId, itemId, quantity) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
  
    try {
      const response = await updatecartitem(userId, itemId, quantity);
      if (response.data.status) {
        setCartItems(cartItems.map(item => 
          item.product._id === itemId ? { ...item, quantity } : item
        ));
      } else {
        console.log("Failed to update item quantity");
      }
    } catch (error) {
      console.log("Error updating item quantity", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const existingItem = cartItems.find(item => item.product._id === productId);
      if (existingItem) {
        console.log("Item already in cart");
        return; // Item already in the cart, don't add again
      }

      const response = await addtocart(decodedToken.id, productId, quantity);
      if (response.data.status) {
        setCartItems(response.data.cartItems);
      } else {
        console.log("Failed to add item to cart");
      }
    } catch (error) {
      console.log("Error adding item to cart", error);
    }
  };

  const totalAmount = cartItems.reduce((total, item) => 
    total + (parseFloat(item.product.price) || 0) * (item.quantity || 1), 0
  );
  const totalOriginalPrice = cartItems.reduce((total, item) => 
    total + (parseFloat(item.product.originalPrice) || 0) * (item.quantity || 1), 0
  );
  const totalDiscount = totalOriginalPrice - totalAmount;

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map(item => {
          const price = parseFloat(item.product.price) || 0;
          const originalPrice = parseFloat(item.product.originalPrice) || 0;
          const quantity = item.quantity || 1;

          return (
            <div key={item.product._id} className="cart-item">
              <img src={`http://localhost:4000${item.product.imageUrl}`} alt={item.product.productName} className="item-image" />
              <div className="item-details">
                <div className="item-name">{item.product.productName}</div>
                <div className="item-description">{item.product.description}</div>
                <div className="item-size">Size: {item.product.size || 'N/A'}</div>
                <div className="item-seller">Seller: {item.product.seller || 'N/A'}</div>
                <div className="item-price-details">
                  <span className="original-price">₹{originalPrice.toFixed(2)} x {quantity} = ₹{(originalPrice * quantity).toFixed(2)}</span>
                  <span className="item-price">₹{price.toFixed(2)} x {quantity} = ₹{(price * quantity).toFixed(2)}</span>
                  {/* <span className="item-discount">{item.discount || 'No discount'}</span> */}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(decodedToken.id, item.product._id, quantity - 1)}>-</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => handleQuantityChange(decodedToken.id, item.product._id, parseInt(e.target.value, 10))}
                    min="1"
                  />
                  <button onClick={() => handleQuantityChange(decodedToken.id, item.product._id, quantity + 1)}>+</button>
                </div>
                <div className="item-total-price">
                  Total: ₹{(price * quantity).toFixed(2)}
                </div>
                <div className="item-actions">
                  <button className="save-for-later">SAVE FOR LATER</button>
                  <button className="remove-button" onClick={() => handleRemove(decodedToken.id, item.product._id)}>REMOVE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-details">
        <h2>PRICE DETAILS</h2>
        <div className="price-breakdown">
          <div>Price ({cartItems.length} items): ₹{totalOriginalPrice.toFixed(2)}</div>
          {/* <div>Discount: -₹{totalDiscount.toFixed(2)}</div> */}
          <div>Delivery Charges: Free</div>
          <div className="total-amount">Total Amount: ₹{totalAmount.toFixed(2)}</div>
          {/* <div className="total-savings">You will save ₹{totalDiscount.toFixed(2)} on this order</div> */}
        </div>
        <button className="place-order-button">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
