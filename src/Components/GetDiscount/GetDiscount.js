import React from 'react';

export default function GetDiscount(props) {
  return (
    <div className='col-lg-4 mb-3'>
        <div className='discount-card'>
            <div className='card-info'>
                <h4>{props.title}</h4>
                <h3>{props.discountedPrice}<span>{props.firstPrice}</span></h3>
                <p>{props.desc}
                </p>
            </div>
            <div className='card-img'>
                <img src={props.src}/>
            </div>
        </div>
    </div>
  )
}
