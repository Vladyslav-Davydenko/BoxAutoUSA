import { useState, useEffect } from "react";

function useGoodsFilter(mainData, goodsPerPage) {
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastGood = currentPage * goodsPerPage
  const indexOfFirstGood = indexOfLastGood - goodsPerPage
  const visibleGoods = filteredGoods.slice(indexOfFirstGood, indexOfLastGood)
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getTotalPages = (amount, data) => {
    const numOfTotalPages = Math.ceil(data.length / amount);
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
    return pages;
  };

  useEffect(() => {
    setIsLoading(true);
    setFilteredGoods([]);
    const timer = setTimeout(() => {
      const filterDATA = mainData.filter((product) => {
        return product.name.toLowerCase().includes(searchFilter.toLowerCase());
      });
      setFilteredGoods(filterDATA);
      setPages(getTotalPages(goodsPerPage, filterDATA));
      setCurrentPage(1)
      setIsLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchFilter]);

  const handlePrevClick = () => {
    if (currentPage !== pages.at(0)) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage !== pages.at(-1)) setCurrentPage(currentPage + 1);
  };

  return {
    visibleGoods,
    searchFilter,
    setSearchFilter,
    isLoading,
    handlePrevClick,
    handleNextClick,
    currentPage,
    setCurrentPage,
    pages,
  };
}

export default useGoodsFilter;
