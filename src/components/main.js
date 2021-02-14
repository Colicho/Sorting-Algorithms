import React from "react"
import bubbleSort from "../sortAlgos/bubblesort"


function Main(props){
    return(
        <div className="main">
            {bubbleSort([1, 5, 5, 7, 5])}
        </div>
    )
}


export default Main