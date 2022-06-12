import { createSlice } from "@reduxjs/toolkit";

const initialState={
  count:0
}

const counterSlice= createSlice({
  name:"counter",
  initialState,
  reducers:{
    add:(state)=>{state.count++},
    minus:(state)=>{state.count--}
  }

})

export const {add,minus}= counterSlice.actions;
export default counterSlice.reducer