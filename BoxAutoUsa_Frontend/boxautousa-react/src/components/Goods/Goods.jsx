import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import GoodsMain from "./GoodsMain/GoodsMain"

/*
Component to connect parts of the goods page
*/

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
    name: "Toyota Camry",
    price: 30000,
    year: 2023,
    engineVolume: "2.5L",
    engineType: "Gasoline",
    image: "src/assets/car1.jpeg"
  },
  {
    id: 9,
    name: "Honda Civic",
    price: 25000,
    year: 2023,
    engineVolume: "2.0L",
    engineType: "Gasoline",
    image: "src/assets/car2.jpeg"
  },
  {
    id: 10,
    name: "Ford Mustang",
    price: 45000,
    year: 2023,
    engineVolume: "5.0L",
    engineType: "Gasoline",
    image: "src/assets/car3.jpeg"
  },
  {
    id: 11,
    name: "Chevrolet Corvette",
    price: 65000,
    year: 2023,
    engineVolume: "6.2L",
    engineType: "Gasoline",
    image: "src/assets/car2.jpeg"
  },
  {
    id: 12,
    name: "BMW 3 Series",
    price: 40000,
    year: 2023,
    engineVolume: "2.0L",
    engineType: "Gasoline",
    image: "src/assets/car4.jpeg"
  },
  {
    id: 13,
    name: "Mercedes-Benz E-Class",
    price: 55000,
    year: 2023,
    engineVolume: "2.0L",
    engineType: "Gasoline",
    image: "src/assets/car1.jpeg"
  },
  {
    id: 14,
    name: "Audi Q5",
    price: 50000,
    year: 2023,
    engineVolume: "2.0L",
    engineType: "Gasoline",
    image: "src/assets/car3.jpeg"
  },
  {
    id: 15,
    name: "Toyota Camry",
    price: 30000,
    year: 2023,
    engineVolume: "2.5L",
    engineType: "Gasoline",
    image: "src/assets/car1.jpeg"
  },
  {
    id: 16,
    name: "Honda Civic",
    price: 25000,
    year: 2023,
    engineVolume: "2.0L",
    engineType: "Gasoline",
    image: "src/assets/car2.jpeg"
  },
];

const parts = [
  {
    id: 1,
    name: "Brake Pads",
    price: 450.99,
    year: 2023,
    image: "src/assets/carPart1.jpeg"
  },
  {
    id: 2,
    name: "Oil Filter",
    price: 80.99,
    year: 2023,
    image: "src/assets/carPart2.jpeg"
  },
  {
    id: 3,
    name: "Spark Plugs",
    price: 20.49,
    year: 2023,
    image: "src/assets/carPart3.jpeg"
  },
  {
    id: 4,
    name: "Air Filter",
    price: 120.99,
    year: 2023,
    image: "src/assets/carPart4.jpeg"
  },
  {
    id: 5,
    name: "Transmission Fluid",
    price: 190.99,
    year: 2023,
    image: "src/assets/carPart5.jpeg"
  }
];

const pricePartsRange = {
  maxValue: 5_000,
  minValue: 100,
  step: 100
}

const priceRange = {
  maxValue: 200_000,
  minValue: 10_000,
  step: 10_000
}

const carFilters = [{
  name: "Brands",
  values: [
  "Toyota",
  "Ford",
  "Honda",
  "Chevrolet",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Nissan",
  "Hyundai",
  "Kia",
  "Tesla",
  "Subaru",
  "Volvo",
  "Porsche"
  ]},
  {
  name: "Year",
  values: [
  "before 2000",
  "2000-2010",
  "2010-2020",
  "2020 and newer",
  ]},
];

const partFilter = [{
  name: "Test",
  values: [
  "Test1",
  "Test2",
  "Test3",
  "Test4",
  ]},
];


export default function Goods({data}){
    return (
        <>
        <NavBar />
        {
          data === "CARS" && <GoodsMain mainData={cars} choiseFilter={carFilters} priceRange={priceRange}/>
        }
        {
          data === "PARTS" && <GoodsMain mainData={parts} choiseFilter={partFilter} priceRange={pricePartsRange}/>
        }
        <Footer />
        </>
    )
}