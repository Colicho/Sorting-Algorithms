import React from "react"
import bubbleSort from "../sortAlgos/bubblesort"

function Header(props){
    return(
        <div className="header">
            <div className="sortAlgos">
                <button class="dropbtn">{props.sort}</button>
                <div class="dropdown-content">
                    <div onClick={() => props.sor('Bubble sort')}>Bubble sort</div>
                    <div onClick={() => props.sor('Selection sort')}>Selection sort</div>
                    <div onClick={() => props.sor('Insertion sort')}>Insertion sort</div>
                </div>
            </div>
            <div className="amount">
                Size
            </div>
            <div className="speed">
                speed
            </div>
            <div className="start">
                More options, size, speed          
            </div>
            
        </div>
    )
}

export default Header