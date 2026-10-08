import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
const App = () => {
  const [password, setPassword] = useState("randompasswordgenerator");
  const [passwordLength, setPasswordLength] = useState(8);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(false);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reGenerate,setReGenerate]=useState(false)

  
  const copyPassword = () => {
    navigator.clipboard.writeText(password);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    // whenever any of the values inside the dependency array changes, the password will be regenerated
    let passPool = "";
    if (lowercaseAllowed) passPool += "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseAllowed) passPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) passPool += "0123456789";
    if (symbolsAllowed) passPool += "!@#$%^&*()_+-=[]{}/?<>.|:;`~'";

    if (passPool == "") {
      setPassword("");
      return;
    }

    let tempPass = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passPool.length);
      tempPass += passPool[randomIndex];
    }
    setPassword(tempPass);
  }, [
    passwordLength,
    uppercaseAllowed,
    lowercaseAllowed,
    numbersAllowed,
    symbolsAllowed,
    reGenerate,
  ]);
const strengthIndicator = ((passwordLength ) / 10) * 100;
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-900 text-white ">
      <h1 className="font-bold text-5xl mb-6">Random Password Generator</h1>
      <div className="w-max-md gap-15">
      <div className="flex flex-row border-2 border-slate-600 bg-slate-800 rounded-xl p-4 gap-8">
        <input
          type="text"
          className="text-3xl rounded p-2 outline-0"
          readOnly
          value={password}
        />
        <button 
        onClick={() => setReGenerate((prev) => !prev)}
        className="bg-slate-700 hover:bg-slate-800 active:bg-slate-900 cursor-pointer rounded-md p-2 h-10 mt-2">
         <RotateCcw />
         </button>
        <button
          onClick={copyPassword}
          className="transition bg-orange-500 hover:bg-orange-600 w-30 font-bold px-6 rounded-lg cursor-pointer "
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    {/* Strength Indicator Section */}
<div className="w-full flex items-center gap-3 my-2">
  {/* The Bar */}
  <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
    <div
      className={`${ 
            passwordLength <= 6
            ? "bg-red-500"
            : passwordLength <= 8
            ? "bg-amber-400"
            : "bg-emerald-400"}
             h-full rounded-full transition-all duration-300`}
          style={{ width: `${strengthIndicator}%` }}
    />
  </div>

  {/* Strength Label on the Right */}
  <span
    className={`text-sm font-semibold min-w-16 text-right ${
      passwordLength <= 6
        ? 'text-red-500'
        : passwordLength <= 8
        ? 'text-amber-400'
        : 'text-emerald-400'
    }`}
  >
    {passwordLength <= 6 ? 'Weak' : passwordLength <= 8 ? 'Average' : 'Strong'}
  </span></div>
</div>
      {/* all the password settings div */}
      <div className="flex flex-col font-bold border-2 border-slate-600 bg-slate-800 rounded-xl p-10 gap-8 text-xl">
        {/* password length div */}
        <div className="flex gap-4">
          <label htmlFor="pass-len">Passsword length {passwordLength} </label>
          <input
            type="range"
            min={4}
            max={50}
            value={passwordLength}
            onChange={(event) => setPasswordLength(event.target.value)}
            className="w-100 accent-orange-400 cursor-pointer"
            id="pass-len"
          />
        </div>

        {/* password config div */}
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex items-center gap-2">
            <input
              checked={uppercaseAllowed}
              onChange={() => setUppercaseAllowed((prev) => !prev)}
              type="checkbox"
              id="upper-case"
              className="size-6 cursor-pointer accent-orange-500"
            />
            <label htmlFor="upper-case">Uppercase</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={lowercaseAllowed}
              onChange={() => setLowercaseAllowed((prev) => !prev)}
              type="checkbox"
              id="lower-case"
              className="size-6 cursor-pointer accent-orange-500"
            />
            <label htmlFor="lower-case">Lowercase</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
              type="checkbox"
              id="numbers"
              className="size-6 cursor-pointer accent-orange-500"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={symbolsAllowed}
              onChange={() => setSymbolsAllowed((prev) => !prev)}
              type="checkbox"
              id="symbols"
              className="size-6 cursor-pointer accent-orange-500"
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
      </div>
  );
};

export default App;
