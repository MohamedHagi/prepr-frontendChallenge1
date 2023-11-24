import React, { useState } from "react";
import "../Filter/filter.css";

export default function Filter({ filterType }) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleFilter = (index) => {
    setSelectedFilter(selectedFilter === index ? null : index);
  };

  return (
    <div className="col-md-2 my-2 side_filters_xp">
      <div className="explore_section">
        <div
          id="component_type01"
          className="component_type py-2 pl-1 px-2 selected_component_type"
          style={{
            borderRadius: "10px 10px 0 0",
            display: `${
              filterType === "Projects" || filterType === "Resources"
                ? "none"
                : "block"
            }`,
          }}
        >
          {filterType}
        </div>

        {filterType == "Labs" && (
          <div
            id="component_type03"
            className="component_type py-2 pl-1 px-2"
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            Lab Programs
          </div>
        )}

        {filterType == "Challenges" && (
          <div
            id="component_type03"
            className="component_type py-2 pl-1 px-2"
            style={{ borderRadius: "0px 0px 10px 10px" }}
          >
            Challenge Path
          </div>
        )}
        {filterType == "Resources" && (
          <>
            <div
              id="component_type03"
              className="component_type py-2 pl-1 px-2 selected_component_type"
              style={{ borderRadius: "10px 10px 0 0" }}
            >
              Resource modules
            </div>
            <div
              id="component_type03"
              className="component_type py-2 pl-1 px-2"
              style={{ borderRadius: "0px 0px 10px 10px" }}
            >
              Resource collection
            </div>
            <div
              id="component_type03"
              className="component_type py-2 pl-1 px-2"
              style={{ borderRadius: "0px 0px 10px 10px" }}
            >
              Resource group
            </div>
          </>
        )}
      </div>
      <div
        className="explore_section filter-section pt-2 mt-3"
        id="explorefilter"
      >
        <div className="pt-2 pb-2 filterTitle">
          <h5
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              display: "inline",
            }}
            className="mx-2"
          >
            Filters
          </h5>
          <a
            className="mr-2 mx-2 float-right"
            style={{
              textDecoration: "underline",
              color: "mediumvioletred",
              fontSize: "larger",
            }}
          >
            Clear All
          </a>
        </div>

        <div className="filter_type">
          <div
            className="search-filter px-2"
            onClick={() => toggleFilter("1")}
            style={{
              display: `${filterType == "Projects" ? "none" : "block"}`,
            }}
          >
            <i
              className={`${
                selectedFilter == "1"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-right"
              }`}
              style={{ marginRight: "6px" }}
            ></i>
            Duration
          </div>
          <div
            className="px-3"
            style={{
              display: `${selectedFilter == "1" ? "block" : "none"}`,
            }}
          >
            <label className="custom-checkbox-container explore_filter">
              Less than 2 Hours
              <input
                name="Less than 2 Hours"
                type="checkbox"
                group="taggroup"
                value="169"
                id="169"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              2 - 4 Hours
              <input
                name="2 - 4 Hours"
                type="checkbox"
                group="taggroup"
                value="170"
                id="170"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              4 - 8 Hours
              <input
                name="4 - 8 Hours"
                type="checkbox"
                group="taggroup"
                value="171"
                id="171"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              1 - 2 Days
              <input
                name="1 - 2 Days"
                type="checkbox"
                group="taggroup"
                value="172"
                id="172"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              3 - 5 Days
              <input
                name="3 - 5 Days"
                type="checkbox"
                group="taggroup"
                value="173"
                id="173"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              5 + Days
              <input
                name="5 + Days"
                type="checkbox"
                group="taggroup"
                value="174"
                id="174"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="filter_type">
          <div
            className="search-filter px-2"
            onClick={() => toggleFilter("2")}
            style={{
              display: `${filterType == "Projects" ? "none" : "block"}`,
            }}
          >
            <i
              className={`${
                selectedFilter == "2"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-right"
              }`}
              style={{ marginRight: "6px" }}
            ></i>
            Level
          </div>
          <div
            className="px-3"
            style={{ display: `${selectedFilter == "2" ? "block" : "none"}` }}
          >
            <label className="custom-checkbox-container explore_filter">
              Beginner
              <input
                name="Beginner"
                data-test="Beginner"
                group="taggroup"
                type="checkbox"
                value="157"
                id="157"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Intermediate
              <input
                name="Intermediate"
                data-test="Intermediate"
                group="taggroup"
                type="checkbox"
                value="158"
                id="158"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Advanced
              <input
                name="Advanced"
                data-test="Advanced"
                group="taggroup"
                type="checkbox"
                value="159"
                id="159"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Mixed
              <input
                name="Mixed"
                data-test="Mixed"
                group="taggroup"
                type="checkbox"
                value="160"
                id="160"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="filter_type">
          <div
            className="search-filter px-2"
            onClick={() => toggleFilter("3")}
            style={{
              display: `${filterType == "Projects" ? "none" : "block"}`,
            }}
          >
            <i
              className={`${
                selectedFilter == "3"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-right"
              }`}
              style={{ marginRight: "6px" }}
            ></i>
            Organizations
          </div>
          <div
            className="px-3"
            style={{ display: `${selectedFilter == "3" ? "block" : "none"}` }}
          >
            <label className="custom-checkbox-container explore_filter">
              Prepr
              <input
                name="Prepr"
                data-test="Prepr"
                group="verified_org"
                type="checkbox"
                value="19"
                id="19"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Linux Foundation
              <input
                name="Linux Foundation"
                data-test="Linux Foundation"
                group="verified_org"
                type="checkbox"
                value="206"
                id="206"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Magnet
              <input
                name="Magnet"
                data-test="Magnet"
                group="verified_org"
                type="checkbox"
                value="239"
                id="239"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              CertNexus
              <input
                name="CertNexus"
                data-test="CertNexus"
                group="verified_org"
                type="checkbox"
                value="264"
                id="264"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Ontario Chamber of Commerce
              <input
                name="Ontario Chamber of Commerce"
                data-test="Ontario Chamber of Commerce"
                group="verified_org"
                type="checkbox"
                value="281"
                id="281"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container explore_filter">
              Youth Boost
              <input
                name="Youth Boost"
                data-test="Youth Boost"
                group="verified_org"
                type="checkbox"
                value="414"
                id="414"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="filter_type">
          <div
            className="search-filter px-2"
            id="skill-filter"
            onClick={() => toggleFilter("4")}
            style={{
              display: `${filterType == "Projects" ? "none" : "block"}`,
            }}
          >
            <i
              className={`${
                selectedFilter == "4"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-right"
              }`}
              style={{ marginRight: "6px" }}
            ></i>
            Skills
          </div>
          <div
            className="px-3 py-3"
            style={{ display: `${selectedFilter == "4" ? "block" : "none"}` }}
          >
            <select
              multiple=""
              name="searchForSkills[]"
              id="searchForSkills"
              placeholder="Search skills"
              className="mt-4 form-control searchForSkillss explore_filter select2-hidden-accessible"
            ></select>
            <span
              className="select2 select2-container select2-container--default"
              style={{ width: "100%" }}
            >
              <span className="selection">
                <span
                  className="select2-selection select2-selection--multiple"
                  role="combobox"
                >
                  <ul className="select2-selection__rendered">
                    <li className="select2-search select2-search--inline">
                      <input
                        className="select2-search__field"
                        type="search"
                        tabindex="0"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="none"
                        spellcheck="false"
                        role="textbox"
                        aria-autocomplete="list"
                        placeholder="Search skills"
                        style={{ width: "186.892px" }}
                      />
                    </li>
                  </ul>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div
          className="filter_type explore_filter"
          id="status_filter_type"
          style={{ display: `${filterType == "Projects" ? "block" : "none"}` }}
        >
          <div className="search-filter px-2" onClick={() => toggleFilter("5")}>
            <i
              className={`${
                selectedFilter == "5"
                  ? "fas fa-chevron-down"
                  : "fas fa-chevron-right"
              }`}
              style={{ marginRight: "6px" }}
            ></i>
            Status
          </div>
          <div
            className="px-3"
            style={{ display: `${selectedFilter == "5" ? "block" : "none"}` }}
          >
            <label className="custom-checkbox-container">
              Open
              <input
                name="Open"
                data-test="Open"
                id="162"
                group="taggroup"
                type="checkbox"
                className="chb"
                value="162"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container">
              Closed
              <input
                name="Closed"
                data-test="Closed"
                id="163"
                group="taggroup"
                type="checkbox"
                className="chb"
                value="163"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container">
              In Progress
              <input
                name="In Progress"
                data-test="In Progress"
                id="164"
                group="taggroup"
                type="checkbox"
                className="chb"
                value="164"
              />
              <span className="checkmark"></span>
            </label>
            <label className="custom-checkbox-container">
              Submitted
              <input
                name="Submitted"
                data-test="Submitted"
                id="165"
                group="taggroup"
                type="checkbox"
                className="chb"
                value="165"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
