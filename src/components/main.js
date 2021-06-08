import React from "react"

function Main(props){
    let value = props.listData
    for(let i=0;i<value.length;i++){

    }
    return(
        <div className="main">
            <div className="test">
                <div id="bars">
                    {value}
                </div>
                <hr className="bar"></hr>
            </div>
        </div>
    )
}


export default Main