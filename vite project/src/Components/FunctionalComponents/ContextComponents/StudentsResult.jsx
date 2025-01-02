import { useContext } from "react";
import {ThemeProvider}from "../UseContext";
var StudentsResult=()=>{
    var result=useContext(ThemeProvider)
    return(
        <section>
            <h3>In Students sgpa Resultis {result.sgpa}</h3>
        </section>
    )
}
export default StudentsResult;