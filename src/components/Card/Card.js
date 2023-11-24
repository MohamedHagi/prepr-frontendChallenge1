import React from "react";
import "../Card/card.css";
import Cards from "../View/dummyCards.json";

export default function Card({ cardInfo, filterType }) {
  const {
    imageURL,
    title,
    hostedBy,
    followCount,
    shareCount,
    labTypeIconURL,
    labType,
    lastUpdate,
    membersCount,
    duration,
    level,
    description,
    tags,
    labLink,
    followButtonLink,
  } = cardInfo;

  return (
    <div className="col-12 my-2">
      <div className="explore_section explore-item lab_component">
        <div className="d-flex row">
          <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-xs-12 p-2">
            <div className="my_lab_img cover_image">
              <div
                id="canvasHTML"
                className="imageCanvasError"
                style={{ width: "100%", display: "none" }}
              >
                <div className="canvasbox">
                  <div
                    className="canvas-header"
                    style={{ padding: "20px 15px 5px", height: "33%" }}
                  >
                    <h5 className="blue-txt">Lab</h5>
                  </div>
                  <div className="canvas-body blue-bg-box">
                    <p className="wrapping">Getting Started...</p>
                  </div>
                  <div className="canvas-footer" />
                </div>
              </div>
              <img
                src={imageURL}
                alt="Getting Started Lab For Employment Service Providers (ESP)"
                style={{ width: "100%" }}
              />
            </div>
            <div className="explore-item-stats d-flex align-items-center mt-2">
              <div className="mx-2">
                <i className="far fa-heart" /> 0
              </div>
              <div className="mx-2">
                <i className="fas fa-share-alt" /> 0
              </div>
            </div>
            <p className="item-info mt-3">
              Hosted by <span>{hostedBy}</span>
            </p>
          </div>
          <div className="col-lg-7 col-md-7 col-xl-9 col-12 p-2">
            <div className="d-flex row justify-content-between align-items-center">
              <div style={{ width: "100%" }}>
                <div
                  className="text-right"
                  style={{
                    display: `${filterType == "Labs" ? "block" : "none"}`,
                  }}
                >
                  <button
                    href="JavaScript:Void(0);"
                    data-id={22513}
                    data-value={0}
                    className="btn blue_btn_outline f-s-18 followLabb float-right"
                  >
                    <i className="fa fa-plus" /> Follow
                  </button>
                </div>
                <h3
                  className="explore-item-title ttle_break"
                  style={{ display: "inline" }}
                >
                  <a
                    href="https://preprlabs.org/labs/getting-started-lab-for-employment-service-providers-esp"
                    style={{ color: "#498CCE !important" }}
                    className="cardLink"
                  >
                    {title}
                  </a>
                </h3>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="explore-item-type"
                  src={labTypeIconURL}
                  alt="resource module"
                />
              </div>
              <div>
                <p className="item-info mb-0">
                  <span>{labType}</span>· Last update: <span>{lastUpdate}</span>
                  · Members: <span>{membersCount}</span>· Duration:
                  <span>{duration}</span>· Level:
                  <span>{level}</span>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="mx-1 mt-3 mb-4" style={{ wordWrap: "break-word" }}>
                {description}
              </p>
            </div>
            <div>
              {tags.map((tag, index) => (
                <a key={index} href="#">
                  <button className="tag_pill">
                    <span>{tag}</span>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
