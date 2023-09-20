import MainInfo from "./MainInfo"

// const values for section generating 
const mainInfo = [
    {
        title: "Car 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quae obcaecati vero maiores enim eaque quidem beatae sunt cum nam nesciunt suscipit, tempore officia dolores soluta, ab odit consectetur dignissimos.",
        image: "src/assets/img/car1.jpeg",
        link: "https://example.com"
    },
    {
        title: "Car 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quae obcaecati vero maiores enim eaque quidem beatae sunt cum nam nesciunt suscipit, tempore officia dolores soluta, ab odit consectetur dignissimos.",
        image: "src/assets/img/car2.jpeg",
        link: "https://example.com"
    },
    {
        title: "Car 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quae obcaecati vero maiores enim eaque quidem beatae sunt cum nam nesciunt suscipit, tempore officia dolores soluta, ab odit consectetur dignissimos.",
        image: "src/assets/img/car3.jpeg",
        link: "https://example.com"
    },
    {
        title: "Car 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quae obcaecati vero maiores enim eaque quidem beatae sunt cum nam nesciunt suscipit, tempore officia dolores soluta, ab odit consectetur dignissimos.",
        image: "src/assets/img/car4.jpeg",
        link: "https://example.com"
    },
]

/*
Component to generate main Info on the home page
*/

export default function MainContent() {
    return(
        <section
                id="main-content"
                className="layout-section"
                aria-labelledby="heading-portfolio"
            >
                <div className="container">
                {
                    mainInfo.map(section => {
                        return (
                            <MainInfo
                            title={section.title}
                            description={section.description}
                            image={section.image}
                            link={section.link}
                            key={section.title}
                            />
                        )
                    })
                }
                </div>
            </section>
    )
}