import React from "react"

export default function Die(props){
    return (
        <div>
            <div className="die-num">{props.value}</div>
        </div>
    )
}