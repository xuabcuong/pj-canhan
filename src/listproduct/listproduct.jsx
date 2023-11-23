
const Listproduct =({img, content, oldprice, newprice, rating})=>{
    return(
        <div className="tags content">
            <div className="flex ">
                <img src={img} />
                
           <div className="content">

                <p>{content}</p>
                
                <div className="raiting">
                            {[...Array(5)].map((val,index)=>{
                                return index <= rating-1 ? (<i key={index} class="fa-solid fa-star"></i>) :
                                ( <i class="fa-regular fa-star"></i>)})}
                            
                            
                            
                           
                           
                        </div>
                <span className="op-tag">{oldprice}</span>
                <span className="np-tag">{newprice}</span>  
           </div>
                </div>        
                
        </div>
    )
}
export default Listproduct                 