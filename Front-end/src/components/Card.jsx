import {Bookmark} from "lucide-react";
import  "../App.css";
import { useState } from "react";
function Card(props){
    const [isBookmarked,setIsBookmarked]=useState(false);
    const [isSaved,setIsSaved]=useState(false);

return (
    <>
    <div className="card-container">
        <div className="header-container">
        <Bookmark onClick={()=> setIsBookmarked(!isBookmarked)}
            style={{
                backgroundColor: isBookmarked ? "white" : "rgba(255,255,255,0.25)",
                color: isBookmarked ? "#5c4d82" :"white",
                fill: isBookmarked ? "#5c4d82" :"none",

                
            }}/>
        <img src={props.img} 
        alt="productImg">
        </img>
        </div>
        <div className="main">
          <h3 className="title">
            {props.title}
          </h3>
          <span className="tags">
            <p>{props.tag1}</p>
            <p>{props.tag2}</p>
          </span>
          <p className="product-description">
            {props.description}
            </p>
            <footer className="footer">
                <div className="price-container">
             <p>PRICE</p>
             <h2>{props.price}</h2>
             </div>
             <button className="add-btn" onClick={()=> setIsSaved(!isSaved)}
             style={{backgroundColor:isSaved ? "#2e7d32" : "#5c4d82",
                color:"white"
             }}
                > {isSaved ? "Saved!!" : "Add to cart"}</button>
            </footer>
        </div>
    </div>
    </>
)
}
export default Card;