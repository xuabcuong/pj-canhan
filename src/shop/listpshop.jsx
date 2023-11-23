import Slider from "react-slick";
import Shop from "./shop";
import "./shop.scss"
const settings = {
    dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };

  const content=[
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-2.png",
        text:"Milks and Dairies",
        quantity:"2 items",

    },
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-1.png",
        text:"Wines & Alcohol",
        quantity:"2 items",

    },
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-3.png",
        text:"Pet Foods & Toy",
        quantity:"4 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-4.png",
        text:"Clothing & Beauty",
        quantity:"7 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-5.png",
        text:"  Packaged fast   food",
        quantity:"6 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-6.png",
        text:"Baking material",
        quantity:"5 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-7.png",
        text:"Vegetables & tubers",
        quantity:"4 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-8.png",
        text:"Fresh Seafood",
        quantity:"2 items",

    },{
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/category-9.png",
        text:"Baking material",
        quantity:"1 items",

    },

  ]
  const Listshop =() => {
    return(
        <div className="listshop container">
            <div className="flex asd">

            <h2>Shop by Categories</h2>
          
          <a href="">All Categories <i class="fa-solid fa-angle-right"></i></a>
            
            </div>
<Slider {...settings}>

            {content.map(val =>
                <Shop img={val.img} text={val.text} quantity={val.quantity}/>
            )} </Slider>
        </div>
    )}
  
  export default Listshop