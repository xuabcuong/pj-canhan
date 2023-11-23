import Slider from "react-slick";
import"./banner.scss"

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2500,
    };
const Banner =() =>{
    return( 
    <div className="banner-parent" >
        <div className="banner">
            <Slider {...settings}>
                <div className="banner-item">
                    <div className="banner-content">

                    <h2>Don’t miss amazinggrocery deals</h2>
                    <span>Sign up for the daily newsletter</span>
                    </div>
                </div>
                <div className="banner-item1">
                    <div className="banner-content">

                    <h2>Fresh Vegetables</h2>
                    <span>Sign up for the daily newsletter</span>
                    </div>
                    </div>
            </Slider>
                </div>
                    <div className="mail flex j-center">
                        <input type="text" placeholder="Your mail adress" />
                    <button className="bt-email">Subscribe</button>
                    </div>


        </div> 
       
    )
}
export default Banner