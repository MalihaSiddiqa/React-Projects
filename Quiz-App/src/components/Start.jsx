import React, { useState } from 'react'
import Question from './Question'

const Start = () => {
   const [start,setStart]=useState(false)
    const handleStart=()=>{
     setStart(true)
    }
    if(start){
        return (<Question/>)
    }
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
        <h2 className='text-2xl font-semibold'>Ready to test yourself?</h2>
        <p className='text-slate-500'>Pick one answer to each question.</p>
        <button
        onClick={handleStart}
            className='mt-2 w-full rounded-lg bg-linear-135 from-orange-500 to-amber-400 p-3 font-semibold transform hover:scale-103'
        >Start Quiz</button>
    </div>
  )
}

export default Start