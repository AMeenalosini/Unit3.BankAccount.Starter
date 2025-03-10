import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
    reducer: {
      transactions: transactionsReducer, // Add transactions slice to the store
    },
  });

export default store;
