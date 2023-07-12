import React, { useReducer } from "react";
const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    }

    if (action.type === "DEC") {
        return state - 1;
      
    }

    return state;
  };
const UseReducer = () => {

  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>{state}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        INC
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        DEC
      </button>
    </>
  );
};

export default UseReducer;
