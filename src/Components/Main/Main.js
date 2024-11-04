import React, { useState, useEffect } from "react";
import Stage from "../../Images/stage2.png";

import logo from "../../Images/logo.svg";
import TopCards from "../TopCategoriesCards/TopCards";
import furniture2 from "../../Images/furniture2.png";
import books2 from "../../Images/books2.png";
import tech from "../../Images/tech.png";
import sneakers from "../../Images/sneakers.png";
import handbag2 from "../../Images/handbag2.png";
import bag2 from "../../Images/bag2.png";
import BestDeals from "../BestDeals/BestDeals";
import Staples from "../../Images/staples.png";
import ChooseBrand from "../chooseBrand/ChooseBrand";
import Sprouts from "../../Images/sprouts.png";
import Grocery from "../../Images/grocery.png";
import Mollie from "../../Images/mollie.png";
import Sports from "../../Images/sports.png";
import ContainerStore from "../../Images/container.png";
import Target from "../../Images/target.png";
import Bevmo from "../../Images/bevmo.png";
import GetDiscount from "../GetDiscount/GetDiscount";
import onlinePayment from "../../Images/onlinePayment.png";
import Delivery from "../../Images/Delivery.png";
import Couch from "../../Images/couch.png";
import Mockup from "../../Images/mockup.png";
import mom from "../../Images/mom.png";
import shirts2 from "../../Images/shirts2.png";
import shirts from "../../Images/shirts.png";
// import greenBag from "../../Images/greenBag.png";
import salonBackground from "../../Images/salonBackground.png";
import WeeklyProducts from "../WeeklyProducts/WeeklyProducts";
import BestDeals2 from "../BestDeals2/BestDeals2";
import stripe from "../../Images/stripe.png";
import visa from "../../Images/visa.png";
import mastercard from "../../Images/mastercard.png";
import amazonpay from "../../Images/amazonpay.png";
import klarna from "../../Images/klarna.png";
import paypal from "../../Images/paypal.png";
import applepay from "../../Images/applepay.png";
import googlepay from "../../Images/googlepay.png";
// import { Counter } from "../Context/Store";

export default function Main({
  products,
  setProducts,
  selectedProduct,
  setSelectedProduct,
  onAddToCart,
  addedToCart,
  setAddedToCart
}) {
  // let {count, price, increment, decrement} = useContext(Counter)

  // useEffect(function (){
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(data=>console.log(data))
  // }, [])
  return (
    <>
      {/* Main */}
      <section className="main">
        <div className="mainContainer">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mainInfo">
                <h1>
                  Shopping And <br />
                  Department Store.
                </h1>
                <p>
                  Shopping is a bit of a relaxing hobby for me, which is
                  sometimes troubling for the bank balance.
                </p>
                <div className="mainBtn">
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mainStairs">
                <img className="stageImg" src={Stage} alt="Stairs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main */}
      {/* Top Categories */}
      <section className="TopCategories">
        <div className="container">
          <h2>Shop Our Top Categories</h2>
          <div className="row">
            <TopCards src={furniture2} title="Furniture" />
            <TopCards src={handbag2} title="Handbag" />
            <TopCards src={tech} title="Tech" />
            <TopCards src={sneakers} title="Sneakers" />
            <TopCards src={bag2} title="Bag" />
            <TopCards src={books2} title="Books" />
          </div>
        </div>
      </section>
      {/* Top Categories */}

      {/* Best Deals */}
      <section className="BestDeals">
        <div className="container">
          <h2>Todays Best Deals For You!</h2>

          <div className="deals">
            <BestDeals products={products} setProducts={setProducts} onAddToCart={onAddToCart} addedToCart={addedToCart} setAddedToCart={setAddedToCart} />
          </div>
        </div>
      </section>
      {/* Best Deals */}
      {/* Choose By Brand */}
      <section className="chooseBrand">
        <div className="container">
          <h2>Choose Your Brand</h2>
          <div className="row">
            <ChooseBrand
              src={Staples}
              title="Staples"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Sprouts}
              title="Sprouts"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Grocery}
              title="Grocery Outlet"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Mollie}
              title="Mollie Stones"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Sports}
              title="Sports Basement"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={ContainerStore}
              title="Container Store"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Target}
              title="Target"
              desc="Delivery within 24 hours."
            />
            <ChooseBrand
              src={Bevmo}
              title="Bevmo!"
              desc="Delivery within 24 hours."
            />
          </div>
        </div>
      </section>
      {/* Choose By Brand */}
      {/* Get Discount 70% */}
      <section className="getDiscount">
        <div className="container">
          <h2>Get Up To 70% Off</h2>
          <div className="row">
            <GetDiscount
              title="Price"
              firstPrice="200$"
              discountedPrice="120$"
              desc="Explore Our Furniture & Home Furnishing Range"
              src={Couch}
            />
            <GetDiscount
              title="Price"
              firstPrice="100$"
              discountedPrice="60$"
              desc="Explore Our Furniture & Home Furnishing Range"
              src={Mockup}
            />
            <GetDiscount
              title="Price"
              firstPrice="150$"
              discountedPrice="90$"
              desc="Explore Our Furniture & Home Furnishing Range"
              src={shirts}
            />
          </div>
        </div>
      </section>
      {/* Get Discount 70% */}
      {/* Weekly Products */}
      <section className="weeklyProducts BestDeals">
        <div className="container">
          <h2>Weekly Popular Products</h2>
          <div className="deals">
            <WeeklyProducts
              products={products}
              setProducts={setProducts}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              onAddToCart={onAddToCart}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
            />
          </div>
        </div>
      </section>
      {/* Weekly Products */}
      {/* Salon Cashback */}
      <section className="cashBack">
        <div className="discount">
          <h2>Get 5% Cash Back On 200$</h2>
          <p>
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <a href="#">Learn More</a>
        </div>
      </section>
      {/* Salon Cashback */}
      {/* Best Deals 2 */}
      <section className="BestDeals2 BestDeals">
        <div className="container">
          <h2>Todays Best Deals For You!</h2>
          <BestDeals2 onAddToCart={onAddToCart} addedToCart={addedToCart} setAddedToCart={addedToCart}/>
        </div>
      </section>
      {/* Best Deals 2 */}
      {/* Most Sellings */}
      <section className="mostSellings BestDeals">
        <div className="container">
          <h2>Most Selling Products</h2>
          <div className="deals">
            <WeeklyProducts products={products}
              setProducts={setProducts}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              onAddToCart={onAddToCart}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart} />
          </div>
        </div>
      </section>
      {/* Most Sellings */}
      {/* Trending Products */}
      <section className="trendingProducts">
        <div className="container">
          <h2>Trending Products</h2>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src={salonBackground} alt="Furniture" />
                </div>
                <div className="card-info">
                  <h3>Furniture Village</h3>
                  <p>Delivery within 24 hours</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src={shirts2} alt="Furniture" />
                </div>
                <div className="card-info">
                  <h3>Fashion World</h3>
                  <p>Delivery within 24 hours</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Products */}
      {/* Services */}
      <section className="services getDiscount">
        <div className="container">
          <h2>Services We Provide!</h2>
          <div className="row">
            <GetDiscount
              title="Frequently Asked Questions"
              desc="Updates on safe Shopping in our Stores"
              src={mom}
            />
            <GetDiscount
              title="Online Payment Process"
              desc="Updates on safe Shopping in our Stores"
              src={onlinePayment}
            />
            <GetDiscount
              title="Home Delivery Options"
              desc="Updates on safe Shopping in our Stores"
              src={Delivery}
            />
          </div>
        </div>
      </section>
      {/* Services */}
      {/* Footer */}
      <footer className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={logo} />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <h3>Accepted Payments</h3>
            <div className="payments row">
              <div className="col-lg-3 col-sm-6">
                <img src={stripe} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={visa} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={mastercard} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={amazonpay} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={klarna} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={paypal} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={applepay} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src={googlepay} />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 mt-3 mb-3">
            <h3>Department</h3>
            <ul>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Education Product</a>
              </li>
              <li>
                <a href="#">Fronzen Food</a>
              </li>
              <li>
                <a href="#">Beauty Products</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Fitness</a>
              </li>
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mt-3 mb-3">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">About Shopcart</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">News & Blog</a>
              </li>
              <li>
                <a href="#">Press Center</a>
              </li>
              <li>
                <a href="#">Shop By Location</a>
              </li>
              <li>
                <a href="#">Shopcart Brands</a>
              </li>
              <li>
                <a href="#">Ideas & Guides</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mt-3 mb-3">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Order Pickup</a>
              </li>
              <li>
                <a href="#">Account Signup</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mt-3">
            <h3>Help & Support</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      
      {/* Footer */}
    </>
  );
}
