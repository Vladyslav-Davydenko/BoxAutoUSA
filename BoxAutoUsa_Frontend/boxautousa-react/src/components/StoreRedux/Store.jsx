import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [
        {
            id: 1,
            name: "Toyota Camry",
            price: 30000,
            year: 2023,
            engineVolume: "2.5L",
            engineType: "Gasoline",
            image: "src/assets/car1.jpeg",
            quantity: 1
          },
          {
            id: 2,
            name: "Honda Civic",
            price: 25000,
            year: 2023,
            engineVolume: "2.0L",
            engineType: "Gasoline",
            image: "src/assets/car2.jpeg",
            quantity: 1
          },
          {
            id: 3,
            name: "Ford Mustang",
            price: 45000,
            year: 2023,
            engineVolume: "5.0L",
            engineType: "Gasoline",
            image: "src/assets/car3.jpeg",
            quantity: 1
          },
          {
            id: 4,
            name: "Chevrolet Corvette",
            price: 65000,
            year: 2023,
            engineVolume: "6.2L",
            engineType: "Gasoline",
            image: "src/assets/car2.jpeg",
            quantity: 1
          }
    ]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
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

        removeProduct: (state, action) => {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            state.cart.splice(index, 1);
        },

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

const cartCountSelector = (state) => {
    return state.cart.reduce((total, product) => total + product.quantity, 0);
}

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