import React from "react";

export default function ChooseBrand(props) {
  return (
    <div className="col-lg-3 col-sm-6 mb-3">
      <div className="brand-card">
        <img src={props.src} alt="staples" />
        <div className="brand-info">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
