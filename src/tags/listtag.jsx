import Tags from "./tags"
import"./tags.scss"

const content =[
    {
    img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-4-min.jpg",
    content:"Organic Cage Grade A Large Eggs",
    oldprice:"$24.00",
    rating:1,
    newprice:"$21.00",
},
{
    img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-16-1.jpg",
    content:"Naturally Flavored Cinnamon Vanilla",
    oldprice:"$55.00",
    rating:1,
    newprice:"$51.00",
},
{
    img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-2-min.jpg",
    content:"Nestle Coffee Mate Coffee Creamer",
    oldprice:"$53.80",
    rating:1,
    newprice:"$52.80",
},
{
    img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/product-20-5-min.jpg",
    content:"Organic Cage Grade A Large Eggs",
    oldprice:"$43.80",
    rating:1,
    newprice:"$41.80",
},
{
    img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/product-2-1.jpg",
    content:"Nestle Original Mate Coffee Creamer",
    oldprice:"$24.00",
    rating:1,
    newprice:"$21.00",
},
]
const Listtags =()=>{
    return(
        <div>
            <div className="list-tag ">
                <p class="ads-p">Products</p>
                {content.map(val=>(
                    <Tags img={val.img} content={val.content} oldprice={val.oldprice} newprice={val.newprice} rating={val.rating} />
                ))}
            </div>
        </div>
    )
}
export default Listtags