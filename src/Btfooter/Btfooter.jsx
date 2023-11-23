import "./Btfooter.scss"

const Btfooter =()=>{
    return(
        <div className="Btfooter"> 
        <div className=" container flex j-between"> 
        <p>
        © 2022, Nest – WordPress Ecommerce Template
All rights reserved
        </p>
        <div className="flex">

        <div className="hotline flex">
            <img src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/phone-call.png" alt="" />
            <div>
                <a href="">1900646666</a>
                <span>Working 8:00 - 22:00</span>
            </div>
        </div>
        <div className="hotline flex">
            <img src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/phone-call.png" alt="" />
            <div>
                <a href="">1900648888</a>
                <span>24/7 Support Center</span>
            </div>
        </div>
        </div>

        <div className="follwup">
            <div className="flex j-end a-center">

            <p>Follow Us</p>
            <ul className="icon flex">
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i> </a></li>
                <li><a href=""><i class="fa-brands fa-skype"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
            </div>
            <span>Up to 15% discount on your first subscribe</span>
        </div>

        </div></div>
    )
}
export default Btfooter