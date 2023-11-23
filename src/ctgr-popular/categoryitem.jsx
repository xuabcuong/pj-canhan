const CtgrItem =({name,img,badge})=>{
    return(
        <li>
          <a href="">
           {img &&  <img src={img} alt="" />}
            <span className="text-name">{name}</span>
            <span className="badges">{badge} </span>
            </a>  

        </li>
    )
}
export default CtgrItem