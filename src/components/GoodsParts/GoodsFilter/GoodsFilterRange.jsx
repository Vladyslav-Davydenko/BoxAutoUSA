import { useState, useEffect } from "react"
import Input from "../../UI/Input/Input";
import useGoodsRangeFilter from "../../../helper/useGoodsRangeFilter/useGoodsRangeFilter";

//TODO: try to update code using lodash debounce
//TODO: add the ability to show errors based on user inputs
//TODO: No Bike, try to resolve problems with library downloadings

/*
Component that is responsible for price range slider
It was better to use existing library like react-slider
*/

export default function GoodsFilterRange(props){
    const {valueRange, rangeBy, allFilters, setAllFilters} = props
    const {minValue, maxValue, step} = valueRange
    let by = rangeBy.replace(/\s/g, "");
    by = by.slice(0, 1).toLowerCase() + by.slice(1)
    const [isMounted, setIsMounted] = useState(false)
    const { 
        currentMinValue,
        currentMaxValue,
        handleMinInputChange,
        handleMaxInputChange,
        handleMinRangeChange,
        handleMaxRangeChange,
        isMinValid,
        isMaxValid
    } = useGoodsRangeFilter(valueRange, rangeBy)

    // Data is prepared to be send to backend only after 1s from last changes
    useEffect(() => {
        // Used Debounce for the maintenance reason
        if(isMounted){
            const timer = setTimeout(() => {
                if(isMinValid && isMaxValid){
                    let filters = allFilters.filter(group => group.filter !== by)
    
                    setAllFilters([...filters, {
                        "filter": by,
                        "values": {
                            "min": currentMinValue,
                            "max": currentMaxValue
                        }
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
                    step={step}
                    onChange={handleMinRangeChange}/>
                    <input 
                    type="range" 
                    className="range-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={isNaN(currentMaxValue) ? maxValue : currentMaxValue}
                    step={step}
                    onChange={handleMaxRangeChange}/>
                </div>
            </div>
        </div>
    )
}