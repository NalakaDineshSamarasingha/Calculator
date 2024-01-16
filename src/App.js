import React , { useState } from 'react';
import './App.css';

function App() {
  const [operator,setOperator] = useState("");
  const [value,setValue] = useState("");
  const [total,setTotal] = useState("");
  
  function click(event){
    const btnValue = event.target.value;
    setValue(value + btnValue);
  }
  function clear(){
    setValue("");
    setTotal("");
  }
  function action(event){
    const x = event.target.value;
    setOperator(x);
    setTotal(total + value.toString());
    if(total && value !== ""){
      equal();
    }else{
      setValue("");
    }
  }
  function equal(){
    if(operator === "+"){
      setValue(Number(total)+Number(value));
    }else if(operator === "-"){
      setValue(Number(total)-Number(value));
    }else if(operator === "/"){
      setValue(Number(total)/Number(value));
    }else{
      setValue(Number(total)*Number(value));
    }
    setOperator("");
    setTotal("");
  }
  return (
    <div className="App">
        <div className="grid-container">
          <h1 className='display'>{value}</h1>
          <input type='submit' value="Clear" className='item1 item' onClick={clear} />
          <input type='submit' value="/" className='item' onClick={action} />
          <input type='submit' value="*" className='item' onClick={action} />
          <input type='submit' value="7" className='item' onClick={click} />
          <input type='submit' value="8" className='item' onClick={click} />
          <input type='submit' value="9" className='item' onClick={click} />
          <input type='submit' value="-" className='item' onClick={action} />
          <input type='submit' value="4" className='item' onClick={click} />
          <input type='submit' value="5" className='item' onClick={click} />
          <input type='submit' value="6" className='item' onClick={click} />
          <input type='submit' value="+" className='item2 item' onClick={action} />
          <input type='submit' value="1" className='item' onClick={click} />
          <input type='submit' value="3" className='item' onClick={click} />
          <input type='submit' value="2" className='item' onClick={click} />
          <input type='submit' value="0" className='item' onClick={click} />
          <input type='submit' value="00" className='item' onClick={click} />
          <input type='submit' value="." className='item' onClick={click} />
          <input type='submit' value="=" className='item3 item' onClick={equal} />
        </div>
    </div>
  );
}

export default App;
