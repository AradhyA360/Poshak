import React from "react";
import "./Features.css";

const features = [
  {
    id: 1,
    imageSrc:
      "https://i.etsystatic.com/32618496/r/il/113d93/3919438608/il_fullxfull.3919438608_l2ks.jpg",
    title: "Fast Shipping",
    description:
      "Get your products delivered quickly with our express shipping options.",
  },
  {
    id: 2,
    imageSrc:
      "https://static.vecteezy.com/system/resources/previews/021/496/106/original/google-pay-logo-symbol-black-design-illustration-free-vector.jpg",
    title: "Secure Payments",
    description:
      "Enjoy secure transactions with our encrypted payment gateways.",
  },
  {
    id: 3,
    imageSrc:
      "https://thumbs.dreamstime.com/b/service-icon-isolated-white-background-143038967.jpg",
    title: "24/7 Support",
    description:
      "Our customer support team is available 24/7 to assist you with any queries.",
  },
];

const Features = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <img
              src={feature.imageSrc}
              alt={feature.title}
              className="feature-image"
            />
            <div className="feature-info">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
