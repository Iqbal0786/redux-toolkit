import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {add,minus} from "./features/counterSlice"

export default function App() {
  const dispatch=useDispatch()
  const  {count} = useSelector((store)=>store.counter)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Redux tool kit demo here !</h2>

      <button onClick={()=>{
             dispatch(add())
      }}>Add</button> <span>{count} </span>
      <button
      onClick={()=>{
         if(count>0){
          dispatch(minus())
         }
     
 }}>Minus</button>
    </div>
  );
}
