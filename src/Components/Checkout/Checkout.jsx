import React from 'react'

export default function Checkout({cartItems, onRemoveFromCart}) {
    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliverFees = 15
    const totalPrice = subTotal + deliverFees

  return (
    <div className='checkout'>
        <div className="container">
            <h2 className='text-center' style={{fontWeight:'bolder', fontSize:'40px'}}>Checkout</h2>
            <h3 className='mt-4' style={{fontWeight:'bold', fontSize:'25px'}}>Your cart items: </h3>
            <ul className='mt-5' style={{listStyle:'none'}}>
            {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li
                key={item.id}
                className="cartCard"
                style={{ padding: "10px 0px 10px 10px", marginBottom: "10px"}}
              >
                <div className="row align-items-center justify-content-between" >
                  <div
                    className="col-lg-4 cartImg"
                    style={{  height: "150px", width:'150px'
                     }}
                  >
                    <img
                      style={{ width: "100%", height:'100%' }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div
                    className="col-lg-6 cartBody"
                    style={{ paddingTop: "10px" }}
                  >
                    <h5>{item.title}</h5>

                    <div className="row">
                      <p className="col-lg-5">
                        <span style={{marginRight:'15px'}}>x{item.quantity}</span>
                        ${item.price * (item.quantity || 1)}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2 cartRemoveItem">
                    <button
                      className="removeCartItem"
                      onClick={() => onRemoveFromCart(item.id)}
                      style={{ textAlign: "center" }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center" style={{ marginTop: "50px" }}>
              Your cart is empty
            </p>
          )}
            </ul>

          {cartItems.length > 0 && (
            <>
            <div className='priceInfo mt-3'>
            <h3 style={{fontSize:'25px', fontWeight:'bolder'}}>Price Information: </h3>
            <p >Subtotal: <span>${subTotal}</span></p>
            <p>Delivery Fees: <span>${deliverFees}</span></p>
            <p>Total Price: <span>${totalPrice}</span></p>
            </div>
            <div className='placeOrder text-center'>
                <button className='btn btn-primary'>Place Order</button>
            </div>
            </>
          )}
        </div>
    </div>
  )
}
