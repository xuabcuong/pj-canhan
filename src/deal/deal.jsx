const Deal =({img, content, oldprice, newprice, rating, provider}) =>{
    return( 
        <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="deal">
            <img src={img} alt="" />
            <div className="content-deal">
                <p>{content}</p>
                    <div className="provider flex a-center">bye 
                        <p>{provider}</p>
                    </div>
                
           

            <div className="price flex j-between">
                <div>

                <span  className="oldprice">
                    {oldprice}
                </span>
                <span className="newprice">{newprice}</span>
                </div>
                <button>Add</button>
            </div></div>
        </div> </div>
    )
}
export default Deal