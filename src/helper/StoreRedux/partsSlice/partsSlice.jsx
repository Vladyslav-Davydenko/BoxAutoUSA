import { createSlice } from "@reduxjs/toolkit"

const initialStateParts = {
    data: [
        {
        id: 1,
        name: "Brake Pads",
        price: 450.99,
        year: 2023,
        image: "src/assets/img/carPart1.jpeg"
      },
      {
        id: 2,
        name: "Oil Filter",
        price: 80.99,
        year: 2023,
        image: "src/assets/img/carPart2.jpeg"
      },
      {
        id: 3,
        name: "Spark Plugs",
        price: 20.49,
        year: 2023,
        image: "src/assets/img/carPart3.jpeg"
      },
      {
        id: 4,
        name: "Air Filter",
        price: 120.99,
        year: 2023,
        image: "src/assets/img/carPart4.jpeg"
      },
      {
        id: 5,
        name: "Transmission Fluid",
        price: 190.99,
        year: 2023,
        image: "src/assets/img/carPart5.jpeg"
      }],
    priceRange: {
        maxValue: 5_000,
        minValue: 100,
        step: 100
      },

    filters: [{
        name: "Test",
        values: [
        "Test1",
        "Test2",
        "Test3",
        "Test4",
        ]},
      ]
}

const partsSlice = createSlice({
    name: "parts",
    initialState: initialStateParts,
    reducers: {

    }
})

export { partsSlice }