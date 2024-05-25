// import React from "react";
// import "./Home.css";
// import {img3} from "../Home"
// function Home() {
//   return (
//     <div  >
//        <div id="image">
//         <img src={img3} alt="" className="img" />
      
     
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React from "react";
// import "./Home.css";

// import Image from "Image.png";
// function Home() {
//   return (
//     <div>
//       <div id="image">
//         <img src={Image.png} alt="" className="img" />
//       <h2>hello gud mng</h2>  
//       </div>
//     </div>
//   );
// }
// export default Home
import React from "react";
import "./Home.css";
import img3 from "../Home/img3.jpg"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductList from "../Productlist/Productlist";
function Home() {
  return (
    <div >
      
      
      <div id="image">
        <Header/>
        <img src={img3} alt="" className="img" />
        <ProductList/>
        <Footer/>
     </div>
    </div>
    
  );
}

export default Home;
