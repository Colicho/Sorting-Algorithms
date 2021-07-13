import React from "react"

function Header(props){
    return(
        <div className="header">
            <div className="sortAlgos">
                <div class="dropbtn">{props.sortText}</div>
                <div class="dropdown-content">
                    <div onClick={() => props.sort('Bubble sort')}>Bubble sort</div>
                    <div onClick={() => props.sort('Selection sort')}>Selection sort</div>
                    <div onClick={() => props.sort('Insertion sort')}>Insertion sort</div>
                    <div onClick={() => props.sort('Quick sort')}>Quick sort</div>
                    <div onClick={() => props.sort('Merge sort')}>Merge sort</div>
                </div>
            </div>
            <div className="amount" onInput={() => props.size()}>
                Size
                <input type="range" id="sizeSlider" min="1" max="100"></input>
            </div>
            <div className="play">
                <button onClick={props.playButton}>Play</button>
            </div>
            <div className="speed" onInput={() => props.speed()}>
                Speed
                <input type="range" id="speedSlider" min="1" max="100"></input>
            </div>
            <div className="start">
                More options, size, speed
            </div>
            
        </div>
    )

}


export default Header