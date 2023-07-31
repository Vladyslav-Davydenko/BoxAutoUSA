import { useState } from "react"
import Input from "../../UI/Input/Input";

export default function CarsFilterRange(props){
    const {priceRange} = props
    const [minPrice, setMinPrice] = useState(priceRange.min);
    const [maxPrice, setMaxPrice] = useState(priceRange.max)

    const handleSliderChange = (values) => {
        setMinPrice(values[[0]])
        setMaxPrice(values[1])
    }

    const handleMinInputChange = (event) => {
        setMinPrice(parseInt(event.target.value))
    }

    const handleMaxInputChange = (event) => {
        setMaxPrice(parseInt(event.target.value))
    }

    return(
        <div className="filter">
            <h2 className="title--sm">Price Range</h2>
            <div className="range">
                <div className="range-grid">
                    <div className="range-column">
                        <Input 
                        placeholder="Min" 
                        type="number" 
                        value={minPrice} 
                        className="range-input" 
                        onChange={handleMinInputChange}
                        min={priceRange.min}/>
                    </div>
                    <span className="range-dash">-</span>
                    <div className="range-column">
                        <Input 
                        placeholder="Max" 
                        type="number" 
                        value={maxPrice} 
                        className="range-input" 
                        onChange={handleMaxInputChange}
                        max={priceRange.max}/>
                    </div>
                </div>
                <div className="range-slider">
                    <div className="range-progress"></div>
                </div>
            </div>
        </div>
    )
}