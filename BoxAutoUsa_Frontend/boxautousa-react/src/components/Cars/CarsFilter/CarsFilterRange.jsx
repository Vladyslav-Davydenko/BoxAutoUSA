import { useState } from "react"
// import Slider from "react-slider"

export default function CarsFilterRange(){
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2_000_000)

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
            <p>Min Price: ${minPrice ?? 0}</p>
            <p>Max Price: ${maxPrice}</p>
            {/* <Slider
                min={0}
                max={100000}
                step={1000}
                value={[minPrice, maxPrice]}
                onChange={handleSliderChange}
            /> */}
            <div>
                <label>
                Min Price:
                <input type="number" value={minPrice} onChange={handleMinInputChange} />
                </label>
                <label>
                Max Price:
                <input type="number" value={maxPrice} onChange={handleMaxInputChange} />
                </label>
            </div>
        </div>
    )
}