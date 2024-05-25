// // // import React from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import './Singleproduct.css'
// // // function Singleproduct() {
// // //   const { productId } = useParams();

// // //   // Function to render product details based on productId
// // //   const renderProductDetails = () => {
// // //     switch (productId) {
// // //       case '1':
// // //         return (
// // //           <div>
// // //             <h2>Product 1 Details</h2>
// // //             {/* Add product 1 details */}
// // //           </div>
// // //         );
    
// // //       case '2':
// // //         return (
// // //           <div>
// // //             <h2>Product 2 Details</h2>
// // //             {/* Add product 2 details */}
// // //           </div>
// // //         );
// // //       default:
// // //         return (
// // //           <div>
// // //             <h2>Product Details</h2>
// // //             <p>No details available for this product.</p>
// // //           </div>
// // //         );
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {renderProductDetails()}
// // //     </div>
// // //   );
// // // }

// // // export default Singleproduct
// // import React from 'react';
// // import { useParams } from 'react-router-dom';

// // function SingleProductPage() {
// //   const { productId } = useParams();
  
// //   // Fetch product details based on productId
// //   // For simplicity, we'll use static data here
// //   const products = {
// //     1: { name: "kardam&sons Luxury Casual Fashionable Shoes", price: "₹599", store: "Amazon.in" },
// //     2: { name: "Roadster women White & Grey Colourblocked Sneakers", price: "₹759", store: "Myntra" },
// //     3: { name: "women Shoes Online | Latest women Footwear Collection", price: "₹1,999", store: "Fausto" },
// //     4: { name: "MVees Stylish casual Shoes For men Outdoors For Men", price: "₹1,270", store: "Flipkart" }
// //   };

// //   const product = products[productId];

// //   if (!product) {
// //     return <div>Product not found</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>{product.name}</h1>
// //       <p>Price: {product.price}</p>
// //       <p>Store: {product.store}</p>
// //     </div>
// //   );
// // }

// // export default SingleProductPage;
// import React from 'react';
// import './Singleproduct.css';

// function SingleProduct() {
//   const product = {
//     name: "MVees Stylish Casual Shoes For Men",
//     price: "₹1,270",
//     store: "Flipkart",
//     image: "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600",
//     description: "These stylish casual shoes are perfect for any occasion. They are comfortable, durable, and come in a variety of sizes."
//   };

//   return (
//     <div className="single-product-page">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <h1>{product.name}</h1>
//         <p className="product-price">{product.price}</p>
//         <p className="product-store">Available at: {product.store}</p>
//         <p className="product-description">{product.description}</p>
//         <button className="buy-now-button">Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;





import React from 'react';
import './Singleproduct.css';

function Singleproduct() {
  const product = {
    name: "MVees Stylish Casual Shoes For Men",
    price: "₹1,270",
    store: "Flipkart",
    image: "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "These stylish casual shoes are perfect for any occasion. They are comfortable, durable, and come in a variety of sizes.. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items."
  };

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-store">Available at: {product.store}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="action-button add-to-cart">Add to Cart</button>
          <button className="action-button add-to-wishlist">BUY NOW</button>
        </div>
     
      </div>
   
     
    </div>
    

    
  );
}

export default Singleproduct;
