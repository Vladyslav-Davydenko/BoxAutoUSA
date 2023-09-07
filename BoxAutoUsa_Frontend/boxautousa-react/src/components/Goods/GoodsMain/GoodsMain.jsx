import Input from "../../UI/Input/Input"
import GoodsFilterChoice from "../GoodsFilter/GoodsFilterChoice"
import Good from "../Good/Good"
import GoodsFilterRange from "../GoodsFilter/GoodsFilterRange"
import Loader from "../../Loader/Loader"
import useFetch from "../../FetchApi/useFetch"
import { useState, useEffect } from "react"

/*
Component for main part of goods page
*/

export default function GoodsMain({mainData, choiseFilter, priceRange}) {
    const {get, loading} = useFetch("")
    // Hook that will be sent to backend
    const [allFilters, setAllFilters] = useState([])

    // TODO retrieve data from API and append it into useState + using custome useFetch
    useEffect(() => {
      const data = allFilters.filter(group => {
        return group?.values?.length > 0
      })
  }, [allFilters])

    return (
        <main>
            <div className="container-goods">
                <div className="goods-main">
                <div className="goods-filter">
                {
                    choiseFilter.map((filter) => {
                        return (
                            <GoodsFilterChoice 
                            key={filter.name}
                            filters={filter.values} 
                            filterBy={filter.name} 
                            allFilters={allFilters}
                            setAllFilters={setAllFilters}/>
                        )
                    })
                }
                <GoodsFilterRange 
                valueRange={priceRange} 
                rangeBy="Price"
                allFilters={allFilters}
                setAllFilters={setAllFilters}/>
                </div>
                <div>
                    <div className="goods-find">
                        <form action="" className="goods-find-form">
                            <Input placeholder="Find Product" className="goods-find-car" name="search"/>
                            <input type="submit" value="Find" className={"btn btn--raised main-search-submit"}/>
                        </form>
                    </div>
                    
                    {mainData.length <= 0 && <p id="no-goods" className="text--lg">Currently there is no pproducts here</p>}

                    {!loading && <div className="goods-loader"><Loader /></div>}

                    <div className="goods">
                            {mainData.map(singleData => {
                                return <Good singleData={singleData} key={singleData.id}/>
                            })}
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}