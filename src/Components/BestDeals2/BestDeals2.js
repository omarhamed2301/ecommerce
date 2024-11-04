import * as React from "react";
import { useState, useEffect } from "react";
import Card from "../../Components/Card";

export default function BestDeals2({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <>
      <div className="btns">
        {categories.map((category) => (
          <button
            key={category}
            variant="contained"
            style={{ marginRight: "10px" }}
            className={`btn ${
              activeCategory === category ? "btn-success" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products">
        <div className="cards">
          {filteredProducts.map((product) => (
            <Card
              src={product.image}
              title={
                product.title.length > 30
                  ? product.title.substring(0, 30)
                  : product.title
              }
              desc={
                product.description.length > 80
                  ? product.description.substring(0, 80)
                  : product.description
              }
              price={product.price}
              key={product.id}
              onAddToCart={() => onAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
