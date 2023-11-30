import React from "react";
import Card from "./Card";
import "../Card/card.css";

export default function CardContainer({ cardData, filterType }) {
  const filteredCards = cardData[filterType] || [];
  return (
    <div>
      <div className="row mx-2 my-2">
        <div className="col-12">
          <nav>
            <ul className="pagination">
              <li className="page-item active">
                <span className="page-link waves-effect">1</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">2</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">3</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">4</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">5</span>
              </li>
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
              <li className="page-item">
                <span className="page-link waves-effect">10</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {filteredCards.map((card, index) => (
        <Card key={index} cardInfo={card} filterType={filterType} />
      ))}
      <div className="row mx-2 my-2">
        <div className="col-12">
          <nav>
            <ul className="pagination">
              <li className="page-item active">
                <span className="page-link waves-effect">1</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">2</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">3</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">4</span>
              </li>
              <li className="page-item ">
                <span className="page-link waves-effect">5</span>
              </li>
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
              <li className="page-item">
                <span className="page-link waves-effect">10</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
