import Listproduct from "./listproduct"
import "./listproduct.scss"
const topsealing=[
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg",
        content:"All Natural Style Chicken Meatballs",
        oldprice:"$55.80",
        rating:2,
        newprice:"$52.85",
    }, 
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-3-1.jpg",
        content:"Angie’s Sweet & Salty Kettle Corn",
        oldprice:"$58.00",
        rating:2,
        newprice:"$48.00",
    },
     {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-9-1.jpg",
        content:"Gorton’s Beer Battered Fish Fillets",
        oldprice:"$25.80",
        rating:0,
        newprice:"$23.85",
    },
    
    
]
const TrendingProducts=[
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-2-min.jpg",
        content:"Seeds of Change Organic Watermelon",

        oldprice:"$66.00",
        rating:1,
        newprice:"$61.50",
    }, 
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-16-1.jpg",
        content:"Frozen vegetables broccoli, spinach",

        oldprice:"$75.00",
        rating:1,
        newprice:"$71.00",
    },
     {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-9-1.jpg",
        content:"Gorton’s Beer Battered Fish Fillets",
        oldprice:"$25.80",
        rating:0,
        newprice:"$23.85",
    },
    
    
]
const Recentlyadded=[
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-1-1.jpg",
        content:"Seeds of Change Organic Watermelon",
        oldprice:"$32.80",
        rating:1,
        newprice:"$28.85",
    }, 
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg",
        content:"Frozen vegetables broccoli, spinach",
        oldprice:"$24.00",
        rating:3,
        newprice:"$21.00",
    },
     {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-3-1.jpg",
        content:"Angie’s Sweet & Salty Kettle Corn",
        oldprice:"$52.80",
        rating:2,
        newprice:"$48.85",
    },
    
    
]
const TopRated=[
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg",
        content:"Seeds of Change Organic Red Rice",
        oldprice:"$24.00",
        rating:1,
        newprice:"$21.00",
    }, 
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-5-1.jpg",
        content:"All Natural Style Chicken Meatballs",
        oldprice:"$23.85    ",
        rating:1,
        newprice:"$25.80",
    },
     {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-4-min.jpg",
        content:"Organic Cage Grade A Large Eggs",
        oldprice:"$24.00",
        rating:1,
        newprice:"$21.00",
    },
    
    
]



const Listproducts =()=>{
    return(
        <div className="Listproducts flex container row"  >
            <div className="topsealing col-xs-12 col-md-6 col-lg-4 col-xl-3">
                  <p class="ads-p">Top Selling</p>
                {topsealing.map(val=>(
                    <Listproduct img={val.img} content={val.content} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating} />
                ))}
            </div>
            <div className="topsealing col-xs-12 col-md-6 col-lg-4 col-xl-3">

                  <p class="ads-p">Trending Products</p>
                {TrendingProducts.map(val=>(
                    <Listproduct img={val.img} content={val.content} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating} />
                ))}
            </div>
            <div className="topsealing col-xs-12 col-md-6 col-lg-4 col-xl-3">

                  <p class="ads-p">Recently added</p>
                {Recentlyadded.map(val=>(
                    <Listproduct img={val.img} content={val.content} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating} />
                ))}
            </div>
            <div className="topsealing col-xs-12 col-md-6 col-lg-4 col-xl-3">

                  <p class="ads-p">Top Rated</p>
                {TopRated.map(val=>(
                    <Listproduct img={val.img} content={val.content} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating} />
                ))}
            </div>
        </div>
        
        
    )
}
export default Listproducts