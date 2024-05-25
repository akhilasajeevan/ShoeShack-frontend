import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div >
      <div id='footermain'>

      <footer>
    <div class="container">
        <div class="footer-column">
            <h3>TOP CATEGORIES</h3>
           
          
            <ul>
                <li><a href="#">Men Boots</a></li>
                <li><a href="#">Women Boots</a></li>
                <li><a href="#">Boat shoes</a></li>
                <li><a href="#"></a></li>
                <li><a href="#">Yellow Boots</a></li>
            </ul>
        </div>
        <div class="footer-column">
        <h3> HELP</h3>
       
            <p>Delivery</p>
            <p>Returns</p>
            <p>Secure Payments</p>
            <p>Track an Order</p>
            <p>Contact Us</p>
        </div>
        <div class="footer-column">
        <h3> ABOUT US</h3>
            {/* <ul class="social-media">
                <li><a href="#"> Careers<i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            </ul> */}

            <p>careers</p>
            <p>Terms and conditions of sale</p>
            <p>Privacy Policy</p>
            <p>Responsibility</p>
            
        </div>
        <div class="footer-column">
<h3>   FEED BACK</h3>
<p>Leave a feedback</p>

        </div>
    </div>
</footer>




    </div>
      



     
    </div>
  )
}

export default Footer
