import {useState} from 'react';
import './App.css';

function App() {

  const [word, setword] = useState(0)


  const changeval=(op)=>{

    if (op===1)
    
    {setword(word+1)}
    else{
      setword(word-1)
    }
    
  }


 
  
  return (
    <div className="App">
      <h1>COUNTERAPP</h1>
      <button onClick={()=>changeval(1)}>+</button>
      <h2>{word}</h2>
      <button onClick={()=>changeval(0)}>-</button>
    </div>
  );
}

export default App;
