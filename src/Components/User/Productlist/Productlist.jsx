// import React from 'react'
// import './Productlist.css'
// import { Link} from 'react-router-dom';
// function ProductList() {
  
//   return (
//     <div className="product-list">
//       <div className="gallery">
//       <Link to="/product-details/1">
//         {/* <a target="_blank" href="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600"> */}
//           <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cinque Terre" width="300" height="200" />
//         {/* </a> */}
//         </Link>
//         <div className="desc">kardam&sons Luxury Casual Fashionable Shoes
//           ₹599
//           Amazon.in</div>
//       </div>

//       <div className="gallery">
//       <Link to="/product-details/1">
//         {/* <a target="_blank" href="https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600"> */}
//           <img src="https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Forest" width="300" height="200" />
//         {/* </a> */}
//         </Link>
//         <div className="desc">Roadster women White & Grey Colourblocked Sneakers by Myntra
//           ₹759
//           Myntra</div>
//       </div>

//       <div className="gallery">
//       <Link to="/product-details/1">
//         {/* <a target="_blank" href="https://images.pexels.com/photos/2965276/pexels-photo-2965276.jpeg?auto=compress&cs=tinysrgb&w=600"> */}
//           <img src="https://images.pexels.com/photos/2965276/pexels-photo-2965276.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Northern Lights" width="300" height="200" />
//         {/* </a> */}
//         </Link>
//         <div className="desc">women Shoes Online | Latest women Footwear Collection | Fausto-In 7
//           ₹1,999
//           Fausto</div>
//       </div>

//       <div className="gallery">
//         <Link to="/product-details/1">
//         {/* <a target="_blank" href="https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600"> */}
//           <img src="https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mountains" width="300" height="200" />
//         {/* </a> */}
//         </Link>
//         <div className="desc">MVees Stylish casual Shoes For men Outdoors For Men -- Shop Online for
//           ₹1,270
//           Flipkart</div>
//       </div>
//     </div>
//   );
// }

// export default ProductList;






import React from 'react';
import './Productlist.css';
import { Link } from 'react-router-dom';
function ProductList() {
  return (
    <div className="product-list">
      <div className="gallery">
        <Link to="/product-details/1">
          <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cinque Terre" width="300" height="200" />
        </Link>
        <div className="desc">kardam&sons Luxury Casual Fashionable Shoes ₹599 Amazon.in</div>
      </div>

      <div className="gallery">
        <Link to="/product-details/2">
          <img src="https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Forest" width="300" height="200" />
        </Link>
        <div className="desc">Roadster women White & Grey Colourblocked Sneakers by Myntra ₹759 Myntra</div>
      </div>

      <div className="gallery">
        <Link to="/product-details/3">
          <img src="https://images.pexels.com/photos/2965276/pexels-photo-2965276.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Northern Lights" width="300" height="200" />
        </Link>
        <div className="desc">women Shoes Online | Latest women Footwear Collection | Fausto-In 7 ₹1,999 Fausto</div>
      </div>

      <div className="gallery">
        <Link to="/product-details/4">
          <img src="https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mountains" width="300" height="200" />
        </Link>
        <div className="desc">MVees Stylish casual Shoes For men Outdoors For Men -- Shop Online for ₹1,270 Flipkart</div>
      </div>
      
    </div>
  );
}

export default ProductList;
