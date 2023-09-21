import { useState, useEffect } from "react"

export default function useGoodsRangeFilter(valueRange, rangeBy) {
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
    
    return {
        currentMinValue,
        currentMaxValue,
        handleMinInputChange,
        handleMaxInputChange,
        handleMinRangeChange,
        handleMaxRangeChange,
        isMinValid,
        isMaxValid
    }
}