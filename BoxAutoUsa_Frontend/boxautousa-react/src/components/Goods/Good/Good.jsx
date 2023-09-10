import { Link } from "react-router-dom"

/*
Component to generate one unit of the goods
*/
export default function Good({singleData}){

    return(
        <Link to={"/product/" + singleData.id} className="detailed-goods-link">
            <div className="models">
                <div className="good">
                    <img src={singleData.image} alt={singleData.name} width="300"
                    height="200" className="good-image"/>
                        <div className="good-details">
                                <p className="good-name text">{singleData.name}</p><span className="car-year text--sm">{singleData.year}</span>
                                <p className="good-price text--lg">{singleData.price}</p>
                            <div className="good-place">
                            <div className="good-data">
                                <p className="good-country">USA</p>
                                <p className="good-day">Today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}