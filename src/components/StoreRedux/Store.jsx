import { configureStore, createSlice } from "@reduxjs/toolkit"

// The redux store created to collect data for cart components
const initialState = {
    cart: [
        {
            id: 1,
            name: "Toyota Camry",
            price: 30000,
            year: 2023,
            engineVolume: "2.5L",
            engineType: "Gasoline",
            image: "assets/car1.jpeg",
            quantity: 1
          },
          {
            id: 2,
            name: "Honda Civic",
            price: 25000,
            year: 2023,
            engineVolume: "2.0L",
            engineType: "Gasoline",
            image: "assets/car2.jpeg",
            quantity: 1
          },
          {
            id: 3,
            name: "Ford Mustang",
            price: 45000,
            year: 2023,
            engineVolume: "5.0L",
            engineType: "Gasoline",
            image: "assets/car3.jpeg",
            quantity: 1
          },
          {
            id: 4,
            name: "Chevrolet Corvette",
            price: 65000,
            year: 2023,
            engineVolume: "6.2L",
            engineType: "Gasoline",
            image: "assets/car2.jpeg",
            quantity: 1
          }
    ],
    test: "bup"
}

// Cart Slicer
const cartSlice = createSlice({
    name: "cart",
    initialState,
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
    reducer: cartSlice.reducer
})

const { addProduct, removeProduct, substractProduct } = cartSlice.actions

// Selector to get a total count of products in the cart
const cartCountSelector = (state) => {
    return state.cart.reduce((total, product) => total + product.quantity, 0);
}

// Selector to calculate the total value of all products in cart
const cartValueSelector = (state) => {
    return state.cart.reduce(
        (total, product) => total + product.price * product.quantity, 0
    )
}

export {
    store,
    addProduct,
    removeProduct,
    substractProduct,
    cartCountSelector,
    cartValueSelector
}