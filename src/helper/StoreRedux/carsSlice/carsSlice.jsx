import { createSlice } from "@reduxjs/toolkit"

// Cars Slice
const initialStateCars = {
    data: [
        {
          id: 1,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "/img/car1.jpeg"
        },
        {
          id: 2,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car2.jpeg"
        },
        {
          id: 3,
          name: "Ford Mustang",
          price: 45000,
          year: 2023,
          engineVolume: "5.0L",
          engineType: "Gasoline",
          image: "/img/car3.jpeg"
        },
        {
          id: 4,
          name: "Chevrolet Corvette",
          price: 65000,
          year: 2023,
          engineVolume: "6.2L",
          engineType: "Gasoline",
          image: "/img/car2.jpeg"
        },
        {
          id: 5,
          name: "BMW 3 Series",
          price: 40000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car4.jpeg"
        },
        {
          id: 6,
          name: "Mercedes-Benz E-Class",
          price: 55000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car1.jpeg"
        },
        {
          id: 7,
          name: "Audi Q5",
          price: 50000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car3.jpeg"
        },
        {
          id: 8,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "/img/car1.jpeg"
        },
        {
          id: 9,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car2.jpeg"
        },
        {
          id: 10,
          name: "Ford Mustang",
          price: 45000,
          year: 2023,
          engineVolume: "5.0L",
          engineType: "Gasoline",
          image: "/img/car3.jpeg"
        },
        {
          id: 11,
          name: "Chevrolet Corvette",
          price: 65000,
          year: 2023,
          engineVolume: "6.2L",
          engineType: "Gasoline",
          image: "/img/car2.jpeg"
        },
        {
          id: 12,
          name: "BMW 3 Series",
          price: 40000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car4.jpeg"
        },
        {
          id: 13,
          name: "Mercedes-Benz E-Class",
          price: 55000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car1.jpeg"
        },
        {
          id: 14,
          name: "Audi Q5",
          price: 50000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car3.jpeg"
        },
        {
          id: 15,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "/img/car1.jpeg"
        },
        {
          id: 16,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "/img/car2.jpeg"
        },
    ],
      
    priceRange: {
        maxValue: 200_000,
        minValue: 10_000,
        step: 10_000
      },
      
    filters: [{
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
      ],
}

const carsSlice = createSlice({
    name: "cars",
    initialState: initialStateCars,
    reducers: {}
})

const carsGetSingleData = (state, action) => {
  const result = state.cars.data.find(singlData => {
    const id = Number.parseInt(action, 10)
    return singlData.id === id
  })
  return result
}

export { 
  carsSlice,
  carsGetSingleData
}