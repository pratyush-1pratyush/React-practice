import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const[data,setData] = useState("");
    const handleData = (data) =>{
       setData(data)
    }
  return (
    <>
    <div>Parent</div>
    <p>{data}</p>
    <Child onSendData={handleData}/>
  
    </>
  )
}

export default Parent