import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from '../config/invoiceSlice'


const store = configureStore({
  reducer: {
    invoices: invoiceSlice.reducer,
  }
})

export default store
