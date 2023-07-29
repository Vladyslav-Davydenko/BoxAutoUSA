import { useEffect, useState } from "react";

export default function CarsFilterChoice(props){
    const {filters, filterBy, allFilters, setAllFilters} = props
    let by = filterBy.replace(/\s/g, "");
    by = by.slice(0, 1).toLowerCase() + by.slice(1)

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
        let filters = allFilters.filter(gruop => gruop.filter !== by)
        if(selectedFilters.length > 0){
            setAllFilters([...filters, {
                "filter": by,
                "values": selectedFilters
            }])
        }
    }, [selectedFilters])

    return(
        <div className="filter">
        <h2 className="title--sm">{filterBy}</h2>
    <ul className="filter-category">
        {filters.map((car) => {
            return(
                <li key={car}>
                    <a
                    className="filter-link" 
                    onClick={handleFilterClicked} 
                    >
                    {car}
                    </a>
                    </li>
            )
        })}
    </ul>
    </div>
    )
}