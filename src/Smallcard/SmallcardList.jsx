import Smallcard from "./Smallcard"
import "./Smallcard.scss"
const ctn=[
        {
         img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/icon-1.png",
         quantity:"Orders $50 or more",
         p:"Best prices & offers",
        },
        {
            img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/icon-2.png",
            p:"Free delivery",
            quantity:"24/7 amazing services",
        }, 
        {
            img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/icon-3.png",
            p:"Great daily deal",
            quantity:"When you sign up",
        },
        {
            img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/icon-4.png",
            p:"Wide assortment",
            quantity:"Mega Discounts",
         },
         {
            img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/icon-5.png",
            p:"Easy returns",
            quantity:"Within 30 days",
         },
]
const Smallcardlist =() =>{
    return(
        <div className="">

        
        <div className=" flex sm-card-list container row">
            {ctn.map(val =>
                <Smallcard img={val.img} p={val.p} quantity={val.quantity} />
                )}

        </div></div>
    )
}
export default Smallcardlist