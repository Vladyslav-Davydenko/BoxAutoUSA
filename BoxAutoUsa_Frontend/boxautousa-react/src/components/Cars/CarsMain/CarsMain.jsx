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
                        <li><a href="#" className="filter-link">Aston Martin</a></li>
                        <li><a href="#" className="filter-link">Apple</a></li>
                        <li><a href="#" className="filter-link">BMW</a></li>
                        <li><a href="#" className="filter-link">Some wierd stuff</a></li>
                        <li><a href="#" className="filter-link--checked">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
                        <li><a href="#" className="filter-link">Test</a></li>
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
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car2.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                             <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car3.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                            <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car4.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                             <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car4.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                             <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car4.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                             <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="good">
                            <img src="src/assets/car4.jpeg" alt="car" width="300"
                            height="200" className="goods-image"/>
                             <div className="car-details">
                                <p className="car-name text">Toyota Innova </p><span className="car-year text--sm">2012</span>
                                <p className="car-price text--lg">10000000</p>
                                <div className="car-place">
                                    <div className="car-data">
                                    <p className="car-country">USA</p>
                                    <p className="car-day">Today</p>
                                    </div>
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