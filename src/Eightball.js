import React, { useState } from 'react';
// import { findByLabelText } from '@testing-library/react';

function Eightball({answers}){

  const [answer, setAnswer] = useState({msg: 'Think of a Question', color: 'black'})
  
  function randomAnswer(){
    setAnswer(answers[Math.floor(Math.random()*answers.length)])
  }

//  return (
//    <div onClick={randomAnswer(answers)} style = {[{backgroundColor: answer.color}, {borderRadius: '50%'}]}>
//      <b>{answer.msg}</b>
//    </div>
//  )
const style = {
  backgroundColor: answer.color,
  borderRadius: '50%',
  width: '300px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
}

 return (
  <div onClick={randomAnswer} style={style}>
    <b>{answer.msg}</b>
  </div>
)
}

export default Eightball


//don't call the function, can't input the asnwers, update styling