import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'  // istimcaal hada Value wacrysi
import { incriment,decriment,reset } from '../redux/reducer/counter'

function App() {
   const value = useSelector((state) => state.counter.counterValue)

   const Dispatch = useDispatch()

   const handleIncrement= () => {
    Dispatch((incriment()))
   }
   const handleDecrement= () => {
    Dispatch((decriment()))
   }
   const handlereset= () => {
    Dispatch((reset()))
   }
  return (
    <div className='text-center mt-32'>
      <h1 className='text-5xl'>{value}</h1>
      <button onClick={handleIncrement} className='bg-blue-500 text-4xl  px-10 py-3 mt-16  text-white text-center -green-500 border-2'>+</button>
      <button onClick={handleDecrement} className='bg-blue-500  px-10  ml-20  mt-16 py-3   text-4xl text-white text-center  border-green-500 border-2'>-</button>
      <button onClick={handlereset} className='bg-blue-500  px-10  ml-20  mt-16 py-3   text-4xl text-white text-center  border-green-500 border-2'>AC</button>
    </div>
  )
}

export default App
