// import App from "../App"
import"./C_header.scss" 
import logo from "../assets/img/logo.png"
import cheader1 from"../assets/img/cheader1.png"
import cheader2 from"../assets/img/cheader2.png"
import cheader3 from"../assets/img/cheader3.png"
import cheader4 from"../assets/img/cheader4.png"
const C_header =()=>{
    return( 
    <div className="C_header ">
        <div className="container flex">
<a href=""><img src={logo} alt="" /></a>
<div className="search flex j-between">
    <input  type="text"placeholder="Search for products..." />
    <button className="btn-search">Search</button>
</div>
<button className="became ">BECAME VEDOR <i class="fa-solid fa-arrow-right"></i> </button>
<nav className="menu flex  ">
<ul className="flex a-center j-between ">
    <li><a  className="flex a-center  " href=""><img src={cheader1} alt="" /> Compare</a><span className="flex j-center a-center">0</span></li>
    <li><a className="flex a-center  " href=""><img src={cheader2} alt="" />Wishlist</a><span className="flex j-center a-center">0</span></li>
    <li><a className="flex a-center  " href=""><img src={cheader3} alt="" />Cart</a><span className="flex j-center a-center">0</span></li>
    <li><a className="flex a-center  " href=""><img src={cheader4} alt="" />Account</a>
    </li>
</ul></nav>
</div> 
    </div>
    )
}
export default C_header