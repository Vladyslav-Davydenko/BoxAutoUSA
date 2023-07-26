import Input from "../../UI/Input/Input"
import CarsFilterChoice from "../CarsFilter/CarsFilterChoice"
import Car from "../Car/Car"
import CarsFilterRange from "../CarsFilter/CarsFilterRange"
import Loader from "../../Loader/Loader"
import useFetch from "../../FetchApi/useFetch"

const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      price: 30000,
      year: 2023,
      engineVolume: "2.5L",
      engineType: "Gasoline",
      image: "src/assets/car1.jpeg"
    },
    {
      id: 2,
      name: "Honda Civic",
      price: 25000,
      year: 2023,
      engineVolume: "2.0L",
      engineType: "Gasoline",
      image: "src/assets/car2.jpeg"
    },
    {
      id: 3,
      name: "Ford Mustang",
      price: 45000,
      year: 2023,
      engineVolume: "5.0L",
      engineType: "Gasoline",
      image: "src/assets/car3.jpeg"
    },
    {
      id: 4,
      name: "Chevrolet Corvette",
      price: 65000,
      year: 2023,
      engineVolume: "6.2L",
      engineType: "Gasoline",
      image: "src/assets/car2.jpeg"
    },
    {
      id: 5,
      name: "BMW 3 Series",
      price: 40000,
      year: 2023,
      engineVolume: "2.0L",
      engineType: "Gasoline",
      image: "src/assets/car4.jpeg"
    },
    {
      id: 6,
      name: "Mercedes-Benz E-Class",
      price: 55000,
      year: 2023,
      engineVolume: "2.0L",
      engineType: "Gasoline",
      image: "src/assets/car1.jpeg"
    },
    {
      id: 7,
      name: "Audi Q5",
      price: 50000,
      year: 2023,
      engineVolume: "2.0L",
      engineType: "Gasoline",
      image: "src/assets/car3.jpeg"
    },
    {
      id: 8,
      name: "Nissan Rogue",
      price: 28000,
      year: 2023,
      engineVolume: "2.5L",
      engineType: "Gasoline",
      image: "src/assets/car2.jpeg"
    },
    {
      id: 9,
      name: "Hyundai Sonata",
      price: 27000,
      year: 2023,
      engineVolume: "2.5L",
      engineType: "Gasoline",
      image: "src/assets/car1.jpeg"
    },
    {
      id: 10,
      name: "Volkswagen Golf",
      price: 32000,
      year: 2023,
      engineVolume: "2.0L",
      engineType: "Gasoline",
      image: "src/assets/car4.jpeg"
    },
    {
      id: 11,
      name: "Subaru Outback",
      price: 35000,
      year: 2023,
      engineVolume: "2.5L",
      engineType: "Gasoline",
      image: "src/assets/car3.jpeg"
    },
    {
      id: 12,
      name: "Kia Telluride",
      price: 40000,
      year: 2023,
      engineVolume: "3.8L",
      engineType: "Gasoline",
      image: "src/assets/car1.jpeg"
    },
    {
      id: 13,
      name: "Porsche 911",
      price: 90000,
      year: 2023,
      engineVolume: "3.0L",
      engineType: "Gasoline",
      image: "src/assets/car2.jpeg"
    },
    {
      id: 14,
      name: "Tesla Model 3",
      price: 55000,
      year: 2023,
      engineVolume: "Electric",
      engineType: "Electric",
      image: "src/assets/car3.jpeg"
    },
    {
      id: 15,
      name: "Jeep Wrangler",
      price: 35000,
      year: 2023,
      engineVolume: "3.6L",
      engineType: "Gasoline",
      image: "src/assets/car4.jpeg"
    }
  ];
  

  const priceRange = {
    max: 2_000_000,
    min: 10_000
  }

export default function CarsMain() {
    const {get, loading} = useFetch("")

    return (
        <main>
            <div className="container-goods">
                <div className="cars-main">
                <div className="cars-filter">
                <CarsFilterChoice cars={cars}/>
                <CarsFilterRange priceRange={priceRange}/>
                </div>
                <div className="car-goods">
                    <div className="goods-find">
                        <form action="" className="goods-find-form">
                            <Input placeholder="Find Cars" className="goods-find-car" name="search"/>
                            <input type="submit" value="Find" className={"btn btn--raised main-search-submit"}/>
                        </form>
                    </div>
                    
                    {cars.length <= 0 && <p id="no-cars" className="text--lg">Currently there is no cars</p>}

                    {!loading && <div className="goods-loader"><Loader /></div>}

                    <div className="goods">
                            {cars.map(car => {
                                return <Car car={car}/>
                            })}
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}