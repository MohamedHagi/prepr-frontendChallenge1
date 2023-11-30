import React from "react";
import "../SearchBar/search.css";

export default function SearchBar() {
  return (
    <div className="explore_section">
      <div className="row" style={{ flex: "1" }}>
        <div className="col-12 col-xl-6 col-lg-5 col-md-5 col-xs-12 ">
          <div className="d-flex align-items-center p-2">
            <div className="position-relative">
              <i
                className="fa fa-search position-absolute active"
                style={{ left: 10, top: 10 }}
              />
              <input
                className="form-control"
                data-test="Search by title"
                type="search"
                id="keyword"
                name=""
                placeholder="Search"
                style={{ paddingLeft: 30 }}
              />
            </div>
            <div>
              <button
                className="btn blue_btn waves-effect waves-light"
                id="srch_btn"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-xl-6 col-12">
          <div className="d-flex align-items-center float-right p-2 sortBy">
            <div>
              <small>Sort by </small>
            </div>
            <div className="pl-1">
              <select
                name="sorting"
                id="sortlist"
                className="form-control sortby"
                style={{ minWidth: "10rem" }}
              >
                <option value="Recently Added" data-test="Recently Added">
                  Recently added
                </option>
                <option value="Most Popular" data-test="Most Popular">
                  Most popular
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
