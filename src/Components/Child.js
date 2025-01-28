import React from 'react'

const Child = ({onSendData}) => {
  const sendToParent = () => {
    const data ="Hi Parent"
    onSendData(data);
  }
  return (
   <button onClick={sendToParent}>Send</button>

  )
}

export default Child