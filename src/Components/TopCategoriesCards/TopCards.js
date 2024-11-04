import React from "react";


export default function TopCards(props) {
  return (
    <div className="col-lg-2 col-sm-6 mb-3">
      <div className="card">
        <img src={props.src} alt={props.alt}/>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
