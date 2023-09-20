/*
Component to generate each section of info on home page
*/

export default function MainInfo(props){
    const {image, title, description, link} = props

    return (
        <div className="main-content">
            <img
                src={image}
                width="300"
                height="300"
                className="main-content-screenshot"
            />
            <div>
                <h3 className="title">{title}</h3>
                <p className="text">
                    {description}
                </p>
                <a
                    href={link}
                    className="btn btn--line"
                    target="_blank"
                    >Visit</a
                >
            </div>
        </div>
    )
}