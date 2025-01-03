import React, { useState } from "react";
import Cartt from "../../Images/cart.png";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems, onRemoveFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMore, setShowMore] = useState(false);


  const handleIncrease = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrease = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId && (item.quantity || 1) > 1) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowCart(false);
      setIsClosing(false);
    }, 1000);
  };

  return (
    <>
      <button onClick={() => setShowCart(true)} className="col-lg-6 cart">
        <img src={Cartt} alt="User" /> Cart
        <span>{cartItems.length > 0 ? cartItems.length : "0"}</span>
      </button>
      {showCart && (
        <ul
          className={`animate__animated ${
            isClosing ? "animate__backOutRight" : "animate__backInRight"
          }`}
        >
          <button className="closeBtn" onClick={handleClose}>
            Close
          </button>
          <p
            className="text-center"
            style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
          >
            Cart
          </p>
          {cartItems.length > 0 ? (
            <>
              {cartItems
                .slice(0, showMore ? cartItems.length : 3)
                .map((item) => (
                  <li
                    key={item.id}
                    className="cartCard"
                    style={{
                      padding: "10px 0px 10px 10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div className="row align-items-center justify-content-between">
                      <div
                        className="col-lg-3 cartImg"
                        style={{ overflow: "hidden" }}
                      >
                        <img
                          style={{ width: "100%" }}
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div
                        className="col-lg-7 cartBody"
                        style={{ paddingTop: "10px" }}
                      >
                        <h5>{item.title}</h5>

                        <div className="row">
                          <p className="col-lg-5">
                            ${item.price * (item.quantity || 1)}
                          </p>
                          <div className="p-0 m-0 col-lg-7">
                            <button
                              onClick={() => handleIncrease(item.id)}
                              style={{
                                padding: "0px 7px",
                                backgroundColor: "#003d29",
                                color: "white",
                                borderRadius: "7px",
                              }}
                            >
                              +
                            </button>

                            <span style={{ margin: "0px 10px" }}>
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => handleDecrease(item.id)}
                              style={{
                                padding: "0px 7px",
                                backgroundColor: "#003d29",
                                color: "white",
                                borderRadius: "7px",
                              }}
                            >
                              -
                            </button>
                          </div>
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
                ))}

              {cartItems.length > 3 && (
                <div className="mt-2">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    style={{
                      padding: "8px 20px",
                      color: "#686868",
                      border: "none",
                      fontSize:'16px'
                    }}
                  >
                    {showMore ? "Show less" : "Show more..."}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center" style={{ marginTop: "50px" }}>
              Your cart is empty
            </p>
          )}

          {cartItems.length > 0 && (
            <div className="checkoutBtn text-center mt-3">
              <Link
                to="/checkout"
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#003d29",
                  color: "white",
                  borderRadius: "50px",
                }}
              >
                Checkout
              </Link>
            </div>
          )}
        </ul>
      )}
    </>
  );
}
