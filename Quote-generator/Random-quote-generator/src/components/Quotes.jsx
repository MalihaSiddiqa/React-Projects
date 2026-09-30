import { useEffect } from "react"
import { useState } from "react"
import { Loader } from "lucide-react"

const Quotes = () => {
    const [quote,setQuote]=useState({ quotes: "", author: "" })
    const [loading,setLoading]=useState(false)

async function fetchQuote() {
    setLoading(true)
    try{
      const res=await fetch('https://dummyjson.com/quotes/random') 
      const data=await res.json()  
      setQuote({ quotes: data.quote, author: data.author });
      console.log(data)
    }
    catch(err){
    console.error("Failed to load quote", err);
    } finally {
      setLoading(false);
    }
}
useEffect(()=>{
fetchQuote();
},[])
  return (
    <div
    className="flex justify-center items-center min-h-screen bg-amber-50">
        <div className="relative flex justify-center items-center flex-col bg-stone-50 border border-stone-200
         shadow-md shadow-stone-200/60 text-stone-800 h-70 w-110 rounded-[50px] px-8 ">
      <h1 className="absolute top-0 -translate-y-1/2 bg-slate-700 border border-slate-950 shadow-md shadow-slate-950/60
       text-white rounded-2xl font-serif italic text-3xl  px-2 py-1" >
      Quote Generator</h1>
      {loading ? (<Loader />) : (
      <blockquote>
      <p className="font-serif italic text-[20px]" >'{quote.quotes}'</p>
      <p className=" w-full text-right font-sans text-xs uppercase mt-4 opacity-70">~{quote.author}</p>
      </blockquote>
      )}
      <button onClick={fetchQuote} disabled={loading}
      className="absolute bottom-0 translate-y-1/2 font-serif italic text-2xl bg-slate-700 hover:bg-slate-900
       active:bg-slate-400 cursor-pointer border border-slate-950 shadow-md shadow-slate-950/60  text-white rounded-2xl px-2 py-1"
      >New Quote</button>
      </div>
    </div>
  )
}
export default Quotes
