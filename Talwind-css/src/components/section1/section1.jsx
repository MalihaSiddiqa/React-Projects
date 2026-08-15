import React from 'react'
import { useState } from 'react'
import "../../App.css";

const Section1 = () => {
  const [num,setNum]=useState(0)
  const [textColor,setTextColor]=useState('red')

  function increase() {
    setNum(num+1)
    setTextColor('green')
  }
  function decrease() {
    setNum(num-1)
    setTextColor('red')
  }
  function jumpBy2() {
    setNum(num+2)
    setTextColor('green')
  }
  return (
    <div className='body'>
    <div className='container'>
      <div className='title'>
      <h1 className='count' style={{color:textColor}}>{num}</h1></div>
      <div className='btn-container'>
      <button  className='btn' onClick={increase}>Increase</button>
      <button className="btn" onClick={decrease}>Decrease</button>
      <button className="btn" onClick={jumpBy2}>Jump By 2</button>
</div>
    </div>
    </div>
  )
}

export default Section1
