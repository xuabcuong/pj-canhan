const CategoryItem =({name,img,badge})=>{
    return(
        <li>
          <a href="">
           {img &&  <img src={img} alt="" />}
            <span className="text-name">{name}</span>
            <span className="badge">{badge} </span>
            </a>  

        </li>
    )
}
export default CategoryItem