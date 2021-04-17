import React from "react"

function Header(){
    return(
        <div className="header">
            <div className="sortAlgos">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="amount">
                sort 2
            </div>
            <div className="speed">
                sort 3 
            </div>
            <div className="start">
                More options, size, speed          
            </div>
            
        </div>
    )
}

export default Header