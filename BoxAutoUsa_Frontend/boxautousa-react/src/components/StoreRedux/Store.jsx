import { configureStore, createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [

    ],
    reducers: {
        addProduct: (state, action) => {
            if(action.payload){
                state.push(action.payload)
            }
            else{
                console.log("Add product nothing was passed")
            }
        },

        deleteProduct: (state, action) => {
            if(action.payload){
                state = state.filter(product => product.id !== action.payload)
            }
        }
    }
})

const store = configureStore({
    reducer: cartSlice.reducer
})

const { addProduct, deleteProduct } = cartSlice.actions

export {store, addProduct}