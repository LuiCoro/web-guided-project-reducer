import React, {useReducer} from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";

// take our action objects - {type: 'ADD', payload: 7}
// make
// action creators - functions that return action object
const addAction = (input) => {
  return ({type: 'ADD', payload: input})
}

const subAction = (input) => {
  return ({type:'SUBTRACT', payload: input})
}

const memoryAction = (input) => {
  return ({type: 'ADD_TO_MEMORY'})
}

const clearAction = (input) => {
  return ({type: 'CLEAR'})
}

let currentState = {
  currentValue: 0,
  memory: 0
}

currentState = reducer(currentState, addAction(15))
console.log(currentState)
currentState = reducer(currentState,subAction(7))
console.log(currentState)
currentState = reducer(currentState, addAction(4))
console.log(currentState)
currentState = reducer(currentState, memoryAction())
console.log(currentState)
currentState = reducer(currentState, clearAction())
console.log(currentState)

export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br/>
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
