import React from "react";
import "./BankOffers.css";

const offers = [
  {
    id: 1,
    bankName: "SBI Bank",
    offerDescription: "Get 50% Off on purchases above $100",
    offerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uc_wnoLHOhDpNeuWO7eVYGGWKyrhRyHdkA&s",
  },
  {
    id: 3,
    bankName: "Bajaj Finserv",
    offerDescription: "No-cost EMI on orders above $200",
    offerImage:
      "https://c8.alamy.com/comp/2JBEC0Y/no-cost-emi-ad-flyer-layout-background-vector-illustration-2JBEC0Y.jpg",
  },
  {
    id: 2,
    bankName: "HDFC Bank",
    offerDescription: "Flat 5% discount on all products",
    offerImage:
      "https://www.trackbes.in/cdn/shop/files/Yellow_Orange_Simple_Discount_50_Instagram_Post.png?v=1717867543&width=1500",
  },
];

const BankOffers = () => {
  return (
    <section className="bank-offers">
      <h2 className="section-title">Exclusive Bank Offers</h2>
      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img
              src={offer.offerImage}
              alt={offer.bankName}
              className="offer-image"
            />
            <div className="offer-info">
              <h3 className="bank-name">{offer.bankName}</h3>
              <p className="offer-description">{offer.offerDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankOffers;
