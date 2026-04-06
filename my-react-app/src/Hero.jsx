import pic from "./assets/pic.png"
export default function Hero(){
    return(
        <div className="hero">
            <div className="heroCard">
                <img className="heroPic" src={pic} altname="heropic"/>
                <div className="heroDisc">
                    

                </div>
            </div>
            <div className = "heroDesc">
                <h1>AUSTINE</h1>
                <p>Digital Solutions for Real Life Problems</p>
            </div>
        </div>
    )
}