
import "./Bt_header.scss"
import btheader1 from"../assets/img/bt-header1.png"
import btheader2 from"../assets/img/bt-header2.png"
import btheader3 from"../assets/img/bt-header3.png"
import { useRef } from "react"
import Categorylist from "../categoryitem/categorylist"
import Dropdownshop from "../dropdownShop/dropdownShop"
import Drdmegamenu from "../dropdownShop/drdmegamenu"


const Bt_header =() =>{

    const catagoryRef=useRef()
    const handleClick =() =>{
      const opacity = catagoryRef.current.style.opacity
    
      if(!opacity || opacity == 0) {
        catagoryRef.current.style.opacity = 1;
        catagoryRef.current.style.visibility ="visible"
      }else{
        catagoryRef.current.style.opacity = 0;
        catagoryRef.current.style.visibility ="hidden"
      }
  
    }

    return(
        <div className="bt_header"> 
        
<div>



     
            <div className="btheader container flex ">
                <button  onClick={handleClick} className="bt-Categories flex  a-center" > <img src={btheader3} alt="" />Browse All Categories <i class="fa-solid fa-angle-down"></i>
                <div className="catagorilist" ref={catagoryRef}>

<Categorylist />
</div></button>
                <div className="hot-deals flex a-center">
                   
                    <p><a className="flex a-center" href="">  <img src={btheader2} alt="" />Hot Deals</a></p>
                </div>
                <nav className="flex list-bth a-center"><ul className="flex a-center">
                
                <li>
                  
                    <div className="dropdown-sm"> 
                    <ul>
                    <li><a href="">home1</a></li>
                    <li><a href="">home2</a></li>
                    <li><a href="">home3</a></li>
                    <li><a href="">home4</a></li>
                    <li><a href="">home5</a></li>
                    <li><a href="">home6</a></li>
                    <li><a href="">home7</a></li>
                    <li><a href="">home8</a></li>
                    <li><a href="">home9</a></li>
                    </ul>
                    </div> <a href="">Home <i class="fa-solid fa-angle-down"></i></a></li>
                <li><a href="">About</a></li>
                <li className="shop" ><a href="">Shop <i className="fa-solid fa-angle-down"></i></a>
                <div className="dropdown-shop ">
                    <Dropdownshop/>
                </div>
                </li>
                <li  className="shop"><a href="">Mega Menu <i class="fa-solid fa-angle-down"></i></a>
                <div className="dropdown-mega ">
                   <Drdmegamenu />
                </div>
                </li>
                <li>
                <div className="dropdown-sm"><ul>
                    <li><a href="">My Orders</a></li>
                    <li><a href="">Store Details</a></li>
                    <li><a href="">Store Listing</a></li>
                    <li><a href="">Dashboard</a></li>
                    </ul> </div><a href="">Vendors <i class="fa-solid fa-angle-down"></i></a></li>
                <li> 
                <div className="dropdown-sm"><ul>
                    <li><a href="">Blog Grid</a></li>
                    <li><a href="">Blog List</a></li>
                    <li><a href="">Blog Big</a></li>
                    <li><a href="">Blog Wide</a></li>
                    <li><a href="">Single Blog</a></li>
                    </ul> </div>
                    <a href="">Blog <i class="fa-solid fa-angle-down"></i></a></li>
                <li> 
                <div className="dropdown-sm"><ul>
                    <li><a href="">about</a></li>
                    <li><a href="">My account</a></li>
                    <li><a href="">Shop Compare</a></li>
                    <li><a href="">Shop Wishlist</a></li>
                    <li><a href="">Shop Cart</a></li> 
                    <li><a href="">Checkout</a></li> 
                    <li><a href="">Privacy Policy</a></li> <li><a href="">Refund And Returns Policy</a></li>
                    </ul> </div>
                    <a href="">Pages <i class="fa-solid fa-angle-down"></i></a></li>
                <li><a href="">Contact</a></li>
                </ul></nav>
                <div className="contact flex a-center">
                    <img src={btheader1} alt="" />
                    <div className="hotline"><a href="">1900888123</a>
                    <span>24/7 Support Center</span></div>
                </div>
            </div>
           
        </div>
        
        </div>
    )
}
export default Bt_header
