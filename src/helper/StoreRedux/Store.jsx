import { configureStore, createSlice } from "@reduxjs/toolkit"

// The redux store created to collect data for cart components
const initialStateCart = {
    cart: [
        {
            id: 1,
            name: "Toyota Camry",
            price: 30000,
            year: 2023,
            engineVolume: "2.5L",
            engineType: "Gasoline",
            image: "src/assets/img/car1.jpeg",
            quantity: 1
          },
          {
            id: 2,
            name: "Honda Civic",
            price: 25000,
            year: 2023,
            engineVolume: "2.0L",
            engineType: "Gasoline",
            image: "src/assets/img/car2.jpeg",
            quantity: 1
          },
          {
            id: 3,
            name: "Ford Mustang",
            price: 45000,
            year: 2023,
            engineVolume: "5.0L",
            engineType: "Gasoline",
            image: "src/assets/img/car3.jpeg",
            quantity: 1
          },
          {
            id: 4,
            name: "Chevrolet Corvette",
            price: 65000,
            year: 2023,
            engineVolume: "6.2L",
            engineType: "Gasoline",
            image: "src/assets/img/car2.jpeg",
            quantity: 1
          }
    ],
}

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

const initialStateCars = {
    data: [
        {
          id: 1,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "src/assets/img/car1.jpeg"
        },
        {
          id: 2,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car2.jpeg"
        },
        {
          id: 3,
          name: "Ford Mustang",
          price: 45000,
          year: 2023,
          engineVolume: "5.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car3.jpeg"
        },
        {
          id: 4,
          name: "Chevrolet Corvette",
          price: 65000,
          year: 2023,
          engineVolume: "6.2L",
          engineType: "Gasoline",
          image: "src/assets/img/car2.jpeg"
        },
        {
          id: 5,
          name: "BMW 3 Series",
          price: 40000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car4.jpeg"
        },
        {
          id: 6,
          name: "Mercedes-Benz E-Class",
          price: 55000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car1.jpeg"
        },
        {
          id: 7,
          name: "Audi Q5",
          price: 50000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car3.jpeg"
        },
        {
          id: 8,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "src/assets/img/car1.jpeg"
        },
        {
          id: 9,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car2.jpeg"
        },
        {
          id: 10,
          name: "Ford Mustang",
          price: 45000,
          year: 2023,
          engineVolume: "5.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car3.jpeg"
        },
        {
          id: 11,
          name: "Chevrolet Corvette",
          price: 65000,
          year: 2023,
          engineVolume: "6.2L",
          engineType: "Gasoline",
          image: "src/assets/img/car2.jpeg"
        },
        {
          id: 12,
          name: "BMW 3 Series",
          price: 40000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car4.jpeg"
        },
        {
          id: 13,
          name: "Mercedes-Benz E-Class",
          price: 55000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car1.jpeg"
        },
        {
          id: 14,
          name: "Audi Q5",
          price: 50000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car3.jpeg"
        },
        {
          id: 15,
          name: "Toyota Camry",
          price: 30000,
          year: 2023,
          engineVolume: "2.5L",
          engineType: "Gasoline",
          image: "src/assets/img/car1.jpeg"
        },
        {
          id: 16,
          name: "Honda Civic",
          price: 25000,
          year: 2023,
          engineVolume: "2.0L",
          engineType: "Gasoline",
          image: "src/assets/img/car2.jpeg"
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

const partsSlice = createSlice({
    name: "parts",
    initialState: initialStateParts,
    reducers: {

    }
})

const carsSlice = createSlice({
    name: "cars",
    initialState: initialStateCars,
    reducers: {

    }
})

// Cart Slicer
const cartSlice = createSlice({
    name: "cart",
    initialState: initialStateCart,
    reducers: {
        // Reducer to +1 quantity if exists in cart and add in it and provide quantity if not
        addProduct: (state, action) => {
            const existingProduct = state.cart.find(
                product => product.id === action.payload.id
            )

            if(existingProduct){
                existingProduct.quantity++
            }

            else{
                state.cart.push({...action.payload, quantity: 1})
            }
        },

        // Reducer to fully remove product from the cart
        removeProduct: (state, action) => {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            state.cart.splice(index, 1);
        },

        // Reducer to substract 1 from already existing Product in cart
        substractProduct: (state, action) => {
            const existingProduct = state.cart.find(
                product => product.id === action.payload.id
            )

            if( existingProduct.quantity > 1) existingProduct.quantity--
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cars: carsSlice.reducer,
        parts: partsSlice.reducer
    }
})

const { addProduct, removeProduct, substractProduct } = cartSlice.actions

// Selector to get a total count of products in the cart
const cartCountSelector = (state) => {
    return state.cart.cart.reduce((total, product) => total + product.quantity, 0);
}

// Selector to calculate the total value of all products in cart
const cartValueSelector = (state) => {
    return state.cart.cart.reduce(
        (total, product) => total + product.price * product.quantity, 0
    )
}

export {
    store,
    addProduct,
    removeProduct,
    substractProduct,
    cartCountSelector,
    cartValueSelector,
}