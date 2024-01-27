import React from 'react'
import { useState } from 'react';




export default function Counter() {
        const [count, setCount]= useState(0);
        
        const incrementCount = () => {
            setCount(count+1000);
        };
        const decrementCount = () => {
            setCount(count-1);
        };
        const resetCountset = () => {
            setCount(0);
        };
  return (
    <div>
        <div className='container'>
            <div className='counter-box'>
                <h1>Counter : {count}</h1>
                <div className='counter1'>
                  <button onClick={incrementCount}>Increment</button>
                  <button onClick={decrementCount}>Decrement</button>
                  <button onClick={resetCountset}>Reset</button>
               </div>
            </div>
        </div>
    </div>
  )
}