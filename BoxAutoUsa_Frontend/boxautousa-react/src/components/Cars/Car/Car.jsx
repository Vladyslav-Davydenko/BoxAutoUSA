export default function Car({car}){

    return(
        <div className="models">
        <div className="good">
        <img src={car.image} alt="car" width="300"
        height="200" className="good-image"/>
        <div className="car-details">
            <p className="car-name text">{car.name}</p><span className="car-year text--sm">{car.year}</span>
            <p className="car-price text--lg">{car.price}</p>
            <div className="car-place">
                <div className="car-data">
                <p className="car-country">USA</p>
                <p className="car-day">Today</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}