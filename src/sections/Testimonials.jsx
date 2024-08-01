import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Alice Smith",
    location: "New York, USA",
    feedback:
      "Poshak has an amazing collection of clothes. The quality is top-notch and delivery was super quick. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Carlos Martinez",
    location: "Madrid, Spain",
    feedback:
      "Great experience shopping with Poshak. The customer service was very helpful and the clothes fit perfectly.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Mei Ling",
    location: "Beijing, China",
    feedback:
      "我对Poshak的产品非常满意。质量很好，而且款式也很时尚。一定会再次光顾！",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    feedback:
      "Wide range of options and excellent quality. The prices are reasonable, and I love the traditional wear collection.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-slide">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="testimonial-content">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="avatar"
              />
              <p>"{testimonial.feedback}"</p>
              <h3>{testimonial.name}</h3>
              <p className="location">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
