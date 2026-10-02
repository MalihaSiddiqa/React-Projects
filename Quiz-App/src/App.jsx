import React from 'react'
import Start from './components/Start'
import Question from './components/Question'
import Result from './components/Result'

const App = () => {

  // 'start' | 'running' | 'end'
  const status = 'running'

  return (
    <div className='flex min-h-screen items-center justify-center p-4 text-white bg-linear-135 from-slate-950 to-slate-800'>
      <div className='w-full max-w-lg'>
        <div className='rounded-xl bg-slate-900 p-8 shadow-2xl shadow-black/40'>

          <h1 className='text-center text-3xl font-semibold '>Quizz</h1>
          
          {/* start, question and result */}
          { status === 'start' && <Start/>}
          { status === 'running' && <Question/>}
          { status === 'end' && <Result/>}
        </div>

      </div>
    </div>
  )
}

export default App
    
