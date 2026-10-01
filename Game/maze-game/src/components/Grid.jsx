import { useState } from "react";
import Rules from "./Rules";

const Grid = ({ playerName, onGoHome }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [showRules, setShowRules] = useState(false);
  const [gridNumbers, setGridNumbers] = useState({});
  const [won,setWon]=useState(false)
  const [lose,setLose]=useState(false)

  function handleShowRules() {
    setShowRules(true);
  }
  if (showRules) {
    return <Rules showRules={showRules} setShowRules={setShowRules} />;
  }

  const handleClick = (row, col) => {
    const key = `${row}-${col}`;

    // If already clicked, do nothing
    if (gridNumbers[key] !== undefined || won) return;

    // Generate random integer between 0 and 100
    const randomNum = Math.floor(Math.random() * 100) +1;
   const multiples=[]
    for (let i=randomNum*2; i<= 100; i+=randomNum){
    multiples.push(i)
    }

    const emptyCells = [];
  rows.forEach((r) => {
    cols.forEach((c) => {
      const cell = `${r}-${c}`;
      if (cell !== key && gridNumbers[cell] === undefined) {
        emptyCells.push(cell);
      }
    });
  });

  // 4. Shuffle available empty cells so multiples land randomly
  const shuffledCells = emptyCells.sort(() => Math.random() - 0.5);

  // 5. Construct the new batch of revealed numbers
  const newUpdates = {
    [key]: randomNum, // Put the rolled number directly into the clicked cell
  };

  multiples.forEach((multipleVal, index) => {
    if (index < shuffledCells.length) {
      newUpdates[shuffledCells[index]] = multipleVal;
    }
  });
    // Save into state
    setGridNumbers((prev) => ({
      ...prev,
      ...newUpdates,
    }));
  
  if(randomNum === 1){
     setTimeout(() => {
      setWon(true);
    }, 300)
  }
  const primes=[2,3,5,7,11,13,17,19,23,29]
    if(primes.includes(randomNum)){
     setTimeout(() => {
      setLose(true);
    }, 300);
  }
};
  const handlePlayAgain = () => {
  setGridNumbers({});
  setWon(false);
  setLose(false);
};
const handleReset=()=>{
  setGridNumbers({});
}
  return (
    <div className="flex justify-center flex-col">
      <h1 className="bg-amber-700 font-bold text-6xl">
        Maze Game / Hello {playerName}
      </h1>
      <nav className="flex justify-center mt-8 gap-4">
        <button
          onClick={onGoHome}
          className="border-2 border-solid border-black h-7 px-2 bg-amber-500"
        >
          Go Home
        </button>
        <button 
        onClick={handleReset}
        className="border-2 border-solid border-black h-7 px-2 bg-amber-500">
          Reset Game
        </button>
        <button className="border-2 border-solid border-black h-7 px-2 bg-amber-500">
          Leader Board
        </button>
        <button
          onClick={handleShowRules}
          className="border-2 border-solid border-black h-7 px-2 bg-amber-500"
        >
          i
        </button>
        <h1 className="h-7 px-2 font-bold text-2xl"> Score: 100</h1>
      </nav>
      <table className="h-175 w-175 table-fixed border-4 border-solid border-black border-separate border-spacing-2 mt-10">
        <tbody>
          {rows.map((row) => (
            <tr key={row} className="h-15 w-full ">
              {cols.map((col) => {
                const cellKey = `${row}-${col}`;
                const cellValue = gridNumbers[cellKey];
                return (
                  <td
                    key={col}
                    className="h-14 w-14 border-3 border-solid border-black"
                  >
                    <button
                      onClick={() => handleClick(row, col)}
                      className="h-full w-full flex items-center justify-center font-bold text-3xl cursor-pointer bg-amber-100"
                    >
                      {cellValue !== undefined ? cellValue : ""}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Win Modal Card */}
      {won && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
          <div className="bg-amber-100 border-4 border-black p-8 rounded-xl shadow-2xl text-center flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-2">🎉 You Won! 🎉</h2>
            <p className="text-lg font-semibold text-black mb-6">
              You found number 1!
            </p>
            <button
              onClick={handlePlayAgain}
              className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold text-lg rounded-md border-2 border-black transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )};

       {lose && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
          <div className="bg-amber-100 border-4 border-black p-8 rounded-xl shadow-2xl text-center flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-2">You Lose!! </h2>
            <p className="text-lg font-semibold text-black mb-6">
              You clicked on a Prime Number Below 30!
            </p>
            <button
              onClick={handlePlayAgain}
              className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold text-lg rounded-md border-2 border-black transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )};
      </div>
    )
  };
export default Grid;
