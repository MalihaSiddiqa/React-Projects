import { useState } from "react";
import Grid from "./Grid";
import Rules from "./Rules";

const Home = () => {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(false);
  const [showRules, setShowRules] = useState(false);

  function handleStart() {
    if (input.trim() !== "") {
      setStart(true);
    } else {
      alert("Please enter your name");
    }
  }
  if (start) {
    return (<Grid 
      onGoHome={()=>setStart(false)}
      playerName={input}
       />)
  }
 
  function handleShowRules() {
     setShowRules(true);
  }
  if(showRules){
    return <Rules showRules={showRules} setShowRules={setShowRules}/>
  }
  return (
    <div className="min-h-screen flex items-center">
      <div className="">
        <h1 className="font-bold text-5xl p-6">Enter Your Name</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type Here...."
          className="border rounded-md border-black py-4 px-4 m-2 h-10 outline-none focus:ring-0"
        />
        <button
          onClick={handleStart}
          className="border border-black px-1 m-2 h-7 bg-amber-800 font-bold"
        >
          Start Game
        </button>
        <button 
        onClick={handleShowRules}
        className="border rounded-full border-black px-1 m-2 h-7 w-7 bg-amber-800 font-bold">
          i
        </button>
      </div>
    </div>
  );
};

export default Home;
