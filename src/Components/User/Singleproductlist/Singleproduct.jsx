
// // import React from 'react';
// // import './Singleproduct.css';

// // function Singleproduct() {
// //   return (
// //     <div className="single-product-page">
// //       <div className="product-image">
// //         <div id='imgdiv'>
// //           <img src="https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600" alt="MVees Stylish Casual Shoes For Men" />
// //         </div>
// //         {/* <i className="fas fa-heart wishlist-heart"></i> */}
// //       </div>
// //       <div className="product-details">
// //         <h1>MVees Stylish Casual Shoes For Men</h1>
// //         <p className="product-price">₹1,270</p>
// //         <p className="product-store">Available at: ShoeShack</p>
// //         <p className="product-description">
// //           These stylish casual shoes are perfect for any occasion. They are comfortable, durable, and come in a variety of sizes. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items.
// //         </p>
// //         <div className="product-actions">
// //           <button className="action-button add-to-cart">
// //             <i className="fas fa-shopping-cart"></i> Add to Cart
// //           </button>
// //           <button className="action-button add-to-wishlist">
// //             Buy Now
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Singleproduct;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Singleproduct.css';
// import { getProductById } from '../../../Services/userApi'; // Assuming this function exists

// const Singleproduct = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await getProductById(productId);
//         if (response.data.status) {
//           setProduct(response.data.product);
//         } else {
//           console.log("Product not found");
//         }
//       } catch (error) {
//         console.log("Error fetching product", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="single-product-page">
//       <div className="product-image">
//         <div id='imgdiv'>
//           <img src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
//         </div>

//       </div>
//       <div className="product-details">
//         <h1>{product.productName}</h1>
//         <p className="product-price">₹{product.price}</p>
//         <p className="product-store">Available at: {product.storeName}</p>
//         <p className="product-description">
//           {product.description}
//         </p>
//         <div className="product-actions">
//           <button className="action-button add-to-cart">
//             <i className="fas fa-shopping-cart"></i> Add to Cart
//           </button>
//           <button className="action-button add-to-wishlist">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Singleproduct;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Singleproduct.css';
import { getProductById } from '../../../Services/userApi';

const Singleproduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        if (response.data.status) {
          setProduct(response.data.product);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-product-page">
      <div className="product-image">
        <div id='imgdiv'>
          <img src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
        </div>
      </div>
      <div className="product-details">
        <h1>{product.productName}</h1>
        <p className="product-price">₹{product.price}</p>
        <p className="product-store">Available at: {product.storeName}</p>
        <p className="product-description">
          {product.description}
        </p>
        <div className="product-actions">
          <button className="action-button add-to-cart">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button className="action-button add-to-wishlist">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;


