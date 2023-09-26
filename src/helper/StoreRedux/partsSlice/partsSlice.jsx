import { createSlice } from "@reduxjs/toolkit"

const initialStateParts = {
    data: [
        {
        id: 101,
        name: "Brake Pads",
        price: 450,
        year: 2023,
        image: "/img/carPart1.jpeg"
      },
      {
        id: 102,
        name: "Oil Filter",
        price: 80,
        year: 2023,
        image: "/img/carPart2.jpeg"
      },
      {
        id: 103,
        name: "Spark Plugs",
        price: 20,
        year: 2023,
        image: "/img/carPart3.jpeg"
      },
      {
        id: 104,
        name: "Air Filter",
        price: 120,
        year: 2023,
        image: "/img/carPart4.jpeg"
      },
      {
        id: 105,
        name: "Transmission Fluid",
        price: 190,
        year: 2023,
        image: "/img/carPart5.jpeg"
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