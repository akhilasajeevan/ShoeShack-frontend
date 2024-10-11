// // // // // import React from 'react

// // import React from 'react';
// // import './Wishlist.css';
// // import { Link } from 'react-router-dom';

// // const Wishlist = () => {
// //     const wishlistItems = [
// //         { id: 1, name: 'High Heels Shoes stock', price: 20.00, discountPrice: 18.00, stockStatus: 'In Stock', dateAdded: 'December 5, 2019', image: 'https://media.istockphoto.com/id/184967562/photo/high-heels-shoes.jpg?s=1024x1024&w=is&k=20&c=HzlHjqI_ZNC7LVrKipSgbuesC_RQ1eniZnfVJiDq_WU=' },
// //         { id: 2, name: 'Colorful, purple sneakers isolated over white studio background', price: 16.00, stockStatus: 'In Stock', dateAdded: 'December 6, 2019', image: 'https://media.istockphoto.com/id/1411635454/photo/colorful-purple-sneakers-isolated-over-white-studio-background-comfortable-shoes-sport.jpg?s=1024x1024&w=is&k=20&c=i4NQm8jW0rfrXDD8dQSdaker9XZpgngPrsGbxQfdj_M=' },
// //         { id: 3, name: 'Black Leather Shoes On White Background', price: 20.00, discountPrice: 18.00, stockStatus: 'In Stock', dateAdded: 'December 6, 2019', image: 'https://media.istockphoto.com/id/1839636111/photo/black-leather-shoes-on-white-background.jpg?s=1024x1024&w=is&k=20&c=bv_MUmA2KB4wnm12ak-6KGtZJvi8Xh1pK2Hnc2UhyN4=' },
// //     ];

// //     return (
// //         <div className="header__container">
// //             <h1 className="header__title">My Wishlist</h1>
// //             <table className="header__table">
// //                 <thead>
// //                     <tr>
// //                         <th>Product Image</th>
// //                         <th>Product Name</th>
// //                         <th>Unit Price</th>
// //                         <th>Stock Status</th>
// //                         <th></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {wishlistItems.map(item => (
// //                         <tr key={item.id}>
// //                             <td><img src={item.image} alt={item.name} className="header__product-image" /></td>
// //                             <td>{item.name}</td>
// //                             <td>
// //                                 {item.discountPrice ? (
// //                                     <>
// //                                         <span className="header__original-price">Rs.{item.price.toFixed(2)}</span>
// //                                         <span className="header__discount-price">Rs.{item.discountPrice.toFixed(2)}</span>
// //                                     </>
// //                                 ) : (
// //                                     <span>Rs.{item.price.toFixed(2)}</span>
// //                                 )}
// //                             </td>
// //                             <td>{item.stockStatus}</td>
// //                             <td>
// //                                 <button className="header__add-to-cart-btn"><Link to="/cart">Add to cart</Link></button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default Wishlist;



// import React, { useEffect, useState } from 'react';
// import './Wishlist.css';
// import { Link } from 'react-router-dom';
// import { getwishlist } from '../../../Services/userApi';
// import {jwtDecode} from 'jwt-decode';

// const Wishlist = () => {
//     const token = localStorage.getItem("token");
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.id;

//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWishlistItems = async () => {
//             try {
//                 const response = await getwishlist(userId);
//                 if (response.data.status) {
//                     setWishlistItems(response.data.isWishlisted);
//                 } else {
//                     console.log("No items in wishlist");
//                 }
//             } catch (error) {
//                 console.error("Error fetching wishlist items", error);
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchWishlistItems();
//     }, [userId]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error loading wishlist</div>;
//     }

//     return (
//         <div className="header__container">
//             <h1 className="header__title">My Wishlist</h1>
//             <table className="header__table">
//                 <thead>
//                     <tr>
//                         <th>Product Image</th>
//                         <th>Product Name</th>
//                         <th>Unit Price</th>
//                         <th>Stock Status</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {wishlistItems.map(item => (
//                         <tr key={item.product._id}>
//                             <td><img src={`http://localhost:4000${item.product.imageUrl}`} alt={item.product.productName} className="header__product-image" /></td>
//                             <td>{item.product.productName}</td>
//                             <td>
//                                 {item.product.discountPrice ? (
//                                     <>
//                                         <span className="header__original-price">Rs.{item.product.price.toFixed(2)}</span>
//                                         <span className="header__discount-price">Rs.{item.product.discountPrice.toFixed(2)}</span>
//                                     </>
//                                 ) : (
//                                     <span>Rs.{item.product.price.toFixed(2)}</span>
//                                 )}
//                             </td>
//                             <td>{item.product.stockStatus}</td>
//                             <td>
//                                 <button className="header__add-to-cart-btn"><Link to="/cart">Add to cart</Link></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Wishlist;


import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import { Link } from 'react-router-dom';
import { getwishlist } from '../../../Services/userApi'; // Adjust the path as needed
import {jwtDecode} from 'jwt-decode';

const Wishlist = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;

  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await getwishlist(userId);
        if (response.data.status) {
          setWishlistItems(response.data.isWishlisted);
        } else {
          console.log("No items in wishlist");
        }
      } catch (error) {
        console.error("Error fetching wishlist items", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading wishlist</div>;
  }

  return (
    <div className="header__container">
      <h1 className="header__title">My Wishlist</h1>
      <table className="header__table">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map(item => (
            <tr key={item.product._id}>
              <td>
                <img src={`http://localhost:4000${item.product.imageUrl}`} alt={item.product.productName} className="header__product-image" />
              </td>
              <td>{item.product.productName}</td>
              <td>
                {item.product.discountPrice ? (
                  <>
                    <span className="header__original-price">Rs.{item.product.price.toFixed(2)}</span>
                    <span className="header__discount-price">Rs.{item.product.discountPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span>Rs.{item.product.price.toFixed(2)}</span>
                )}
              </td>
              <td>{item.product.stockStatus}</td>
              <td>
                <button className="header__add-to-cart-btn">
                  <Link to="/cart">Add to cart</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;


