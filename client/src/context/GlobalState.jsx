import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [],
};

//context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function dltTransaction(id) {
    dispatch({
      type: "DLT_TRANSACTION",
      payload: id,
    });
  }

  function AddTransaction(trans) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: trans,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dltTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
