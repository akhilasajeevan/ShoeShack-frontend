
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

export default Home



