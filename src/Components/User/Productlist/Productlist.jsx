





// import React, { useEffect, useState } from 'react';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
// import './Productlist.css';
// import { addtocart, getproducts } from '../../../Services/userApi';
// import { useNavigate } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';

// const Productlist = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const decodedToken = jwtDecode(token);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getproducts();
//         if (response.data.status) {
//           setProducts(response.data.products); 
//         } else {
//           console.log("No products found");
//         }
//       } catch (error) {
//         console.log("Error fetching products", error);
//       }
//     };

//     fetchProducts();
//   }, []);

 

//   const handleAddToCart = async (productId) => {
//     try {
//       const response = await addtocart(productId, decodedToken.id);
      
//       if (response.data.status) {
//         navigate('/cart');  
//       } else {
//         console.log("Failed to add product to cart");
//       }
//     } catch (error) {
//       console.log("Error adding product to cart", error);
//     }
//   };

//   return (
//     <div className="card-container">
//       {products.map(product => (
//         <div key={product._id} className="card">
//           <div className="icons">
//             <FaHeart className="icon heart-icon" />
//             <FaShoppingCart onClick={() => handleAddToCart(product._id)} className="icon cart-icon" />
//           </div>
//           <img
//             src={`http://localhost:4000${product.imageUrl}`}
//             alt={product.productName}
//             className="shoe-image"
//             onClick={() => navigate(`/product/${product._id}`)} // Navigate to Singleproduct page
//           />
//           <div className="card-description">
//             <p style={{ color: 'brown', fontStyle: 'italic' }}>{product.productName}</p>
//             <div className="price">
//               <span className="original-price">₹{product.price}</span>
//             </div>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Productlist;



import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Productlist.css';
import { addtocart, getproducts,addtowishlist } from '../../../Services/userApi';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    let decodedToken;

    if (token) {
      try {
        decodedToken = jwtDecode(token);
      } catch (error) {
        console.error("Invalid token:", error);
        // Handle the error (e.g., redirect to login page)
        navigate('/login');
        return;
      }
    } else {
      // Handle the case where the token is not found (e.g., redirect to login page)
      navigate('/login');
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await getproducts();
        if (response.data.status) {
          setProducts(response.data.products); 
        } else {
          console.log("No products found");
        }
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token");
    let decodedToken;

    if (token) {
      try {
        decodedToken = jwtDecode(token);
      } catch (error) {
        console.error("Invalid token:", error);
      
        navigate('/login');
        return;
      }
    } else {
     
      navigate('/login');
      return;
    }

    try {
      const response = await addtocart(productId, decodedToken.id);
      if (response.data.status) {
        navigate('/cart');  
      } else {
        console.log("Failed to add product to cart");
      }
    } catch (error) {
      console.log("Error adding product to cart", error);
    }
  };
// from addtowishlist
const handleAddToWishlist = async (productId) => {
  const token = localStorage.getItem("token");
  let decodedToken;

  if (token) {
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      console.error("Invalid token:", error);
    
      navigate('/login');
      return;
    }
  } else {
   
    navigate('/login');
    return;
  }

  try {
    const response = await addtowishlist(productId, decodedToken.id);
    if (response.data.status) {
      navigate('/wishlist');  
    } else {
      console.log("Failed to add product to wishlist");
    }
  } catch (error) {
    console.log("Error adding product to wishlist", error);
  }
};


// towishlist
  return (
    <div className="card-container">
      {products.map(product => (
        <div key={product._id} className="card">
          <div className="icons">
            <FaHeart onClick={() => handleAddToWishlist(product._id)}className="icon heart-icon" />
            <FaShoppingCart onClick={() => handleAddToCart(product._id)} className="icon cart-icon" />
          </div>
          <img
            src={`http://localhost:4000${product.imageUrl}`}
            alt={product.productName}
            className="shoe-image"
            onClick={() => navigate(`/product/${product._id}`)} 
          />
          <div className="card-description">
            <p style={{ color: 'brown', fontStyle: 'italic' }}>{product.productName}</p>
            <div className="price">
              <span className="original-price">₹{product.price}</span>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productlist;

