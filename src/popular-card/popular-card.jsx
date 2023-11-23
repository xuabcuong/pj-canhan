import Badge from "./badge"

const Card = ({img1,img2,leftbadge,leftbadgecolor,rightbadge,rightbadgecollor ,title, category,provider,oldprice,newprice ,rating})=>{
    return(
        
            
  
  
        <div className=" col-md-6 col-xl-2-a col-xs-12 col-lg-4 col-sm-6">
            <div className="card">

            {leftbadge && <Badge isleft content={leftbadge } style={{background:leftbadgecolor}} />}
             
            {rightbadge && <Badge  content={rightbadge} style={{background:rightbadgecollor}} />}
         
            <div className="card-img">
                 <img src={img1}alt="" className="card-img1" /> 
                 <img src={img2} alt=""className="card-img2" />

            </div>
            <div className="content-popular">
                <a  href="">{category}</a>
                <h2>
                    {title}
                    </h2>
                        <div className="raiting">
                            {[...Array(5)].map((val,index)=>{
                                return index <= rating-1 ? (<i key={index} class="fa-solid fa-star"></i>) :
                                ( <i class="fa-regular fa-star"></i>)})}
                            
                          
                            <span>1</span>
                        </div>
                        <div className="provider">
                            By 
                            <a href="">{provider}</a>
                            </div>
                            <div className="flex">
                                <div  className="flex">

                                    <div className="new-price">{newprice}</div>
                                    <div className="old-price">{oldprice}</div>
                            </div>
                                <button><i class="fa-solid fa-cart-shopping"></i>Add</button>
                        </div>
            </div>
        </div>
        </div>
        
    )
}
export default Card