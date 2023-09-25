import NavBar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { carsGetSingleData } from "../../helper/StoreRedux/carsSlice/carsSlice.jsx"
import { addProduct } from "../../helper/StoreRedux/cartSlice/cartSlice.jsx"

export default function DetailedGood() {
    const { id } = useParams()
    const car = useSelector((state) => carsGetSingleData(state, id))

    const dispath = useDispatch()

    const handleAddToCart = () => {
        dispath(addProduct(car))
    }
    
    return (
        <>
        <NavBar />
        <div className="detailed-good-container">
            <div className="detailed-good-image">
                <p>{car.id}</p>
                <p>{car.price}</p>
                <p>{car.year}</p>
                <p>{car.engineVolume}</p>
                <img src={car.image} alt="car" />
                <p>{car.name}</p>
            </div>
                <input type="submit" value="Add to Cart" className={"btn btn--raised"} onClick={handleAddToCart}/>
        </div>
        <Footer />
        </>
    )
}