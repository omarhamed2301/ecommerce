import React from "react";
import Logo from "../../Images/logo.svg";
import User from "../../Images/user.png";
import PopularCategories from "../PopularCategories/PopularCategories";
import Cart from "../Cart/Cart";
export default function Navbar({cartItems, onRemoveFromCart, setCartItems}) {
  return (
    <>
      <div className="nav-topBar">
        <div className="topBar-container">
          <div className="row justify-content-between">
            <div className="col-lg-4 phone">
              <a href="tel:+201062665947">+201062665947</a>
            </div>
            <div className="col-lg-5 discount">
              Get 50% Off on Selected Items<span>|</span>Shop Now
            </div>
            <div className="col-lg-2 languages">
              <button>English</button>
              <button>Arabic</button>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="topBar-container">
          <div className="row">
            <a className="navbar-brand col-lg-2 col-sm-6" href="#">
              <img src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler col-sm-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse col-lg-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <PopularCategories/>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Deals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    What's New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse col-lg-2"
              id="navbarSupportedContent"
            >
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="accountCart col-lg-3">
              <div className="row justify-content-between">
                <a href="#" className="col-lg-6 account">
                  <img src={User} alt="User" /> Account
                </a>
                <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} setCartItems={setCartItems}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
