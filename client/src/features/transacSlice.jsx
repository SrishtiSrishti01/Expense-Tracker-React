import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const transacSlice = createSlice({
  name: "transacSlice",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      console.log(action.payload);
      state.transactions = [...state.transactions, action.payload];
    },
    dltTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addTransaction, dltTransaction } = transacSlice.actions;

export default transacSlice.reducer;

// function dltTransaction(id) {
//     dispatch({
//       type: "DLT_TRANSACTION",
//       payload: id,
//     });
//   }

//   function AddTransaction(trans) {
//     dispatch({
//       type: "ADD_TRANSACTION",
//       payload: trans,
//     });
//   }
