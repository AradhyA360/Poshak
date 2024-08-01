import React from "react";
import "./WhyPoshak.css";

// You can replace these URLs with actual image paths or import images if preferred
const featureIcons = {
  fashion: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
  quality: "https://img.icons8.com/ios-filled/50/star--v1.png",
  shipping: "https://img.icons8.com/ios-filled/50/free-shipping.png",
  service: "https://img.icons8.com/ios-filled/50/online-support.png",
  returns: "https://img.icons8.com/ios-glyphs/60/return-purchase.png",
  pricing: "https://img.icons8.com/ios-filled/50/rupee.png",
};

const WhyPoshak = () => {
  return (
    <section className="why-poshak">
      <div className="container">
        <h2>Why Choose Poshak?</h2>
        <p className="intro">
          At Poshak, we offer an exceptional shopping experience that goes
          beyond just selling clothes. Discover what makes us unique and why we
          are the preferred choice for fashion enthusiasts worldwide.
        </p>
        <div className="features">
          <div className="feature-item">
            <img
              src={featureIcons.fashion}
              alt="Exclusive Fashion Collection"
              className="feature-icon"
            />
            <h3>Exclusive Fashion Collection</h3>
            <p>
              Our curated collection features exclusive designs from top
              designers, blending traditional and contemporary styles. We offer
              a wide range of fashion choices that cater to all tastes and
              preferences.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={featureIcons.quality}
              alt="Premium Quality"
              className="feature-icon"
            />
            <h3>Premium Quality</h3>
            <p>
              Quality is our top priority. Every product undergoes rigorous
              quality checks to ensure you receive only the best. Our commitment
              to quality has earned us a loyal customer base.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={featureIcons.shipping}
              alt="Fast and Reliable Shipping"
              className="feature-icon"
            />
            <h3>Fast and Reliable Shipping</h3>
            <p>
              We provide fast and reliable shipping services worldwide. Our
              efficient logistics network ensures that your orders are delivered
              safely and on time, no matter where you are.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={featureIcons.service}
              alt="Exceptional Customer Service"
              className="feature-icon"
            />
            <h3>Exceptional Customer Service</h3>
            <p>
              Our customer support team is available 24/7 to assist you with any
              queries or issues. We pride ourselves on providing personalized
              and friendly service to ensure your satisfaction.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={featureIcons.returns}
              alt="Easy Returns and Exchanges"
              className="feature-icon"
            />
            <h3>Easy Returns and Exchanges</h3>
            <p>
              We offer a hassle-free returns and exchange policy. If you're not
              completely satisfied with your purchase, you can easily return or
              exchange it within 30 days.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={featureIcons.pricing}
              alt="Competitive Pricing"
              className="feature-icon"
            />
            <h3>Competitive Pricing</h3>
            <p>
              Enjoy competitive pricing without compromising on quality. We
              offer great value for money, ensuring that you get the best deals
              on the latest fashion trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPoshak;
