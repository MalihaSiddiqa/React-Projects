import React from 'react'
import Tasks from './components/Tasks'

function App() {
  return (
    <div 
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'100vh'
      }}
    >
      <Tasks/>
    </div>
  )
}

export default App

