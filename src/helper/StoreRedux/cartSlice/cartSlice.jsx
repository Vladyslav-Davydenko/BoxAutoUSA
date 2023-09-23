import { createSlice } from "@reduxjs/toolkit"

// Cart Slicer
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
    cartSlice,
    addProduct,
    removeProduct,
    substractProduct,
    cartCountSelector,
    cartValueSelector
}
