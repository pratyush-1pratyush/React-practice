import React from 'react'

const InputComponent1 = ({value,onChange}) => {
  return (
    <div>
        <input
          type='search'
          value={value}
          onChange={onChange}
          placeholder='Enter text'
        ></input>
    </div>
  )
}

export default InputComponent1