/*
Component for Introduction
*/

export default function MainIntro() {

    // Function to scroll to the first info section
    function handleScrollDown() {
        window.scrollTo({
            top: document.querySelector("#main-content").offsetTop - 20,
        });
    }

    return(
        <section
                id="intro"
                className="layout-section"
                aria-describedby="intro-h1 intro-h2"
            >
                <div className="container">
                    <h1 id="intro-h1" className={"title--lg camel-case"}>BoxAutoUSA</h1>
                    <h2 id="intro-h2" className="title--lg">Car Shop</h2>
                    <p className="text--xl">
                        Shop with best cars from USA
                    </p>
                    <p className="text--xl">
                        We brings you only 
                        <strong> proven cars</strong>.
                    </p>
                </div>
                <button id="scroll-down" aria-label="Scroll down" onClick={handleScrollDown}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 0 24 24"
                        width="48px"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                            stroke="var(--dark-icon)"
                        />
                    </svg>
                </button>
            </section>
    )
}