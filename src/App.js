import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';

function App() {
  const [Result,setResult]=useState("");
  const [Answer,setAnswer]=useState("");

  const handle=(e)=>{
    e.preventDefault()
    setResult(Result.concat(e.target.value))
  }
 const evaluate=(e)=>{
  e.preventDefault();
  setAnswer(eval(Result))
 }
 const clear=(e)=>{
  e.preventDefault();
  setResult("")
  setAnswer("")
 }
 const del=(e)=>{
  e.preventDefault()
  setResult(Result.slice(0,-1))

}
 
  return (
    <div className="bg-black h-screen">
    <div className="bg-neutral-800 w-screen rounded-b-3xl">
      <h1 className=' ml-5 pt-2 text-white italic font-bold text-2xl flex '>
    
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
</svg>




       
        Calc...
      </h1>
    <div className="bg-black w-screen flex">
      <div className=" text-white font-bold text-xl">
        <form className='mt-64 ml-5 md:mt-10 md:ml-96'>
          <div className=' h-48 flex justify-end flex flex-col gap-3'>
            
            <h1 className='text-4xl   flex justify-end '>{Result}</h1>
            <h1 className=' text-5xl font-light flex justify-end mb-10'>{Answer}</h1>
            
          </div>
          <div className='grid grid-cols-4  gap-4 text-white text-3xl '>
          <input type='submit' value='AC' onClick={clear} className='text-black text-lg  rounded-full bg-white  shadow-2xl p-4 pt-2 pb-2'/>
          <button onClick={del} className='rounded-full bg-white text-black shadow-2xl p-4 pt-2 pb-2 w-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-7">
  <path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" clipRule="evenodd" />
</svg></button>
         
          <input type='submit' value='%' onClick={handle} className='rounded-full bg-white text-black shadow-2xl p-4 pt-2 pb-2 w-20'/>
          <input type='submit' value='/' onClick={handle} className='rounded-full bg-orange-400  shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='1' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2 '/>
          <input type='submit' value='2' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2' />
          <input type='submit' value='3' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='+' onClick={handle} className='rounded-full bg-orange-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='4' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='5' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='6' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='-' onClick={handle} className='rounded-full bg-orange-400  shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='7' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='8' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='9' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='*' onClick={handle} className='rounded-full bg-orange-400  shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='.' onClick={handle} className='rounded-full bg-orange-400  shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='0' onClick={handle} className='rounded-full bg-stone-400 shadow-2xl p-4 pt-2 pb-2 w-20'/>
          <input type='submit' value='/' onClick={handle} className='rounded-full bg-orange-400  shadow-2xl p-4 pt-2 pb-2'/>
          <input type='submit' value='=' onClick={evaluate} className='rounded-full bg-green-400  shadow-2xl p-4 pt-2 pb-2'/>
          
          </div>
        </form>

      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
