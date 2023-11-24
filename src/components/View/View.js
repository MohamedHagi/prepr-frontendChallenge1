import React, { useState } from "react";
import "../View/view.css";

import Filter from "../Filter/Filter";
import CardContainer from "../Card/CardContainer";
import cardData from "./dummyCards.json";

export default function View() {
  const [viewOption, setViewOption] = useState("Labs");

  const changeOption = (option) => {
    setViewOption(option);
  };

  return (
    <div className="viewContainer">
      <div className="d-flex align-items-center explore_section my-4">
        <div
          className={`w-25 explore_component ${
            viewOption === "Labs" ? "selected_explore_component" : ""
          } py-1`}
          style={{ borderRadius: "10px 0 0 10px" }}
          onClick={() => changeOption("Labs")}
        >
          <h2 className="text-center">Labs</h2>
        </div>
        <div
          className={`w-25 explore_component ${
            viewOption === "Challenges" ? "selected_explore_component" : ""
          } py-1`}
          onClick={() => changeOption("Challenges")}
        >
          <h2 className="text-center">Challenges</h2>
        </div>
        <div
          className={`w-25 explore_component ${
            viewOption === "Resources" ? "selected_explore_component" : ""
          } py-1`}
          onClick={() => changeOption("Resources")}
        >
          <h2 className="text-center">Resources</h2>
        </div>
        <div
          className={`w-25 explore_component ${
            viewOption === "Projects" ? "selected_explore_component" : ""
          } py-1`}
          onClick={() => changeOption("Projects")}
          style={{ borderRadius: "0 10px 10px 0" }}
        >
          <h2 className="text-center">Projects</h2>
        </div>
      </div>
      <div className="cardfilter-container">
        <div className="row">
          <Filter filterType={viewOption} />
          <div className="col-md-10 exp_box">
            <div className="row">
              <CardContainer cardData={cardData} filterType={viewOption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
