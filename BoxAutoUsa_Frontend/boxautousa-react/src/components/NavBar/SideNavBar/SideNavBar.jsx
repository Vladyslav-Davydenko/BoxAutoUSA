import {Link} from "react-router-dom"

export default function SideNavBar(props){
    const {onNavClose, sideBar} = props
    return (
        <div className={sideBar ? "nav-menu-links active" : "nav-menu-links"}>
            <button className="btn" onClick={onNavClose}>
                <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
            <a href="#" className={"btn btn--nav"}>Car Parts</a>
            <Link
            className={"btn btn--nav"}
            to="/cars"
            >
            Cars
            </Link>
            <a href="#" className={"btn btn--nav"}>Contacts</a>
        </div>
    )
}