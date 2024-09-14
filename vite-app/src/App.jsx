import React from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'

export default function App() {
  const [dices,setdices]=React.useState(allNewDice())
  const [Tenzies,settenzies]=React.useState(false)

  React.useEffect(()=>{
      console.log("dice state changed")
  },[dices])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(genaratedice())
    }
    return newDice
  }
  function genaratedice(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  // console.log(dices)
  function Roll(){
    setdices(dices=>dices.map(dice=>{
        return(dice.isHeld)
        ?dice
        :genaratedice()
    }))
  }
  function onHold(mid){
      console.log(mid);

      setdices(olddices=>olddices.map(dice=>{
        return (dice.id==mid?{...dice,isHeld:!dice.isHeld}:dice)
  }))
  }
  const newElement=dices.map(dice=>{return <Die key={dice.id} onHold={()=>{onHold(dice.id)}} isHeld={dice.isHeld} value={dice.value}/>})
  return (
    
    <div className='main'>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='Dies'>  
          {newElement}
      </div>
      <button className="roll-btn"onClick={Roll}>Roll</button>
    </div>
  )
}


