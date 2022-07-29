import React from "react"

function Header(props){
    return(
        <div class="header">
            <div class="sortAlgos">
                {props.sortText}
                <div className="dropdown-content">
                    <div onClick={() => props.sort('Bubble sort')}>Bubble sort</div>
                    <div onClick={() => props.sort('Selection sort')}>Selection sort</div>
                    <div onClick={() => props.sort('Insertion sort')}>Insertion sort</div>
                    <div onClick={() => props.sort('Quick sort')}>Quick sort</div>
                    <div onClick={() => props.sort('Merge sort')}>Merge sort</div>
                </div>
            </div>
            <div class="size" onInput={() => props.size()}>
                Size
                <input type="range" id="sizeSlider" min="1" max="100"></input>
            </div>
            <div class="play">
                <button onClick={props.playButton}>Play</button>
            </div>
            <div class="speed" onInput={() => props.speed()}>
                Speed
                <input type="range" id="speedSlider" min="1" max="100"></input>
            </div>
            <div className="options">
                More options, size, speed
            </div>
            
        </div>
    )

}


export default Header