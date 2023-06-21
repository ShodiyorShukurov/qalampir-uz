import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer } from "./reducer";

const Context = createContext(null);

const initialState = {};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
