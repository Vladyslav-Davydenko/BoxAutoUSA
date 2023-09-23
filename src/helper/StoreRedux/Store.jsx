import { configureStore } from "@reduxjs/toolkit"
import { carsSlice } from "./carsSlice/carsSlice"
import { cartSlice } from "./cartSlice/cartSlice"
import { partsSlice } from "./partsSlice/partsSlice"

const store = configureStore({
  reducer: {
      cart: cartSlice.reducer,
      cars: carsSlice.reducer,
      parts: partsSlice.reducer
  }
})

export {
    store,
}