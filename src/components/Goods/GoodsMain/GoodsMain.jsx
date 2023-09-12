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
    const [allFilters, setAllFilters] = useState([])
    const goodsPerPage = 6
    const numOfTotalPages = Math.ceil(mainData.length /goodsPerPage)
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1)
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastGood = currentPage * goodsPerPage
    const indexOfFirstGood = indexOfLastGood - goodsPerPage
    const visibleGoods = mainData.slice(indexOfFirstGood, indexOfLastGood)

    useEffect(() => {
      const data = allFilters.filter(group => {
        if(group.values.min) return true
        return group?.values?.length > 0
      })
      if(data.length > 0)
      console.log(data)
  }, [allFilters])

  const handlePrevClick = (e) => {
    if(currentPage !== pages.at(0)) setCurrentPage(currentPage - 1)
  }

  const handleNextClick = (e) => {
    if(currentPage !== pages.at(-1)) setCurrentPage(currentPage + 1)
  }

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
                            {visibleGoods.map(singleData => {
                                return <Good singleData={singleData} key={singleData.id}/>
                            })}
                    </div>
                </div>
                </div>
            </div>
            <div className="goods-pagination">
                {currentPage !== pages[0] && <span onClick={handlePrevClick} className="btn btn--raised">Prev</span>}
                { pages.length > 1 &&
                    pages.map(page => {
                        return (
                        <span 
                        key={page} 
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "btn btn--raised active" : "btn btn--raised"}>
                        {page}
                        </span>
                        )
                    })
                }
                {currentPage !== pages.at(-1) && <span onClick={handleNextClick} className="btn btn--raised">Next</span>}
            </div>
        </main>
    )
}