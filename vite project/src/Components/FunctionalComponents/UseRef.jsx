import { useState, useRef, useEffect } from "react";

const UseRef = () => {
    const [number, setNumber] = useState(0);
    const prevNumber = useRef(0);

    useEffect(() => {
        prevNumber.current = number; // Update previous number after every render
    }, [number]);

    return (
        <section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>This is an example of useRef</h1>
            <label 
                htmlFor="numberInput" 
                style={{ marginRight: "10px" }}
            >
                Enter a number:
            </label>
            <input 
                id="numberInput" 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))}
                aria-label="Number input field" 
            />
            <h2 style={{ marginTop: "20px" }}>Current number: {number}</h2>
            <h3>Previous number: {prevNumber.current}</h3>
        </section>
    );
};

export default UseRef;
