import Card from "./components/Card"

 const productData= [
  {
    "id": 1,
    "productPicture": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Nike Running Shoe",
    "tag1": "EU38",
    "tag2": "RED/WHITE",
    "productDescription": "Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-net style.",
    "price": "$69.99"
  },
  {
    "id": 2,
    "productPicture": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Air Cushion Sneaker",
    "tag1": "EU42",
    "tag2": "MULTI/PASTEL",
    "productDescription": "Experience epic energy with responsive air cushioning designed for maximum daily comfort and street style.",
    "price": "$129.99"
  },
  {
    "id": 3,
    "productPicture": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Vans Classic Skate",
    "tag1": "EU40",
    "tag2": "BLACK/WHITE",
    "productDescription": "An icon of casual culture, featuring a low-rise canvas upper, signature side stripe, and durable waffle outsole.",
    "price": "$75.00"
  },
  {
    "id": 4,
    "productPicture": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Retro Runner 574",
    "tag1": "EU41",
    "tag2": "TEAL/WHITE",
    "productDescription": "Built to be a reliable shoe for many different uses, combining lightweight midsole cushioning with classic suede.",
    "price": "$89.99"
  },
  {
    "id": 5,
    "productPicture": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Puma Sport Performance",
    "tag1": "EU43",
    "tag2": "WHITE/BLACK",
    "productDescription": "Advanced stability meets soft cushioning. Engineered for training with responsive foam technology.",
    "price": "$159.99"
  },
  {
    "id": 6,
    "productPicture": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Converse High Top",
    "tag1": "EU37",
    "tag2": "RED/WHITE",
    "productDescription": "The definitive canvas sneaker with a timeless silhouette, classic ankle patch, and durable rubber sole.",
    "price": "$65.00"
  },
  {
    "id": 7,
    "productPicture": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Colorblock Streetwear",
    "tag1": "EU39",
    "tag2": "MULTI/BRIGHT",
    "productDescription": "Bold patterns meet urban functionality. Crafted with sturdy synthetic uppers and extra padding for all-day wear.",
    "price": "$70.00"
  },
  {
    "id": 8,
    "productPicture": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Classic Court Sneaker",
    "tag1": "EU44",
    "tag2": "WHITE/NAVY",
    "productDescription": "Minimalist tennis-inspired style crafted with soft leather. Clean design details give off an effortless throwback vibe.",
    "price": "$80.00"
  },
  {
    "id": 9,
    "productPicture": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Pro Marathon Trainer",
    "tag1": "EU42",
    "tag2": "CYAN/YELLOW",
    "productDescription": "Revamped with lightweight materials and high stack height for a plush, responsive daily running experience.",
    "price": "$145.00"
  },
  {
    "id": 10,
    "productPicture": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
    "productTitle": "Urban Explorer Low",
    "tag1": "EU45",
    "tag2": "OLIVE/BLACK",
    "productDescription": "Engineered with durable TPU film and breathable mesh built to withstand city streets and rugged terrain alike.",
    "price": "$110.00"
  }
]
function App() {
  return(
  <>
  <div className="card-grid">
    {productData.map((elem,idx)=>{
      return <Card key={idx} 
      img={elem.productPicture}
      title={elem.productTitle}
      tag1={elem.tag1}
      tag2={elem.tag2}
      Description={elem.productDescription}
      price={elem.price}
      />
    })}
</div>
  </>
  )
}

export default App
