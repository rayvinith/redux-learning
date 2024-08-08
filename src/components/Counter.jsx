import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { increaseby1,decreaseby1 } from '../redux/counterSlice'
const Counter = () => {
    const counter = useSelector((state)=>state.counterSuperman)
    const dispatch = useDispatch()
  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"2px solid #fff"}}>
      <h1>{counter}</h1>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" ,gap:"12px"}}>
<button onClick={()=>dispatch(increaseby1())} style={{padding:"2vw" , backgroundColor:"red"}}> Add by 1 </button>
    <button onClick={()=>dispatch(decreaseby1())} style={{padding:"2vw" , backgroundColor:"green"}}> subtract by 1 </button>
</div>
    
    </div>
  )
}

export default Counter
