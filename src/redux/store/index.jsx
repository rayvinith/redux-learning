// apna dukan bn gya
import {configureStore} from "@reduxjs/toolkit"  

import counter from "../counterSlice"
// ab dukan ki setup 

export const store = configureStore({
reducer:{
  counterSuperman:counter  
},
})