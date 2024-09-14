import React from "react"

export default function Die(props){
    const styles={
        backgroundColor: (props.isHeld)?"#59E391" : "white"
    }
    // const change=React.useEffect(()=>{return props.onHold},[props.onHold])
    return (
        <div>
            <div onClick={props.onHold} className="die-num" style={styles}>{props.value}</div>
        </div>
    )
}