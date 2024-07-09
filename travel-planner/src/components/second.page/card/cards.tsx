import React from "react";
import Card from "./card/card";
import styles from "./cards.module.css";

const Cards: React.FC = () => {
  const cardData = [
    {
      title: "Card 1",
      imageUrl: "/images/img1.png",
      rating: 4.5,
      price: 50,
    },
    {
      title: "Card 2",
      imageUrl: "/images/img2.png",
      rating: 4.0,
      price: 40,
    },
    {
      title: "Card 3",
      imageUrl: "/images/img3.png",
      rating: 4.7,
      price: 60,
    },
    {
      title: "Card 4",
      imageUrl: "/images/img4.png",
      rating: 4.2,
      price: 45,
    },
    {
      title: "Card 5",
      imageUrl: "/images/img5.png",
      rating: 4.8,
      price: 55,
    },
    {
      title: "Card 6",
      imageUrl: "/images/img6.png",
      rating: 4.3,
      price: 50,
    },
    {
      title: "Card 7",
      imageUrl: "/images/img7.png",
      rating: 4.5,
      price: 50,
    },
    {
      title: "Card 8",
      imageUrl: "/images/img8.png",
      rating: 4.0,
      price: 40,
    },
    {
      title: "Card 9",
      imageUrl: "/images/img9.png",
      rating: 4.7,
      price: 60,
    },
    {
      title: "Card 10",
      imageUrl: "/images/img10.png",
      rating: 4.2,
      price: 45,
    },
    {
      title: "Card 11",
      imageUrl: "/images/img11.png",
      rating: 4.8,
      price: 55,
    },
    {
      title: "Card 12",
      imageUrl: "/images/img12.png",
      rating: 4.3,
      price: 50,
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          rating={card.rating}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Cards;
