import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice"
import fevorateReducer from '../features/fevorateSlice'
import reduxLogger from "redux-logger"
console.log(reduxLogger);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    fevorateReducer
  }
});
