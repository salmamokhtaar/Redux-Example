import {createSlice} from '@reduxjs/toolkit'

const counter= createSlice({
    name : "counter",
   initialState: {
    counterValue: 0,
   
   },
   
   reducers : {
      incriment: (state) =>{
        state.counterValue += 1;
      },
      decriment: (state) =>{
        state.counterValue -= 1;
      },
      reset: (state) =>{
        state.counterValue = 0
      },
      
   }
})

export const {incriment,decriment,reset}  = counter.actions

export default counter.reducer