import "./Popular-card.scss"
import Card from "./popular-card";
import { useState } from "react";
const products =[
    {
        id:1,
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-1-2.jpg",
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-1-1.jpg",
        leftbadge:"out of stock",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"13%",
        rightbadgecollor:"",
        title:"Seeds of Change Organic Red Rice",
        category:"Fresh Fruit",
        provider:"NestFood",
        oldprice:"$28.85",
        newprice:"$32.80",
        rating:2,
    },
    {
        id:2,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-2.jpg",
        leftbadge:"6%",
        leftbadgecolor:"var( --blue-color)",
        rightbadge:"sale",
        rightbadgecollor:"var(--primary-color)",
        title:"All Natural Style Chicken Meatballs",
        category:"Bread and Juice",
        provider:"NestFood",
        oldprice:"$52.85",
        newprice:"$55.80",
        rating:5,
    },
    {
        id:3,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-3-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-3-2.jpg",
        leftbadge:"8%",
        leftbadgecolor:"var( --blue-color)",
        rightbadge:"new",
        rightbadgecollor:"var( --blue-color)",
        title:"Angie’s Sweet & Salty Kettle Corn",
        category:"Baking material",
        provider:" Country Crock",
        oldprice:"$48.85",
        newprice:"$52.80",
        rating:4,
    },
    {
        id:4,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-4-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-4-2.jpg",
        leftbadge:"Out of Stock",
        leftbadgecolor:"var( --primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Foster Farms Takeout Crispy Classic",
        category:"Baking material",
        provider:" Country Crock",
        oldprice:"$48.85",
        newprice:"$52.80",
        rating:0,
    },
    {
        id:5,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-5-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-5-2.jpg",
        leftbadge:"Out of Stock",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Blue Almonds Lightly Salted Vegetables",
        category:"Fresh Fruit",
        provider:"Country Crock",
        oldprice:"$23.85",
        newprice:"$25.80",
        rating:4,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-6-1.jpg   ",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-6-2.jpg",
        leftbadge:"",
        leftbadgecolor:"",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Chobani Complete Vanilla Greek Yogurt",
        category:"Fresh Fruit",
        provider:"Country Crock",
        oldprice:"$54.85",
        newprice:"$55.80",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-10-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-10-2.jpg",
        leftbadge:"8%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Haagen Caramel Cone Ice Cream Boxed",
        category:"Baking material",
        provider:"Hambger Hel",
        oldprice:"$24.80",
        newprice:"$22.85",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-9-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-9-2.jpg",
        leftbadge:"8%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Gorton’s Beer Battered Fish Fillets",
        category:"Fresh Seafood",
        provider:"Hambger Hel",
        oldprice:"$25.80",
        newprice:"$23.85",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-8-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-8-2.jpg",
        leftbadge:"6%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Encore Seafoods Stuffed Alaskan",
        category:"Clothing & beauty",
        provider:"Hambger Hel",
        oldprice:"$37.80",
        newprice:"$35.85",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-7-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-7-2.jpg",
        leftbadge:"4%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Extra virgin olive oil, canola oil, nonfat",
        category:"Baking material",
        provider:"Totino's Pizza",
        oldprice:"$60.00",
        newprice:"$58.00",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-12-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-12-2.jpg",
        leftbadge:"6%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Frozen vegetables broccoli, spinach",
        category:"Baking material",
        provider:" Totino's Pizza",
        oldprice:"$75.00",
        newprice:"$71.00",
        rating:4,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-16-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-16-2.jpg",
        leftbadge:"2%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"var(--primary-color)",
        title:"Nestle Coffee Mate Coffee Creamer",
        category:"Baking material",
        provider:" Totino's Pizza",
        oldprice:"$53.80",
        newprice:"$52.80",
        rating:4,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-11-1.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-11-2.jpg",
        leftbadge:"27%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"",
        title:"Dried fruit: apricots, figs, prunes",
        category:"Baking material",
        provider:" USA Noodle Soup",
        oldprice:"$76.00",
        newprice:"$56.00",
        rating:0,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-20-7-min.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-20-7-min.jpg",
        leftbadge:"9%",
        leftbadgecolor:"var(--ornage-color)",
        rightbadge:"Sale",
        rightbadgecollor:"var(--primary-color)",
        title:"Nuts almonds, cashew, pecans",
        category:"Baking material",
        provider:" Snyder's-Lanc",
        oldprice:"$121.00",
        newprice:"$111.00",
        rating:4,
    },
    {
        id:1,
        img1:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-5-min.jpg",
        img2:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-5-min.jpg",
        leftbadge:"2%",
        leftbadgecolor:"var(--primary-color)",
        rightbadge:"",
        rightbadgecollor:"var(--primary-color)",
        title:"Nestle Coffee Mate Coffee Creamer",
        category:"Baking material",
        provider:" Totino's Pizza",
        oldprice:"$53.80",
        newprice:"$52.80",
        rating:4,
    },
   
    

]
// const App = () => {
    
//     const [selectedProductId, setSelectedProductId] = useState(null);
  
//     const handleButtonClick = productId => {
//       setSelectedProductId(productId);
//     };}
//     const selectedProduct = products[setSelectedProductId];
const Listcard = ()=>{
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleButtonClick = (productId) => {
      
      setSelectedProductId
  setSelectedProductId(productId);
    };
  
    // Filter products based on the selected category
    const filteredProducts =
      selectedProductId === null
        ? products 
   
  // If no category selected, show all products
        : products.filter((product) => product.id === selectedProductId);
  
    
  
    ret
    return(
   <div className="container ">
   <div className=" popular flex container j-between">
            <h2> Popular Products</h2>
            <nav className="flex">
                <p className="all-popular">All</p>
            <ul className="flex">
                <li><button onClick={()=>handleButtonClick(1)} href="">Baking material</button></li>
                <li><button onClick={() => handleButtonClick(2)} href="">Fresh Fruits</button></li>
                <li><button onClick={() => handleButtonClick(3)} href="">Meats</button></li>
                <li><button onClick={() => handleButtonClick(4)} href="">Vegetables</button></li>
            </ul>
            </nav>
        
    <div className="list-card row flex j-between">

       {filteredProducts.map(val =>(
        < Card key={val.id} img1={val.img1} img2={val.img2} id={val.id} leftbadge={val.leftbadge} rightbadge={val.rightbadge} leftbadgecolor={val.leftbadgecolor} rightbadgecollor={val.rightbadgecollor} title={val.title} category={val.category} provider={val.provider} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating}/>
       ))}
    </div>
    
            

   </div>
</div>)
            }
export default Listcard ;