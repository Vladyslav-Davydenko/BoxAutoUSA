export default function CarsFilterChoice({cars}){

    return(
        <div className="filter">
        <h2 className="title--sm">Car Model</h2>
    <ul className="filter-category">
        <li><a href="#" className="filter-link">Aston Martin</a></li>
        {cars.map((car) => {
            return(
                <li key={car.id}><a href="#" className="filter-link">{car.name}</a></li>
            )
        })}
    </ul>
    </div>
    )
}