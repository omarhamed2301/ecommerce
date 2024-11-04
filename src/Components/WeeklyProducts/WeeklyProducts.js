import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "../Card";
// import homepod from "../../Images/homepod.png";
// import cabin from "../../Images/cabin.png";
// import duffel from "../../Images/duffel.png";
// import waterBottle from "../../Images/waterBottle.png";
// import headset from "../../Images/headset.png";
// import watch from "../../Images/watch.png";
function WeeklyProducts({
  products,
  setProducts,
  selectedProduct,
  setSelectedProduct,
  onAddToCart,
  
}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  useEffect(
    function () {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err));
    },
    [setProducts]
  );

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
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
      </Slider>
    </div>
  );
}

export default WeeklyProducts;
