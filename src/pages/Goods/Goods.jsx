import NavBar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import GoodsMain from "../../components/GoodsParts/GoodsMain/GoodsMain.jsx"
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