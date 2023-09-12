import MainSearch from "./MainSearch/MainSearch"
import MainContent from "./MainContent/MainContent"
import MainIntro from "./MainIntro/MainIntro"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar.jsx"

/*
Connecting each component to generate Main page
*/
export default function Main() {
    return(
        <>
        <NavBar />
        <main>
        <MainSearch />
        <MainIntro />
        <MainContent />
        </main>
        <Footer />
        </>
    )
}