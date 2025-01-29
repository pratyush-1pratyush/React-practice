import React, { useState } from 'react'

const Sidebar = () => {
  const[isOpen,setIsOpen] = useState(true);
  const handleToggleSideBar = () => {
    setIsOpen((prev) => !prev)
  }
  return (
  <div className='flex-col'>
       <button onClick={handleToggleSideBar}>{isOpen ? "Close" : "Open"}</button>
       <div className={`sidebar ${isOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              Carrers
            </li>
            <li>
              About us
            </li>
            <li>
              Contact us
            </li>
          </ul>
        </nav>
       </div>
       </div>
  )
}

export default Sidebar