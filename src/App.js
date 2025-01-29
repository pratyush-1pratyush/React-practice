
import { useState } from 'react';
import './App.css';
import CounterData from './Components/Lifting State Up/counterData';
import CounterUi from './Components/Lifting State Up/counterUI';
import InputComponent from './Components/Lifting State Up/inputComponent';
import InputComponent1 from './Components/Lifting State Up/inputComponent1';
import Parent from './Components/ChildToParent Data/Parent';
import InfiniteScroll from './Components/Infinite Scroll/InfiniteScroll';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Sidebar/Body';
import TabComponent from './Components/Tabs/TabComponent';

function App() {
  /* lIFTING STATE UP */

  /*const[value,setValue] = useState(0)
  const[inputText,setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  const handleIncrement = () => {
     setValue((prev) => prev + 1)
       
  }
  const handleDecrement = () => {
    setValue((prev) => prev - 1)
  }

  return (
    <div>
       <CounterUi  handleIncrement={handleIncrement} handleDecrement={handleDecrement} value={value} />
       <CounterData  value={value}/>
       <InputComponent value={inputText} onChange={handleChange}/>
       <InputComponent1 value={inputText} onChange={handleChange}/>
    </div>
  );
}
  */

     /* ChildToParent Data Pass */

 /*return (
    <div>
      <Parent/>
    </div>
  );
}*/

    /* Infinite Scroll */
    
/*return (
  <div>
    <InfiniteScroll/>
  </div>
);
}*/

   /*Sidebar */    

/*return (
  <div className='flex-row'>
   <Sidebar/>
   <Body/>
  </div>
);
}*/

 /* Tabs */
return (
  <div className=''>
      <TabComponent/>
  </div>
);
}

export default App;
