import { useState,useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(6 )
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"
     if(numberAllowed) str+= "0123456789"
     if(characterAllowed) str+= "!@#$%^&*()-" 

     for (let i = 1; i <length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
       pass += str.charAt(char)
     }

     setPassword(pass)


  },[length,numberAllowed, characterAllowed,setPassword])

const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
   window.navigator.clipboard.writeText(password);
},[password])

  useEffect(()=> {
    passwordGenerator();

  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
   <div className='w-full max-w-md mx-auto shadow-md my-8 px-7 text-orange-500 bg-gray-600 text-center rounded-lg '>
    <h1 className='text-white text-center my-3 text-lg'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-2 mt-2'>
    <input className='outline-none w-full py-1 px-3 mb-5 rounded-lg' type="text" value={password} placeholder='Password ' readOnly ref={passwordRef}/>
    <button className='flex ml-4 bg-red-500 text-white h-8 w-32 text-center justify-center rounded-lg ' onClick={copyPassword}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length}  className='cursor-pointer'onChange={(e)=>{setLength(e.target.value)}} />
        <label >Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={(e)=>{setNumberAllowed((prev)=> !prev)}} />
        <label htmlFor='numberInput' >Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={characterAllowed} id='characterInput' onChange={(e)=>{setcharacterAllowed((prev)=> !prev)}} />
        <label htmlFor='characterInput' >Character</label>
      </div>
    </div>
   </div>
  )
}

export default App
