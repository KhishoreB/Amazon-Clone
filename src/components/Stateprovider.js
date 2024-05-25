import React, { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

const StateProvider = ({ Reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(Reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;
