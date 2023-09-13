import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import GoodsMain from "./GoodsMain/GoodsMain"
import { useSelector } from "react-redux/es/hooks/useSelector"

/*
Component to connect parts of the goods page
*/

export default function Goods({generatedData}){
  function getData(data) {
    if(data === "CARS"){
      return useSelector(state => state.cars)
    }
    return useSelector(state => state.parts)
  }

  const {data, filters, priceRange} = getData(generatedData)


    return (
        <>
        <NavBar />
        <GoodsMain mainData={data} choiseFilter={filters} priceRange={priceRange}/>
        <Footer />
        </>
    )
}