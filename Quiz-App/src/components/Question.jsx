import React from 'react'
import questions from '../data/questions.js'

const Question = () => {
    const currentIndex = 0
    const currQuestion = questions[currentIndex]
    const total = questions.length
    // const selected = null
    const selected = currQuestion.choices[1]


  return (
    <div className='flex flex-col gap-5'>
        <p className='text-sm text-slate-500'>Question {currentIndex + 1} of {total}</p>

        <h2 className='text-lg'>{currQuestion.question}</h2>

        <ul className='flex flex-col gap-2'>
            {
                currQuestion.choices.map( choice => (
                    <li key={choice}>
                        <button className={`w-full rounded-lg p-3 text-left transition hover:translate-x-1
                                ${
                                    choice === selected 
                                        ? 'bg-linear-135 from-purple-700 to-blue-500 font-medium' 
                                        : 'bg-linear-135 from-slate-800 to-slate-700 '

                                }
                            
                            `}>
                            {choice}
                        </button>
                    </li>
                ))
            }
        </ul>

        {/* next btn */}

        {
            selected &&
            <button
                className='w-full rounded-lg bg-linear-135 from-orange-500 to-amber-400 p-3 font-semibold text-white transition hover:scale-103'
            >Next Question</button>
        }

    </div>
  )
}

export default Question