import NavBar from "../../NavBar/NavBar"
import Footer from "../../Footer/Footer"
import { useParams } from "react-router-dom"
import Loader from "../../Loader/Loader"
import useFetch from "../../FetchApi/useFetch"
import { useEffect, useState } from "react"

export default function DetailedGood() {
    const goodID = useParams()
    const [good, setGood] = useState({
        id: 8,
        name: "Toyota Camry",
        price: 30000,
        year: 2023,
        engineVolume: "2.5L",
        engineType: "Gasoline",
        image: "src/assets/car1.jpeg"
    })
    const {get, loading} = useFetch("")

    // useEffect(() => {
    //     get()
    //     .then(data => {
    //         setGood(data)
    //     })
    // }, [])
    
    return (
        <>
        <NavBar />
        {/* {loading && <Loader />} */}
        {Object.entries(good).map(data => {
            return <p key={data}>{data}</p>
        }
        )}
        <Footer />
        </>
    )
}