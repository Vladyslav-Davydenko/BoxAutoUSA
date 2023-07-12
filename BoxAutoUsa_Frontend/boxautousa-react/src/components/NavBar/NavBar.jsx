import {useState} from "react"

export default function NavBar(){
    const [sideBar, setSideBar] = useState(false)

    function handleNavOpen() {
        setSideBar(true)
    }

    function handleNavClose() {
        setSideBar(false)
    }

    return(
        <nav>
            <div className="nav">
                <div className="nav-menu">
                <button className="btn" onClick={handleNavOpen}>
                    <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="white"/>
                        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="white"/>
                        <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="white"/>
                    </svg>
                </button>
                <div className={sideBar ? "nav-menu-links active" : "nav-menu-links"}>
                    <button className="btn" onClick={handleNavClose}>
                        <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <a href="#" className={"btn btn--nav"}>Car Parts</a>
                    <a href="#" className={"btn btn--nav"}>Cars</a>
                    <a href="#" className={"btn btn--nav"}>Contacts</a>
                </div>
                </div>
                <a className={"title btn--title"} href="#">BoxAutoUsa</a>
                <ul className="nav-links">
                    <li><a href="#" className={"btn btn--nav"}>Car Parts</a></li>
                    <li><a href="#" className={"btn btn--nav"}>Cars</a></li>
                    <li><a href="#" className={"btn btn--nav"}>Contacts</a></li>
                </ul>
                <ul className="nav-icons">
                    <li>
                    <button className="btn">
                    <svg fill="var(--light-icon)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        width="45px" height="45px" viewBox="0 0 902.86 902.86" 
                        xmlSpace="preserve">
                    <g>
                        <g>
                            <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                            <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                                S619.162,694.432,619.162,716.897z"/>
                        </g>
                    </g>
                    </svg>
                    </button>
                    </li>
                    <li>
                    <button className="btn">
                    <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="9" r="3" stroke="var(--light-icon)" strokeWidth="1.5"/>
                    <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="var(--light-icon)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="var(--light-icon)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}