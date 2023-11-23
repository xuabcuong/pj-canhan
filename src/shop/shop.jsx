

  const Shop =({img,text,quantity}) => {
    return(
        <div className=" shops">
            
        <img src={img} alt="" />
        
        <h3>{text}</h3>
        <span>{quantity}</span>

        </div>
    )}
  
  export default Shop