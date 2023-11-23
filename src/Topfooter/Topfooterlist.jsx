 import "./Topfooter.scss"
import logo from "../assets/img/logo.png"
import Topfooter from "./Topfooter"
 
const Li =[
        {
         h3:"Company",
         li1:"About Us",
         li2:"Delivery Information",
         li3:"Terms & Conditions",
         li4:"Contact Us",
         li5:"Support Center",
         li6:"Privacy Policy",
         li7:"Careers",
         
        },
        {
            h3:"Account",
            li1:"Sign In",
            li2:"View Cart",
            li3:"My Wishlist",
            li4:"Track My Order",
            li5:"Help Ticket",
            li6:"Shipping Details",
            li7:"Compare products",
            
           }, {
            h3:"Corporate",
            li1:"Become a Vendor",
            li2:"Affiliate Program",
            li3:"Farm Business",
            li4:"Farm Careers",
            li5:"Our Suppliers",
            li6:"Accessibility",
            li7:"Promotions",
            
           }, {
            h3:"Popular",
            li1:"Milk & Flavoured Milk",
            li2:"Butter and Margarine",
            li3:"Eggs Substitutes",
            li4:"Marmalades",
            li5:"Sour Cream and Dips",
            li6:"Tea & Kombucha",
            li7:"Cheese",
            
           },
]

const Topfooterlist=()=>{
    return(
        <div className="Topfooterlist container flex j-between row">
            <div className="">
            <div className="logo-address">
            <a href=""><img src={logo} alt="" /></a>
            <p>Awesome grocery store website template</p>
            <nav>
                <ul>
                <li><i class="fa-solid fa-location-dot"></i>Address 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                <li><i class="fa-solid fa-headphones"></i>Call Us <a href="">(+91)-540-025-124553</a></li>
                <li><i class="fa-regular fa-envelope"></i>Email <a href="">sale@Nest.com</a></li>
                <li><i class="fa-regular fa-clock"></i>Hours 10:00 - 18:00, Mon - Sat</li>
                </ul>
            </nav>
            </div>
            </div>
        
              {Li.map(val =>
                <Topfooter 
                h3={val.h3}
                li1={val.li1}
                li2={val.li2}
                li3={val.li3}
                li4={val.li4}
                li5={val.li5}
                li6={val.li6}
                li7={val.li7}
                
                 />
                )}
         
            <div className="install ">
                <h3>Install App</h3>
                <span>From App Store or Google Play</span>
                <div className="flex j-between">
                    <img src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/google-play.jpg" alt="" />
                    <img src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/app-store.jpg" alt="" />
                </div>
                    <p>Secured Payment Gateways</p>
                    <img className="install-img" src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/payment-method.png" alt="" />
            </div>
        </div>
      
    )
}
export default Topfooterlist