import { useState } from "react";
var UseState=()=>{
var[count,setCount]=useState(0);
function increment(){
    setCount(count+1);
}
function decrement(){
    setCount(count-1);
}
function reset(){
    setCount(0);
}
return(
    
    <section>
        <h1>
            the state of my variable counter {count}
        </h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </section>
)
}
export default UseState;