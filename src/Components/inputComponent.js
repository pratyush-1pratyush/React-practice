import React from 'react'

const InputComponent = ({value,onChange}) => {
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

export default InputComponent