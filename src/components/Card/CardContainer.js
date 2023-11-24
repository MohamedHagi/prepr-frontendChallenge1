import React from "react";
import Card from "./Card";

export default function CardContainer({ cardData, filterType }) {
  const filteredCards = cardData[filterType] || [];
  return (
    <div>
      {filteredCards.map((card, index) => (
        <Card key={index} cardInfo={card} filterType={filterType} />
      ))}
    </div>
  );
}
