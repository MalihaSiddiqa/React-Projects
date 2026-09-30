import { useState } from "react";
import Rules from "./Rules";

const Grid = ({ playerName, onGoHome }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [showRules, setShowRules] = useState(false);
  const [gridNumbers, setGridNumbers] = useState({});
  function handleShowRules() {
    setShowRules(true);
  }
  if (showRules) {
    return <Rules showRules={showRules} setShowRules={setShowRules} />;
  }

  const handleClick = (row, col) => {
    const key = `${row}-${col}`;

    // If already clicked, do nothing
    if (gridNumbers[key] !== undefined) return;

    // Generate random integer between 0 and 100
    const randomNum = Math.floor(Math.random() * 101);

    // Save into state
    setGridNumbers((prev) => ({
      ...prev,
      [key]: randomNum,
    }));
  };

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
        <button className="border-2 border-solid border-black h-7 px-2 bg-amber-500">
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
    </div>
  );
};

export default Grid;
