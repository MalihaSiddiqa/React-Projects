import { Heart } from 'lucide-react';
import React, { useState } from 'react'

const Quotes = () => {
    const quotesArray = [
  {
    id: 1,
    text: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.",
    author: "Rainer Maria Rilke"
  },
  {
    id: 2,
    text: "And the sun and the moon sometimes argue over who will tuck you in at night.",
    author: "Hafiz"
  },
  {
    id: 3,
    text: "There is a quiet light that shines within every human being.",
    author: "John O'Donohue"
  },
  {
    id: 4,
    text: "You do not have to be good. You do not have to walk on your knees for a hundred miles through the desert repenting. You only have to let the soft animal of your body love what it loves.",
    author: "Mary Oliver"
  },
  {
    id: 5,
    text: "I want to be soft, but not fragile. I want to be gentle, but strong.",
    author: "Rupi Kaur"
  },
  {
    id: 6,
    text: "There are years that ask questions and years that answer.",
    author: "Zora Neale Hurston"
  },
  {
    id: 7,
    text: "The quieter you become, the more you are able to hear.",
    author: "Rumi"
  },
  {
    id: 8,
    text: "I am blooming from the inside out.",
    author: "Yrsa Daley-Ward"
  },
  {
    id: 9,
    text: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day is by no means a waste of time.",
    author: "John Lubbock"
  },
  {
    id: 10,
    text: "Whatever is soft and feeling will never be broken.",
    author: "Lao Tzu"
  },
  {
    id: 11,
    text: "To be soft is to be powerful.",
    author: "Rupi Kaur"
  },
  {
    id: 12,
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus"
  }
];
const [currentQuote,setCurrentQuotes]=useState(quotesArray[0])
const [fav,setFav]=useState(false)
 function getRandomQuote() {
   const randomQuotes= Math.floor(Math.random() * quotesArray.length)
   setCurrentQuotes(quotesArray[randomQuotes])
 }
 const handleLike=()=>{
    setFav(!fav)
 }

  return (<>
    <div className='container'>
      <div className='card'>
        <div className='quotes-container'>
         <span style={{color:fav ? "red" : "black",cursor:"pointer"
         }}onClick={handleLike}><Heart/></span>
           <h2>Quote of the Day</h2>
           <p>"{currentQuote.text}"</p>
           <small>~{currentQuote.author}</small>
          <button onClick={getRandomQuote}>New Quote</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Quotes
