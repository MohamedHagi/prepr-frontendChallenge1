import React, { useState } from "react";
import "../LandingPage/landing.css";

export default function LandingPage() {
  const [isActive, setIsActive] = useState(true);

  const closeExplore = () => {
    setIsActive(false);
  };
  return (
    <section className="bg-alice-blue project-section">
      {isActive && (
        <div id="explore_interests">
          <div className="button-right" onClick={closeExplore}>
            <img
              id="close_explore_interests"
              style={{ width: "1.5rem" }}
              className="m-4"
              src="https://preprlabs.org/front/img/ic_round-clear.svg"
              alt="close"
            />
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "50px" }}
          >
            <div className="col-lg-6 col-md-8 col-12 text-center">
              <h1
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Explore Your Interests
              </h1>
              <p>
                We’ll recommend content based on your interests we’ve listed
                here.
                <br />
                Feel free to add or remove topics to customize your experience!
              </p>
              <div
                style={{ margin: "4rem auto" }}
                className="row position-relative"
              >
                <div className="col-1">
                  {" "}
                  <i className="fa fa-search position-absolute iconsrch"></i>
                </div>
                {/* <input className="mt-4 form-control" type="search" placeholder="Search for Skills" style={{ paddingLeft: '30px' }} /> */}
                <div className="col-11">
                  <select
                    multiple=""
                    name="searchForSkills[]"
                    placeholder="Search skills"
                    className="mt-4 form-control topskill searchForSkillsss select2-hidden-accessible"
                    style={{ paddingLeft: "30px" }}
                    aria-hidden="true"
                  ></select>
                  <span
                    className="select2 select2-container select2-container--default"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--multiple"
                        role="combobox"
                        tabIndex="-1"
                      >
                        <ul className="select2-selection__rendered">
                          <li className="select2-search select2-search--inline">
                            <input
                              className="select2-search__field"
                              type="search"
                              tabIndex="0"
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              role="textbox"
                              aria-autocomplete="list"
                              placeholder="Search skills"
                              style={{ width: "605.417px" }}
                            />
                          </li>
                        </ul>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  className="my-3"
                >
                  Click an interest to narrow your recommendations.
                </h3>
                <div id="interests">
                  <div className="explore_pill explore_pilll">
                    Graphic Design
                  </div>
                  <div className="explore_pill explore_pilll">
                    Customer Value Proposition
                  </div>
                  <div className="explore_pill explore_pilll">Scripting</div>
                  <div className="explore_pill explore_pilll">
                    Windows Desktop Administration
                  </div>
                  <div className="explore_pill explore_pilll">
                    Product Management
                  </div>
                  <div className="explore_pill explore_pilll">Selenium</div>
                  <div className="explore_pill explore_pilll">Cloud.com</div>
                  <div className="explore_pill explore_pilll">V2V</div>
                  <div className="explore_pill explore_pilll">
                    Cloud Development
                  </div>
                  <div className="explore_pill explore_pilll">
                    Presenting Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
