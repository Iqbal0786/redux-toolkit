import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {add,minus} from "./features/counterSlice"
import { useEffect } from "react";
import { fetchUser } from "./features/userSlice";
import { addFevorate, deleteById } from "./features/fevorateSlice";
import { store } from "./app/store";

export default function App() {
  const dispatch=useDispatch()
  const  {count} = useSelector((store)=>store.counter)
  const data = useSelector((store)=>store.user)
  const fevorate= useSelector(store=>store.fevorateReducer);
  console.log('fevorate',fevorate)
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
          dispatch(deleteById(1))
         }
     
 }}>Minus</button>
 
    </div>
         <h1 id="title">Fetched Data Results</h1>

          <div id="parent">
          {
           data.data?.map((item)=>{
              return (
                <div key={item.id} onClick={()=>{
                   dispatch(addFevorate(item))
                }}>
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
