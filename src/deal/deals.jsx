import Deal from "./deal"
import "./deal.scss"

const ListDeal = [
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/03/banner-5-min.png",
        content:"Organic Cage Grade A Large  Eggs",
        provider:" Hambger Hel",
        oldprice:"$24.00",
        newprice:"$21.00",
    },
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/03/banner-6-min.png",
        content:"Naturally Flavored Cinnamon Vanillas",
        provider:" Hambger Hel",
        oldprice:"$51.00",
        newprice:"$55.00",
    },
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/03/banner-7-min.png",
        content:"Seeds of Change Organic Watermelon",
        provider:" Hambger Hel",
        oldprice:"$61.50",
        newprice:"$66.00",
    },
    {
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/03/banner-8-min.png",
        content:"Nestle Coffee Mate Coffee Creamer",
        provider:" Hambger Hel",
        oldprice:"$52.80",
        newprice:"$53.80",
    },
    
]

const Deals =() =>{
    return(
        
        <div className="deals flex row">
           {ListDeal.map(val =>
            <Deal img={val.img}  content={val.content} provider={val.provider} oldprice={val.oldprice} newprice={val.newprice}/>
            )}
        </div>
    )
}
export default Deals