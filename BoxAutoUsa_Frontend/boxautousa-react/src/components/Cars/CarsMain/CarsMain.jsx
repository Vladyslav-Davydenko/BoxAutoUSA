import Input from "../../UI/Input/Input"

export default function CarsMain() {
    return (
        <main>
            <div className="container-goods">
                <div className="cars-main">
                <div className="cars-filter">
                    <div className="filter">
                        <h2 className="title--sm">Car Model</h2>
                    <ul className="filter-category">
                        <li>Aston Martin</li>
                        <li>BMW</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                    </ul>
                    </div>
                    <div className="filter">
                    <h2 className="title--sm">Car Model</h2>
                    <ul className="filter-category">
                        <li>Aston Martin</li>
                        <li>BMW</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                    </ul>
                    </div>
                    <div className="filter">
                    <h2 className="title--sm">Car Model</h2>
                    <ul className="filter-category">
                        <li>Aston Martin</li>
                        <li>BMW</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                    </ul>
                    </div>
                    <div className="filter">
                    <h2 className="title--sm">Car Model</h2>
                    <ul className="filter-category">
                        <li>Aston Martin</li>
                        <li>BMW</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                        <li>Mers</li>
                    </ul>
                    </div>
                </div>
                <div className="car-goods">
                    <div className="goods-find">
                        <form action="" className="goods-find-form">
                            <Input placeholder="Find Cars" className="goods-find-car" name="search"/>
                            <input type="submit" value="Find" className={"btn btn--raised main-search-submit"}/>
                        </form>
                    </div>
                    <div className="goods">
                    <div className="good">
                            <img src="src/assets/car1.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                            <div className="car-details">
                                <p className="car-price text--bold">10000000</p>
                                <p className="car-year text--sm">2012</p>
                                <p className="car-name text--bold">Toyota Innova</p>
                                <div className="car-place">
                                    <p className="car-country">USA</p>
                                    <p className="car-data">Today</p>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car1.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                            <div className="car-details">
                                <p className="car-price text--bold">10000000</p>
                                <p className="car-year text--sm">2012</p>
                                <p className="car-name text--bold">Toyota Innova</p>
                                <div className="car-place">
                                    <p className="car-country">USA</p>
                                    <p className="car-data">Today</p>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car1.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                            <div className="car-details">
                                <p className="car-price text--bold">10000000</p>
                                <p className="car-year text--sm">2012</p>
                                <p className="car-name text--bold">Toyota Innova</p>
                                <div className="car-place">
                                    <p className="car-country">USA</p>
                                    <p className="car-data">Today</p>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car1.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                            <div className="car-details">
                                <p className="car-price text--bold">10000000</p>
                                <p className="car-year text--sm">2012</p>
                                <p className="car-name text--bold">Toyota Innova</p>
                                <div className="car-place">
                                    <p className="car-country">USA</p>
                                    <p className="car-data">Today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}