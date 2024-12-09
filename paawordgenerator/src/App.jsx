import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numballowed,setNumAllowed] = useState(false);
  const[Char,setCharector] = useState(false)
  const [pass,setPass]= useState("")

    //useref hook
    const passwordRef= useRef(null)

  const PasswordGenerator= useCallback(() => {
    let Password=""
    let str="ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"
    if(numballowed)str+="0123456789"
    if(Char) str+= "!@#$%^&*—_+=[]{}~`"

    for (let index = 1; index <= length; index++){
      let char  = Math.floor(Math.random()*str.length+1)
      Password += str.charAt(char)
     
    }
    setPass(Password)

  },[length,numballowed,Char,setPass
  ])

  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {
    PasswordGenerator()
  },[length,numballowed,Char,setPass])

  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center  items-center bg-cover bg-no-repeat '
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg ')`,

    }}>
    <div className='w-full max-w-md mx-auto shadow-3xl backdrop-blur-sm bg-white/30
    
    rounded-xl px-4 py-3 my-8 text-orange-500  '
    >
      <h1 className='text-4xl font-bold text-center text-black  text- my-3'>Password Generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

        <input type="text"
          value={pass}
          className="outline-none w-full py-1 px-3 "
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copypasswordtoclipboard}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 ml-3 hover:border-transparent rounded-lg'>copy</button>
        <button
        onClick={PasswordGenerator} 
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 ml-3 hover:border-transparent rounded-lg'>regenerate</button>
       </div>

       <div className='flex text-sm gap-x-2 '>
       <div className='flex items-center gap-x-1 '>
        
        <input 
        type="range" 
        min={8}
        max={100}
         value={length}
         className='cursor-pointer '
         onChange={(e)=> {setLength(e.target.value)}}
         />
         <label >Length:{length}</label>
       </div>


       <div className='flex items-center overflow-auto gap-x-1'>
         <input 
         type="checkbox"
         defaultChecked={numballowed}
         id='numberInput'
         onChange={() => {
          setNumAllowed((prev) => !prev);
         }}
         
         />
         <label htmlFor="numberInput">Numbers</label>
       </div>
       <div className='flex items-center gap-x-1'>
         <input 
         type="checkbox"
         defaultChecked={Char}
         id='charInput'
         onChange={() => {
          setCharector((prev) => !prev);
         }}
         
         />
         <label htmlFor="charInput">Charector</label>
       </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default App
