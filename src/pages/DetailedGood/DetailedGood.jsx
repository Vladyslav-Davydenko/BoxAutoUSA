import NavBar from "../../components/NavBar/NavBar.jsx"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import useFetch from "../../components/FetchApi/useFetch"
import { useEffect, useState } from "react"

export default function DetailedGood() {
    const goodID = useParams()
    const [good, setGood] = useState({})
    const {get, loading} = useFetch("")

    useEffect(() => {
        setTimeout(() => {
            
        }, 100)
    }, [])
    return (
        <>
        <NavBar />
        {loading && <Loader />}
        <div className="detailed-good-container">
            <div className="detailed-good-image">
                <img src={good.image} alt={good.name} />
            </div>
        </div>
        <Footer />
        </>
    )
}