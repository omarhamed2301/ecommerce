import React, {useState} from "react";

export default function Card({ src, title, desc, price, onAddToCart }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setAddedToCart(true);
  };
  return (
    <div className="cardd mb-3">
      <div className="card-img">
        <img src={src} alt="homepod" />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{desc}</p>
        {addedToCart ? (
          <p style={{color:'green', fontWeight:'bold'}}>Added to Cart!</p>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
      <span>${price}</span>
    </div>
  );
}
