import React, { useState } from "react";
import "../View/view.css";
import Labs from "../View/Labs.png";
import Challenges from "../View/Challenges.png";
import Projects from "../View/Projects.png";

export default function View() {
  const [viewOption, setViewOption] = useState("Labs");

  const changeOption = (option) => {
    setViewOption(option);
  };

  const getImageForOption = () => {
    switch (viewOption) {
      case "Labs":
        return Labs;
      case "Challenges":
        return Challenges;
      case "Resources":
        return Labs;
      case "Projects":
        return Projects;
      default:
        return null;
    }
  };

  return (
    <div className="container" style={{ overflow: "hidden" }}>
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

      <div>
        {viewOption && (
          <img
            src={getImageForOption()}
            alt={`Image for ${viewOption}`}
            class="viewImages"
          />
        )}
      </div>
    </div>
  );
}
