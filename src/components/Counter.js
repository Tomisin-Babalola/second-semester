import React from 'react'
import { useCounter } from "../custom-hooks/useCounter"

const Counter = () => {

const [count, increment, decrement, resetCount] = useCounter()



  return (
    <section>
        
        <div className='buttonCard'>
            <h2> Counter {count}</h2>
            <button onClick={ () => increment()} className='increment button'>Increment</button>
            <button onClick={() => resetCount()}>Reset</button>
            <button onClick={() => decrement()} className='decrement'>Decrement</button>
        </div>
    </section>
  )
}

export default Counter