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
  const [regenerate, setRegenerate] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    let passPool = "";
    if (lowercaseAllowed) passPool += "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseAllowed) passPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) passPool += "0123456789";
    if (symbolsAllowed) passPool += "!@#$%^&*()_+~|}{[]></-=";

    if (passPool === "") {
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
    regenerate,
  ]);

  // Dynamic percentage for the strength bar
  const strengthPercentage = Math.min(
    Math.round((passwordLength / 12) * 100),
    100
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-4 py-8">
      {/* Main Container Card */}
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl flex flex-col gap-6">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center tracking-tight">
          Random Password Generator
        </h1>

        {/* Password Display Field & Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full bg-transparent px-3 py-2 text-lg sm:text-xl font-mono text-white outline-none truncate"
            placeholder="Generate password"
          />
          <div className="flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={() => setRegenerate((prev) => !prev)}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-lg transition-colors cursor-pointer"
              aria-label="Regenerate password"
            >
              <RotateCcw className="size-5 text-slate-300" />
            </button>
            <button
              onClick={copyPassword}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 font-semibold rounded-lg transition-colors text-sm sm:text-base text-white cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Password Strength Indicator */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                passwordLength <= 6
                  ? "bg-red-500"
                  : passwordLength <= 8
                  ? "bg-amber-400"
                  : "bg-emerald-400"
              }`}
              style={{ width: `${strengthPercentage}%` }}
            />
          </div>
          <span
            className={`text-xs font-semibold uppercase tracking-wider min-w-16 text-right ${
              passwordLength <= 6
                ? "text-red-500"
                : passwordLength <= 8
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {passwordLength <= 6
              ? "Weak"
              : passwordLength <= 8
              ? "Average"
              : "Strong"}
          </span>
        </div>

        {/* Configuration Section */}
        <div className="flex flex-col gap-6 pt-2 border-t border-slate-800">
          
          {/* Length Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <label htmlFor="pass-len" className="text-slate-300">
                Password Length
              </label>
              <span className="font-mono text-orange-400 font-bold text-base">
                {passwordLength}
              </span>
            </div>
            <input
              id="pass-len"
              type="range"
              min={4}
              max={50}
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-200">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={uppercaseAllowed}
                onChange={() => setUppercaseAllowed((prev) => !prev)}
                className="size-4 accent-orange-500 cursor-pointer rounded"
              />
              Uppercase
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={lowercaseAllowed}
                onChange={() => setLowercaseAllowed((prev) => !prev)}
                className="size-4 accent-orange-500 cursor-pointer rounded"
              />
              Lowercase
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={numbersAllowed}
                onChange={() => setNumbersAllowed((prev) => !prev)}
                className="size-4 accent-orange-500 cursor-pointer rounded"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={symbolsAllowed}
                onChange={() => setSymbolsAllowed((prev) => !prev)}
                className="size-4 accent-orange-500 cursor-pointer rounded"
              />
              Symbols
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;