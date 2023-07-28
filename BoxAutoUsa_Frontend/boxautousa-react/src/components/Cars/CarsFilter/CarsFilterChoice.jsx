export default function CarsFilterChoice(props){

    const {filters, filterBy, selectedFilters, setSelectedFilters} = props

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
                    to={`${filterBy.toLowerCase().replace(/\s/g, "")}/${selectedFilters.join(",")}`}
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