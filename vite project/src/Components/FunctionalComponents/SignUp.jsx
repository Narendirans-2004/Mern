import { useState } from "react";
import axios from 'axios'
import {useNavigate}
function SignUp() {
  const[firstName,setFName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[cpassword,setCpassword]=useState("")
  var signup=async(event)=>{
    event.preventDefault();
      var req= await axios.post("mongodb+srv://narendirans:15-Sep-04@cluster0.yqqvewa.mongodb.net/",{
        firstName:firstName,
        email:email,
        password:password,
        cpassword:cpassword
      })
      console.log(req)
  }
    return (
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={signup}>
          <input type="text"value={firstName} placeholder="Full Name" required />
          <input type="email"value={email} placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Signup</button>
        </form>
        <p className="toggle-text">
          Already have an account?{" "}
          <span>
            Login
          </span>
        </p>
      </div>
    );
  };
export default SignUp;
