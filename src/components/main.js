import React from "react"
import bubbleSort from "../sortAlgos/bubblesort"
import selectionSort from "../sortAlgos/quicksort"


function Main(props){
    return(
        <div className="main">
            {selectionSort([1, 5, 1, 5, 7, 5])}
        </div>
    )
}


export default Main