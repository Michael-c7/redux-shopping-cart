import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// eslint-disable-next-line no-lone-blocks
{/*
store : stores data, think of state
reducer : function that used to update store
- two arguments : state, action
  - state : old state / state before update
  - action : what happened / what update
- return updated or old state
*/}

// eslint-disable-next-line no-lone-blocks
{/*
dispatch method : send actions to the store
actions (objects) : MUST HAVE TYPE PROPERTY
- what kind of action

DON'T MUTATE THE STATE
- redux built IMMUTABILITY( make a copy)
*/}


// eslint-disable-next-line import/first
import { createStore } from 'redux';

// eslint-disable-next-line import/first
// import { DECREASE, INCREASE } from './actions';
// eslint-disable-next-line import/first
import reducer from './reducer';
// eslint-disable-next-line no-lone-blocks
{/*react-redux - provider wraps app,
connect - used in components*/}

// initial store
const initialStore = {
  cart: cartItems,
  total:0,
  amount:0
};


// const DECREASE = "DECREASE";
// const INCREASE = "INCREASE";
// const RESET = "RESET";
// const CHANGE_NAME = "CHANGE_NAME";




// store
const store = createStore(reducer, initialStore);
// convention is for the string value to be in uppercase
// store.dispatch({type: DECREASE});
// store.dispatch({type: INCREASE});
// store.dispatch({type: "CHANGE_NAME"});
// store.dispatch({type: "RESET"});
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
