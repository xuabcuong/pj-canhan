const Cbanner = ({img,ctn})=>{
    return(
        
        <div className="col-xs-12 col-md-6 col-xl-4">
        <div className="Cbanner">
            <img src= {img}alt="" />
            <div className="ctn">

            <span> {ctn}</span>
            <button>Shop Now</button>
            </div>
            <div className="bg-cbanner"></div>
        </div></div>
    )
}
export default  Cbanner
