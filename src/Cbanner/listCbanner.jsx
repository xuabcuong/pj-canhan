import Cbanner from "./Cbanner"
import"./Cbanner.scss"
const Ctn=[
    {
        key:"",
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/banner-1.png",
        ctn:"Everyday Fresh & Clean with Our Products",
    },
    {
        key:"",
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/banner-2.png",
        ctn:"Make your Breakfast Healthy and Easy",
    },  {
        key:"",
        img:"https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/banner-3.png",
        ctn:"The best Organic Products Online",
    },
]
const Lcbanne = () => {
    return(
        <div className="Lcbanne container row flex">
            {Ctn.map(val =><Cbanner
             img={val.img} ctn={val.ctn}/>) }
        </div>
    )}
    export default Lcbanne