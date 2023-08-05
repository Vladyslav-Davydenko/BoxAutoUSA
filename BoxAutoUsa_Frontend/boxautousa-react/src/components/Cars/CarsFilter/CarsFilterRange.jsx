import { useState, useEffect } from "react"
import Input from "../../UI/Input/Input";

//TODO: try to update code using lodash debounce
//TODO: add the ability to show errors based on user inputs
//TODO: No Bike, try to resolve problems with library downloadings
//TODO: add the ability to clear filters

/*
Component that is responsible for price range slider
It was better to use existing library like react-slider
*/

export default function CarsFilterRange(props){
    const {valueRange, rangeBy, allFilters, setAllFilters} = props
    let by = rangeBy.replace(/\s/g, "");
    by = by.slice(0, 1).toLowerCase() + by.slice(1)
    const {minValue, maxValue, step} = valueRange
    const progressRange = document.querySelector(`#progress-${by}`)
    const minInput = document.querySelector(".min")
    const maxInput = document.querySelector(".max")
    const [currentMinValue, setCurrentMinValue] = useState(minValue)
    const [currentMaxValue, setCurrentMaxValue] = useState(maxValue)
    const [isMinValid, setIsMinValid] = useState(true)
    const [isMaxValid, setIsMaxValid] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

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
        if (parseInt(event.target.value) < currentMinValue + step){
            setCurrentMaxValue(currentMinValue + step)
        }
        else{
            setCurrentMaxValue(parseInt(event.target.value))
        }
    }

    // Every change of the data is checked and styles adjusts based on the inputs
    useEffect(() => {
        if(progressRange){
            if(currentMinValue >= minValue && currentMinValue < maxValue && currentMinValue <= currentMaxValue - step){
                setIsMinValid(true)
                minInput.style.border = "2px solid var(--gray)"
                progressRange.style.left = ((currentMinValue / maxValue) * 100) + "%"
            }
            else{
                setIsMinValid(false)
                minInput.style.border = "2px solid var(--error)"
                progressRange.style.left = "0%"
            }
            if(currentMaxValue > minValue && currentMaxValue <= maxValue && currentMaxValue >= currentMinValue + step){
                setIsMaxValid(true)
                maxInput.style.border = "2px solid var(--gray)"
                progressRange.style.right = (100 - (currentMaxValue / maxValue) * 100) + "%"
            }
            else{
                setIsMaxValid(false)
                maxInput.style.border = "2px solid var(--error)"
                progressRange.style.right = "0%"
            }
        }
    },[currentMinValue, currentMaxValue])

    // Data is prepared to be send to backend only after 1s from last changes
    useEffect(() => {
        // Used Debounce for the maintenance reason
        if(isMounted){
            const timer = setTimeout(() => {
                if(isMinValid && isMaxValid){
                    let filters = allFilters.filter(group => group.filter !== by)
    
                    setAllFilters([...filters, {
                        "filter": by,
                        "min": currentMinValue,
                        "max": currentMaxValue
                    }])
                }
            }, 1000)
    
            return () => {
                clearTimeout(timer)
            }
        } else{
            setIsMounted(true)
        }

    }, [isMaxValid, isMinValid, currentMinValue, currentMaxValue])

    return(
        <div className="filter">
            <h2 className="title--sm">{rangeBy}</h2>
            <div className="range">
                {/* <div className="error-range-message">
                    <span className="min-error text--err"></span>
                    <span className="max-error text--err"></span>
                </div> */}
                <div className="range-grid">
                    <div className="range-column">
                        <Input 
                        placeholder="Min" 
                        type="number" 
                        value={isNaN(currentMinValue) ? "" : currentMinValue} 
                        className="range-input min" 
                        onChange={handleMinInputChange}
                        min={minValue}
                        max={isNaN(currentMaxValue) ? maxValue : currentMaxValue - step}
                        step={step}
                        id={"range-input-min-" + by}/>
                    </div>
                    <span className="range-dash">-</span>
                    <div className="range-column">
                        <Input 
                        placeholder="Max" 
                        type="number" 
                        value={isNaN(currentMaxValue) ? "" : currentMaxValue}
                        className="range-input max" 
                        onChange={handleMaxInputChange}
                        max={maxValue}
                        min={isNaN(currentMinValue) ? minValue : currentMinValue + step }
                        step={step}
                        id={"range-input-max-" + by}/>
                    </div>
                </div>
                <div className="range-slider">
                    <div className={"range-progress "} id={"progress-" + by}></div>
                </div>
                <div className="range-slider-inputs">
                    <input 
                    type="range" 
                    className="range-min" 
                    min={minValue} 
                    max={maxValue} 
                    value={isNaN(currentMinValue) ? minValue : currentMinValue}
                    step="10000"
                    onChange={handleMinRangeChange}/>
                    <input 
                    type="range" 
                    className="range-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={isNaN(currentMaxValue) ? maxValue : currentMaxValue}
                    step="10000"
                    onChange={handleMaxRangeChange}/>
                </div>
            </div>
        </div>
    )
}