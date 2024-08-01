import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularProducts.css";

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    image:
      "https://images.unsplash.com/photo-1551318181-655e9748c0a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8MXwwfHx8MA%3D%3D",
    price: "$99.99",
  },
  {
    id: 2,
    name: "Casual Sneakers",
    image:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNuZWFrZXJzfGVufDB8MXwwfHx8MA%3D%3D",
    price: "$59.99",
  },
  {
    id: 3,
    name: "Designer Handbag",
    image:
      "https://images.unsplash.com/photo-1682364853177-b69f92750a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhhbmRiYWd8ZW58MHwxfDB8fHww",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Classic Watch",
    image:
      "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdhdGNofGVufDB8fDB8fHww",
    price: "$75.00",
  },
  // Add more products as needed
];

const PopularProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="popular-products">
      <h2>Popular Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`${product.image}`} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PopularProducts;
