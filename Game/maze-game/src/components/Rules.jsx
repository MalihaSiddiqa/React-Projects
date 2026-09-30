const Rules = (props) => {
  return (
    <div>
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='bg-amber-100 border-4 border-black p-6 rounded-lg w-95 shadow-2xl relative'>
            <h2 className='text-2xl font-bold mb-4 text-center text-amber-800'>
              Game Rules
            </h2>
            
            <ol className='list-decimal list-inside space-y-2 text-gray-800 font-medium mb-6'>
             <li>Click on a box to reveal its hidden number.</li>
            <li>Avoid primes below 30 - if you click on one, you lose.</li>
            <li>Clicking on any other number reveals that number along with
            all its multiples.</li>
           <li>Click on '1' to win the game.</li>

            </ol>

            <button
              onClick={()=>props.setShowRules(false)}
              className='w-full py-2 bg-amber-800 text-white font-bold border-2 border-black rounded-md hover:bg-amber-900 transition-colors'
            >
              Got It 
            </button>
          </div>
        </div>
    </div>
  )
}

export default Rules
