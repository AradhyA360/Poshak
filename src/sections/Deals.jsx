import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Deals.css";

const dealProducts = [
  {
    id: 1,
    name: "Discounted Jacket",
    image:
      "https://images.unsplash.com/photo-1553632786-0cfb0ce7dacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRpc2NvdW50ZWQlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
    originalPrice: "$150.00",
    dealPrice: "$99.99",
  },
  {
    id: 2,
    name: "Sale Sneakers",
    image:
      "https://images.unsplash.com/photo-1570051779696-244e9f680cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5pa2UlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "$80.00",
    dealPrice: "$49.99",
  },
  {
    id: 3,
    name: "Bargain Handbag",
    image:
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyZ2FpbiUyMGhhbmRiYWd8ZW58MHx8MHx8fDA%3D",
    originalPrice: "$200.00",
    dealPrice: "$120.00",
  },
  {
    id: 4,
    name: "Watch Offer",
    image:
      "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNoJTIwb2ZmZXJ8ZW58MHx8MHx8fDA%3D",
    originalPrice: "$100.00",
    dealPrice: "$70.00",
  },
  // Add more deal products as needed
];

const Deals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
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
    <section className="deals">
      <h2>Hot Deals</h2>
      <Slider {...settings}>
        {dealProducts.map((product) => (
          <div key={product.id} className="deal-card">
            <img src={`${product.image}`} alt={product.name} />
            <div className="deal-info">
              <h3>{product.name}</h3>
              <p className="original-price">{product.originalPrice}</p>
              <p className="deal-price">{product.dealPrice}</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Deals;
