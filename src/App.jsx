import { useState } from "react"

export default function App() {
  const [color , setColor] = useState('red');
  
  function handleClick(bgColor){
    setColor(bgColor);
    
  }

  return (
      <div className="w-full h-screen"
      style={{backgroundColor: color}}
      >
        <div 
        className="fixed top-5 w-full h-auto flex justify-center items-center bg-white"
        style={{color: color , opacity: 0.4 }}
        >
          <a href="https://www.aprimregmi.com.np" target="_blank">aprimr.</a>
        </div>
        <div className=" fixed flex flex-wrap gap-8 justify-center bottom-5 inset-x-0 bg-white py-4 ">
          <Button bgColor="red" onClick={handleClick}/>
          <Button bgColor="magenta" onClick={handleClick}/>
          <Button bgColor="green" onClick={handleClick}/>
          <Button bgColor="orange" onClick={handleClick}/>
          <Button bgColor="blue" onClick={handleClick}/>
          <Button bgColor="teal" onClick={handleClick}/>
        </div>
      </div>
  )
}

function Button({bgColor,onClick}){
  return(
    <>
      <button 
      className=" px-6 py-1 rounded-2xl text-white border-none font-semibold cursor-pointer uppercase"
      style={{backgroundColor : bgColor}}
      onClick={() => onClick(bgColor)}
      >{bgColor}</button>
    </>
  )
}
