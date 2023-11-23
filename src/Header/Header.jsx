
import App from "../App"
import"./header.scss" 
import Img from "../assets/img/img.png"

const Header =() =>{
  return(
    <div className="top-header">
      <div className="container  flex j-between">
      <nav >
        <ul className= "flex list-main">
          <li><a href="">About Us</a></li>
          <li><span></span><a href="">My Account</a></li>
          <li><span></span><a href="">Wishlist</a></li>
          <li><span></span><a href="">Order Tracking</a></li>
          </ul>
        </nav>
        <p>Supper Value Deals - Save more with coupons</p>
        <span className="flex">Need help? Call Us:
        <a href="">+1800900122</a>
        <ul className="flex language">
          <li><a href="">English<i className="fa-solid fa-angle-down"></i></a>
          <ul className="dropdown">
          <li><a href=""><img src={Img} alt="" />francais </a></li>
            <li><a href=""><img src={Img} alt="" />deutch </a></li>
            <li><a href=""><img src={Img} alt="" />sdfasd </a></li></ul></li>
          <li><a href="">INR <i className="fa-solid fa-angle-down"></i></a><ul className="dropdown">
            <li><a href=""><img src={Img} alt="" />francais </a></li>
            <li><a href=""><img src={Img} alt="" />deutch </a></li>
            <li><a href=""><img src={Img} alt="" />sdfasd </a></li></ul></li>
        </ul></span>
    </div>
  
    </div>

  )
    
  
}
  export default Header
  