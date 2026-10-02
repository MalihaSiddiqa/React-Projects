import React from 'react'
import questions from '../data/questions'

const Result = () => {

    const score = 2
    const total = questions.length
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
        <p className='text-slate-400'>Quiz complete</p>

        <h2 className='text-4xl font-bold'>{score} / {total}</h2>

        <p className='text-slate-400'>You got {score} out of {total} right.</p>
        
        <button className='mt-2 w-full rounded-lg bg-linear-135 from-orange-500 to-amber-400 p-3 font-semibold text-white transition hover:scale-103'>
            Restart Quizz
        </button>
    </div>
  )
}

export default Result