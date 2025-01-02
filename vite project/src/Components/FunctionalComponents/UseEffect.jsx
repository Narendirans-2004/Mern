import { useState,useEffect } from "react";
var UseEffect=()=>{
    var[text,SetText]=useState("");
    useEffect(()=>{
        console.log(text);
    },[text])
    return(
        <section>
            <h1>use effect</h1>
            <input type="text"placeholder="enter your text"value={text}onChange={(e)=>{
                SetText(e.target.value)
            }}/>
        </section>
    )
}
export default UseEffect;