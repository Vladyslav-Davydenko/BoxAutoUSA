import { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";

//TODO: fix the bug with selecting the filter choice (WORK NOT ONLY CLICKING ON THE NAME)

/*
Component for filtering type choice
*/
export default function CarsFilterChoice(props){
    const {filters, filterBy, allFilters, setAllFilters} = props
    let by = filterBy.replace(/\s/g, "");
    by = by.slice(0, 1).toLowerCase() + by.slice(1)

    const [selectedFilters, setSelectedFilters] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    // Update selectedFilters based on chosen parameters
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

    // Function to clear selected choices and delete checked styling from list items
    function handleFilterClear(){
        setSelectedFilters([])
        document.querySelectorAll(`.${by}`).forEach(element => {
          element.classList.remove("checked")
        })
    }

    // Preparing data to be sent to backend
    useEffect(() => {
        let filters = allFilters.filter(gruop => gruop.filter !== by)
        if(isMounted){
            setAllFilters([...filters, {
                "filter": by,
                "values": selectedFilters
            }])
        }
        else{
            setIsMounted(true)
        }
    }, [selectedFilters])

    return(
        <div className="filter">
        <h2 className="title--sm">{filterBy}</h2>
        {selectedFilters.length > 0 && 
            <div className="clear-button">
                <Button
                    className="btn--clear choice-clear"
                    onClick={handleFilterClear}
                >
                    Clear
                </Button>
            </div>}
    <ul className="filter-category">
        {filters.map((car) => {
            return(
                <li key={car}>
                    <a
                    className={"filter-link " + by}
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