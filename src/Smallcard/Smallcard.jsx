

const Smallcard =({img, p, quantity}) =>{
    return(
        <div className="ol-md-6 col-xl-2-a col-xs-12 col-lg-4 col-sm-6">
        <div className="sm-card flex a-center ">
            <img src={img}alt="" />
            <div className="sm-card-ctn">

            <p>{p}</p>
            <span>{quantity}</span>
            </div>
        </div></div>
    )
}
export default Smallcard