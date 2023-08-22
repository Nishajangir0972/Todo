import React ,{useState} from 'react'

function Counter() {
let Increment;
let Decrement;
const [counter, setCounter]= useState(0)
function increment(){
    if(counter === 10){
        Increment.disabled = true;
    }
    if (counter < 0){
        Decrement.disabled = false;
    }
    setCounter(counter+1)
   
}
function decrement(){
    if(counter <0){
        Decrement.disabled = true;
    }
    if(counter >10){
        Increment.disabled = false;
    }
    setCounter(counter-1)
   
}


  return (
    <>
    <button onClick={increment}>Increment</button>
    <p>{counter}</p>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}



export default Counter

