
{/* Useref Example */}
// import { useRef } from 'react'

// const App = () => {
//   const inputElem=useRef();
//   console.log(inputElem)

//   const btnClicked=()=>{
//    inputElem.current.focus()
//   }
//   return (
//     <div>
//       <input placeholder='enter here..'  ref={inputElem}/>
//       <button onClick={btnClicked} >Click here</button>
//     </div>
//   )
// }

// export default App


{/*  UseMemo Example */}

// import { useState , useMemo} from 'react'

// const App = () => {
//     const [searchTerm,setSearchTerm]=useState('')

//     const [isDark,setIsDark]=useState(false)
//     const items =['Apple','Orange','Banana','Mango','PineApple','Grapes','WaterMelon']

//     const filteredItems=useMemo(()=>{console.log('Filtering Items....')
//         return items.filter(item => 
//         item.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       },[searchTerm])
      
//       {/*useEffect(()=>{
//         console.log('Filtering Items....')
//        setFilteredItems(
//          items.filter(item => 
//         item.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//        )
//       },[searchTerm])*/}
//     return(
//     <div>
//   <div style={{ 
//     backgroundColor: isDark ? '#222' : '#fff', 
//     color: isDark ? '#fff' : '#000', 
//     minHeight: '100vh', 
//     padding: '20px' 
//   }}>
//     <button onClick={() => setIsDark(!isDark)}>
//       Toggle Theme
//     </button>

//     <div style={{ marginTop: '16px' }}>
//       <input 
//         type="text" 
//         placeholder="Search fruit..." 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)} 
//       />
//     </div>

//     <ol>
//       {filteredItems.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ol>
//   </div>
//     </div>
//   )
// }

// export default App


{/* UseCallback Example*/}

import { useState, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useCallback wraps your function directly
  const handleIncrement =useCallback(() => {
    setCount((prev) => prev + 1);
  },[text]); // [] means: keep the exact same function instance across all renders

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>
      
      {/* Attach the memoized callback directly to your button */}
      <button onClick={handleIncrement}>
        Increment
      </button>

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;