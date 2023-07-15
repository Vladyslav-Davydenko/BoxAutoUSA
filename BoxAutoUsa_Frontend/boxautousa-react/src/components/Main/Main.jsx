import MainSearch from "./MainSearch/MainSearch"
import MainContent from "./MainContent/MainContent"
import MainIntro from "./MainIntro/MainIntro"
import Footer from "../Footer/Footer"

export default function Main() {
    return(
        <main>
        <MainSearch />
        <MainIntro />
        <MainContent />
        <Footer />
        </main>
    )
}