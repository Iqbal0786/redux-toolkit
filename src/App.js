import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {add,minus} from "./features/counterSlice"
import { useEffect } from "react";
import { fetchUser } from "./features/userSlice";

export default function App() {
  const dispatch=useDispatch()
  const  {count} = useSelector((store)=>store.counter)
  const data = useSelector((store)=>store.user.data)
  console.log(data)
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Redux tool kit demo here !</h2>

      <button onClick={()=>{
             dispatch(add())
      }}>Add</button> <span id="count">{count} </span>
      <button
      onClick={()=>{
         if(count>0){
          dispatch(minus())
         }
     
 }}>Minus</button>
 
    </div>
         <h1 id="title">Fetched Data Results</h1>

          <div id="parent">
          {
           data.map((item)=>{
              return (
                <div key={item.id}>
                <h5>Name : {item.name}</h5>
                <h5>Email Id : {item.email}</h5>
                <h5>Website : {item.website}</h5>
              </div>
              )
           })
         }
          </div>
       
    </>
  );
}
