import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [multipliedCount, setMultipliedCount] = useState(0);
  const [devide, setDevide] = useState(0);

  const muldev=()=>{
    setMultipliedCount(count * 10);
    setDevide(count / 10);
  }


  useEffect (() => {
    muldev();
  }, [count]); 

  return (
    <div>
      <h1>{count} </h1>
      <h2>Multiplied by 10: {multipliedCount}</h2>
      <h2>devide by 10: {devide}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button disabled={count<=0} onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default App