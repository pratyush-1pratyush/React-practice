import React, { useState } from 'react'
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';

const TabComponent = () => {
    const[activeTabs,setActiveTabs] = useState(0)

    const tabs = [
        { 
            name : "Profile",
            component : <Profile/>
        },
        {
            name : "Interests",
            component : <Interests/>
        },
        {
            name : "Settings",
            component : <Settings/>
        }
    ]
    console.log(tabs)
    const ActiveTabComponent = tabs[activeTabs].component
  return (
    <div>
        <div className='flex-row '>
        {
            tabs.map((tab,index) => {
                return(
                   
                    <button className={`tab-header ${tabs[activeTabs] === tab ? "activeTab" : ""}`} onClick={() => setActiveTabs(index)} key={index}>{tab?.name}</button>
                   
                )
            }
               
            )
        }
        </div>
        <div className='tab-body'>
           {ActiveTabComponent}
        </div>
    </div>
  )
}

export default TabComponent;