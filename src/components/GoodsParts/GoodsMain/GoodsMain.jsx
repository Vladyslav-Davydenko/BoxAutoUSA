import React, { useState, useEffect } from "react";
import Input from "../../UI/Input/Input";
import GoodsFilterChoice from "../GoodsFilter/GoodsFilterChoice";
import GoodsFilterRange from "../GoodsFilter/GoodsFilterRange";
import Loader from "../../Loader/Loader";
import useGoodsFilter from "../../../helper/useGoodsFilter/useGoodsFilter";
import Good from "../Good/Good.jsx"

export default function GoodsMain({ mainData, choiseFilter, priceRange }) {
    const [allFilters, setAllFilters] = useState([]);
    const goodsPerPage = 6;
    const {
    visibleGoods,
    searchFilter,
    setSearchFilter,
    isLoading,
    handlePrevClick,
    handleNextClick,
    currentPage,
    setCurrentPage,
    pages,
    } = useGoodsFilter(mainData, goodsPerPage);


  useEffect(() => {
    const data = allFilters.filter((group) => {
      if (group.values.min) return true;
      return group?.values?.length > 0;
    });
    if (data.length > 0) console.log(data);
  }, [allFilters]);

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
                            <Input placeholder="Find Product" className="goods-find-car" name="search" values={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}/>
                            {/* <input type="submit" value="Find" className={"btn btn--raised main-search-submit"}/> */}
                        </form>
                    </div>
                    
                    {(visibleGoods.length <= 0 && !isLoading) && <p id="no-goods" className="text--lg">Currently there is no such products here</p>}

                    {isLoading && <div className="goods-loader"><Loader /></div>}

                    <div className="goods">
                            {visibleGoods.map(singleData => {
                                return <Good singleData={singleData} key={singleData.id}/>
                            })}
                    </div>
                </div>
                </div>
            </div>
            <div className="goods-pagination">
                {(currentPage !== pages[0] && pages[0]) && <span onClick={handlePrevClick} className="btn btn--raised">Prev</span>}
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
                {(currentPage !== pages.at(-1) && pages.at(-1)) && <span onClick={handleNextClick} className="btn btn--raised">Next</span>}
            </div>
        </main>
    )
}