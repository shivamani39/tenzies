import React from 'react'
import Die from './Die'

export default function App() {
  const [dices,setdices]=React.useState(allNewDice())
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }
  function Roll(){
    setdices(allNewDice())
  }
  const newElement=dices.map(dice=>{return <Die value={dice}/>})
  return (
    
    <div className='main'>
      <div className='Dies'>  
          {newElement}
      </div>
      <button className="roll-btn"onClick={Roll}>Roll</button>
    </div>
  )
}


