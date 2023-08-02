/*
Just simple Footer
*/

export default function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="footer">
                <div className="side">
                <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9844 10C21.9473 8.68893 21.8226 7.85305 21.4026 7.13974C20.8052 6.12523 19.7294 5.56066 17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.27063 5.56066 3.19479 6.12523 2.5974 7.13974C2 8.15425 2 9.41667 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C10.1779 21.5393 11.0557 22 12 22C12.9443 22 13.8221 21.5393 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C21.8226 16.1469 21.9473 15.3111 21.9844 14" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round"/>
<path d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round"/>
</svg>
                    <div>
                        <p className="text--bold footer-name">
                            &copy; 2023 BoxAutoUsa
                        </p>
                        <p className="footer-rights">
                            <small className="text--sm"
                                >All rights reserved.</small
                            >
                        </p>
                    </div>
                </div>
                <div className="side">
                    <p className="text--sm">@Vilsivul</p>
                </div>
            </div>
        </div>
    </footer>
    )
}