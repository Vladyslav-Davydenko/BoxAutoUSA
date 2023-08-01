import { useState } from "react"
import Input from "../../UI/Input/Input";

export default function CarsFilterRange(props){
    const {valueRange, rangeBy} = props
    const minValue = valueRange.min
    const maxValue = valueRange.max
    const [currentMinValue, setCurrentMinValue] = useState(minValue)
    const [currentMaxValue, setCurrentMaxValue] = useState(maxValue)

    const handleSliderChange = (values) => {
        setCurrentMinValue(values[[0]])
        setCurrentMaxValue(values[1])
    }

    const handleMinInputChange = (event) => {
        setCurrentMinValue(parseInt(event.target.value))
    }

    const handleMinRangeChange = (event) => {
        setCurrentMinValue(parseInt(event.target.value))
    }

    const handleMaxInputChange = (event) => {
        setCurrentMaxValue(parseInt(event.target.value))
    }

    const handleMaxRangeChange = (event) => {
        setCurrentMaxValue(parseInt(event.target.value))
    }

    return(
        <div className="filter">
            <h2 className="title--sm">{rangeBy}</h2>
            <div className="range">
                <div className="range-grid">
                    <div className="range-column">
                        <Input 
                        placeholder="Min" 
                        type="number" 
                        value={currentMinValue} 
                        className="range-input" 
                        onChange={handleMinInputChange}
                        min={minValue}/>
                    </div>
                    <span className="range-dash">-</span>
                    <div className="range-column">
                        <Input 
                        placeholder="Max" 
                        type="number" 
                        value={currentMaxValue} 
                        className="range-input" 
                        onChange={handleMaxInputChange}
                        max={maxValue}/>
                    </div>
                </div>
                <div className="range-slider">
                    <div className="range-progress"></div>
                </div>
                <div className="range-slider-inputs">
                    <input 
                    type="range" 
                    className="range-min" 
                    min={minValue} 
                    max={maxValue} 
                    value={currentMinValue}
                    onChange={handleMinRangeChange}/>
                    <input 
                    type="range" 
                    className="range-min" 
                    min={minValue} 
                    max={maxValue} 
                    value={currentMaxValue}
                    onChange={handleMaxRangeChange}/>
                </div>
            </div>
        </div>
    )
}