import"./btbanner.scss"
const Btbanner =()=>{
    return(
        <div className="btbanner container">
            <div className="ctn">

                <h2>Stay home & get your daily needs from our shop</h2>
                <p>Start Your Daily Shopping with <a href=""> Nest Mart</a></p>
                <div className="mail flex j-between">
                        <input type="text" placeholder="Your mail adress" />
                    <button className="bt-email">Subscribe</button>
            </div>
        </div>
            </div>
    )
}
export default Btbanner