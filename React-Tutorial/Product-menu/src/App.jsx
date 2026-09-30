import React, { useState } from 'react';

// Sample Data Array
const PRODUCTS_DATA = [
  { id: 1, name: "Dark Chocolate Truffles", category: "Chocolates", price: 15 },
  { id: 2, name: "Red Rose Ribbon Bouquet", category: "Flowers", price: 25 },
  { id: 3, name: "Hazelnut Kunafa Bar", category: "Chocolates", price: 18 },
  { id: 4, name: "Pastel Satin Flower Box", category: "Flowers", price: 30 },
  { id: 5, name: "Assorted Mini Bites", category: "Chocolates", price: 12 },
];

export default function ProductApp() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);

  // Compute filtered products safely
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const categoryMatch = active === "All" || product.category === active;
    const searchMatch = (product.name || "")
      .toLowerCase()
      .includes((search || "").toLowerCase().trim());

    return categoryMatch && searchMatch;
  });

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h2>Royal Delights Shop</h2>
        <div style={styles.cartBadge}>🛒 Cart: {cart} items</div>
      </header>

      {/* Controls */}
      <div style={styles.controls}>
        <input 
          type="text" 
          placeholder="Search products..." 
          style={styles.input}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div style={styles.btnGroup}>
          {["All", "Chocolates", "Flowers"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                ...styles.button,
                backgroundColor: active === cat ? "#d4af37" : "#eee",
                color: active === cat ? "#fff" : "#333",
              }}
            > 
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No products found!</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button 
                style={styles.addBtn} 
                onClick={() => setCart(cart + 1)}
              >
                {console.log(filteredProducts)}
                Add to Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  cartBadge: { background: '#d4af37', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' },
  controls: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  input: { padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' },
  btnGroup: { display: 'flex', gap: '8px' },
  button: { padding: '8px 14px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' },
  card: { border: '1px solid #ddd', padding: '16px', borderRadius: '8px', textAlign: 'center', background: '#fafafa' },
  addBtn: { marginTop: '8px', padding: '6px 12px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

