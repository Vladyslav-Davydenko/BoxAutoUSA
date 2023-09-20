import MainSearch from "../../components/MainParts/MainSearch/MainSearch.jsx"
import MainContent from "../../components/MainParts/MainContent/MainContent.jsx"
import MainIntro from "../../components/MainParts/MainIntro/MainIntro.jsx"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar.jsx"

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