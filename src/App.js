import { serverUrl } from "./utils/serverUrl"
import { useState } from "react"

function App() {
  const[count,setCount]=useState(null)
  const[intervalId,setIntervalId]=useState(null)
  const[pause,setPause]=useState(false)

 

  // const handleStart=()=>{
  //    let id  =setInterval(() => {
  //     if(+count>0){
  //       setCount(prev=>{
  //         const newValue = prev-1
  //         if(newValue<0){
  //           clearInterval(intervalId)
  //         }
  //         return newValue
  //       })


  //     }else{
  //       clearInterval(intervalId)
  //     }

  //     console.log(count)


      
  //   }, 1000);
  //   setIntervalId(id)
  // }
  const handleStart = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let id = setInterval(() => {
      setCount(prev => {
        const newValue = parseInt(prev, 10) - 1;
        if (newValue <= 0) {
          clearInterval(id);
          setCount('0');
          return '0';
        }
        return newValue.toString();
      });
    }, 1000);
    setIntervalId(id);
    setPause(false);
  };

  const handlePause=()=>{
    setPause((prev)=>!prev)
    clearInterval(intervalId)
  }
  const handleButtonClick=(number)=>{
    console.log(number)
    setCount(prev => (prev ? prev.toString().trim() : '') + number.toString());
  }

  return (
    <div className="App">
          <h1 className='text-center fw-bold m-3'>Countdown Timer</h1>
   <div className='d-flex flex-column justify-content-center align-items-center'>
   <div className='p-3 m-5 '>
    <p className='fw-fon'> 
      
      { pause && <small className='text-danger'>paused</small>} </p>
    <input onChange={(e)=>setCount(e.target.value)} className='border-0 shadow-sm ' type="number" placeholder='enter time for countdown' value={count} />
   <div className='d-flex justify-content-between my-3'>
   <button className='bg-primary text-white rounded px-2' onClick={handlePause}>Pause</button>
   <button className='bg-primary text-white rounded px-2' onClick={handleStart}>Start</button>
   </div>
    </div>
    <div className="buttons-grid">
      <button onClick={(e)=>handleButtonClick(1)} className='grid-button'>1</button>
      <button onClick={(e)=>handleButtonClick(2)} className='grid-button'>2</button>
      <button onClick={(e)=>handleButtonClick(3)}   className='grid-button'>3</button>
      
    
      <button   onClick={(e)=>handleButtonClick(4)} className='grid-button'>4</button>
      <button    onClick={(e)=>handleButtonClick(5)} className='grid-button'>5</button>
      <button   onClick={(e)=>handleButtonClick(6)} className='grid-button'>6</button>
      <button    onClick={(e)=>handleButtonClick(7)}  className='grid-button'>7</button>
      <button  onClick={(e)=>handleButtonClick(8)}  className='grid-button'>8</button>
      <button    onClick={(e)=>handleButtonClick(9)}  className='grid-button'>9</button>
      <button   onClick={(e)=>handleButtonClick(0)}  className='grid-button'>10</button>
    </div>
   </div>
      
    </div>
  );
}

export default App;
