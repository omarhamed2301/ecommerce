import React, { useState, useEffect } from "react";

export default function PopularCategories() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Extract unique categories from the products
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <ul className="dropdown-menu">
      <h4>Popular Categories</h4>
      <hr />
      <div className="popularCategories">
        <div className="row justify-content-between">
          {categories.map((category, index) => (
            <a href="#" className="col-lg-6 category" key={index}>
              <div>
                <img
                  src={
                    products.find((product) => product.category === category).image
                  }
                  alt={category}
                />
              </div>
              <div className="category-info">
                <h5>{category}</h5>
                <p>
                  {products.filter((product) => product.category === category).length} Items Available
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </ul>
  );
}
