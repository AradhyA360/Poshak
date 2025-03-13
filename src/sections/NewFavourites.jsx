import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Favorites.css";

const favoriteProducts = [
  {
    id: 1,
    name: "Elegant Dress",
    image:
      "https://images.unsplash.com/photo-1677537946961-7b1ffd75d959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGVsZWdhbnQlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "$129.99",
  },
  {
    id: 2,
    name: "Casual T-shirt",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzdWFsJTIwdCUyMHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D",
    price: "$39.99",
  },
  {
    id: 3,
    name: "Leather Boots",
    image:
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vdHN8ZW58MHx8MHx8fDA%3D",
    price: "$89.99",
  },
  {
    id: 4,
    name: "Chic Sunglasses",
    image:
      "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpYyUyMHN1bmdsYXNzZXN8ZW58MHwxfDB8fHww",
    price: "$49.99",
  },
  // Add more favorite products as needed
];

const NewFavorites = () => {
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
    <section className="favorites">
      <h2>New Favourites</h2>
      <Slider {...settings}>
        {favoriteProducts.map((product) => (
          <div key={product.id} className="favorite-card">
            <img
              src={`${product.image}`}
              width={250}
              height={200}
              alt={product.name}
            />
            <div className="favorite-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-favorites">Add to Favorites</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewFavorites;
