import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  
  const handleSubmit = (productId) => {
    // console.log("Product ID: " + productId);
    const product = products.find((p) => p.id === productId);

    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (item) => item.id === productId
      );

      if (existingCartItem) {
        return prevCartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  return (
    <div className="App">
      <Navbar
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        setCartItems={setCartItems}
      />

        <Main
          products={products}
          setProducts={setProducts}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          onAddToCart={handleSubmit}
        />

    </div>
  );
}

export default App;
