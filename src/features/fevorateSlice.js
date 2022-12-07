import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fevorateUsers:[]
}

const fevorateSlice= createSlice({
    name:'fevorate',
    initialState,
    reducers:{
        addFevorate:(state,action)=>{
            state.fevorateUsers.push(action.payload)
        },
        deleteById:(state,action)=>{
            const filtered= state.fevorateUsers.filter((user)=>user.id!==action.payload);
             state.fevorateUsers=filtered
        }
    }
})
export const {addFevorate,deleteById}= fevorateSlice.actions
export default  fevorateSlice.reducer