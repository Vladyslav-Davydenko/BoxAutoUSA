import { useState, useEffect } from "react"

export default function useAllFilters({allFilters, setAllFilters, currentMaxValue, currentMinValue, isMaxValid, isMinValid}) {
    const [isMounted, setIsMounted] = useState(false)

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
}