import React from 'react'

const CounterUi = ({handleIncrement,handleDecrement,value}) => {
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <div>{value}</div>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterUi