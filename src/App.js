
import { useState } from 'react';
import './App.css';
import CounterData from './Components/counterData';
import CounterUi from './Components/counterUI';
import InputComponent from './Components/inputComponent';
import InputComponent1 from './Components/inputComponent1';
import Parent from './Components/Parent';
import InfiniteScroll from './Components/InfiniteScroll';

function App() {
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

 return (
   
    <>
    {/*<div>
      <Parent/>
    </div>*/}

     <InfiniteScroll/>
    </>
  );
}
export default App;
