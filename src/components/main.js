import React from "react"
import bubbleSort from "../sortAlgos/bubblesort"
import selectionSort from "../sortAlgos/quicksort"


function Main(props){
    let value = props.sort
    if (typeof(props.sort) !== 'string'){
        value = props.sort([1, 5, 1, 5, 7, 62])
    }
    return(
        <div className="main">
            {value}
        </div>
    )
}

export default Main