import {Link} from "react-router-dom"
import { useState, useEffect} from "react";

export default function CarsFilterChoice(props){
    const {filters, filterBy} = props
    const [selectedFilters, setSelectedFilters] = useState([])

    function handleFilterClicked(selectedCategory) {
        selectedCategory.preventDefault()
        const carFilter = selectedCategory.target.textContent.toLowerCase().replace(/\s/g, "")
        if(selectedFilters.includes(carFilter)){
            let filters = selectedFilters.filter(el => el !== carFilter)
            setSelectedFilters(filters)
            selectedCategory.target.classList.remove("checked")
        } else{
            setSelectedFilters([...selectedFilters, carFilter])
            selectedCategory.target.classList.add("checked")
        }
    }

    useEffect(() => {
        console.log(selectedFilters)
    }, [selectedFilters])

    return(
        <div className="filter">
        <h2 className="title--sm">{filterBy}</h2>
    <ul className="filter-category">
        {filters.map((car) => {
            return(
                <li key={car}>
                    <Link 
                    className="filter-link" 
                    onClick={handleFilterClicked} 
                    to={`${filterBy.toLowerCase().replace(/\s/g, "")}/${selectedFilters.join(",")}`}
                    >
                    {car}
                    </Link>
                    </li>
            )
        })}
    </ul>
    </div>
    )
}