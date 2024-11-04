import React from "react";

export default function ProductCard(props) {
  return (
    <div className="col-lg-3 col-sm-12 mb-3">
      <div className="cardd">
        <div className="card-img">
          <img src={props.src} alt="homepod" />
        </div>
        <div className="card-info">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <button>Add to Cart</button>
        </div>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
