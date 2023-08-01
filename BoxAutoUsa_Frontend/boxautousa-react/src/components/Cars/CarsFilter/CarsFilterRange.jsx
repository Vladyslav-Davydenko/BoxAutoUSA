import { useState, useEffect } from "react"
import Input from "../../UI/Input/Input";

export default function CarsFilterRange(props){
    const {valueRange, rangeBy} = props
    const {minValue, maxValue, step} = valueRange
    const [currentMinValue, setCurrentMinValue] = useState(minValue)
    const [currentMaxValue, setCurrentMaxValue] = useState(maxValue)

    const handleMinInputChange = (event) => {
        setCurrentMinValue(parseInt(event.target.value))
    }

    const handleMinRangeChange = (event) => {
        if (parseInt(event.target.value) > currentMaxValue - step){
            setCurrentMinValue(currentMaxValue - step)
        }
        else{
            setCurrentMinValue(parseInt(event.target.value))
        }
    }

    const handleMaxInputChange = (event) => {
        setCurrentMaxValue(parseInt(event.target.value))
    }

    const handleMaxRangeChange = (event) => {
        if (parseInt(event.target.value) < currentMinValue - step){
            setCurrentMaxValue(currentMinValue + step)
        }
        else{
            setCurrentMaxValue(parseInt(event.target.value))
        }
    }

    useEffect(() => {
        const progressRange = document.querySelector(".range-progress")
        progressRange.style.left = ((currentMinValue / maxValue) * 100) + "%"
        progressRange.style.right = (100 - (currentMaxValue / maxValue) * 100) + "%"
    },[currentMinValue, currentMaxValue])

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
                        min={minValue}
                        max={currentMaxValue - step}
                        step={step}/>
                    </div>
                    <span className="range-dash">-</span>
                    <div className="range-column">
                        <Input 
                        placeholder="Max" 
                        type="number" 
                        value={currentMaxValue} 
                        className="range-input" 
                        onChange={handleMaxInputChange}
                        max={maxValue}
                        min={currentMinValue + step}
                        step={step}/>
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
                    step="10000"
                    onChange={handleMinRangeChange}/>
                    <input 
                    type="range" 
                    className="range-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={currentMaxValue}
                    step="10000"
                    onChange={handleMaxRangeChange}/>
                </div>
            </div>
        </div>
    )
}