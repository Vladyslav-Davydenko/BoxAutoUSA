import Input from "../../UI/Input/Input"

/*
Component for seach form on home page
*/
export default function MainSearch() {
    return(
        <section>
        <div className="main-search-image">
            <form action="cars" method="GET" className="main-search-form">
                <Input placeholder="Find Cars" className="main-find-car" name="search"/>
                <input type="submit" value="Find" className={"btn btn--raised main-search-submit"}/>
            </form>
        </div>
        </section>
    )
}