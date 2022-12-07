import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:''

}
export const fetchUser=createAsyncThunk("user/fetchUser" ,()=>{
    return  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        // console.log(res.data)
        return res.data
    })
})

const userSlice= createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(fetchUser.pending,state=>{state.loading=true})
       builder.addCase(fetchUser.fulfilled, (state ,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
       })
       builder.addCase(fetchUser.rejected, (state,action)=>{
           state.loading=false
           state.data=[]
           state.error=action.error?.message
          
       })
    }
})
export default userSlice.reducer
