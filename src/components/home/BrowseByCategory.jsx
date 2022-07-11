import React from "react";
import { Link } from "react-router-dom";
import { browseByCategoryData } from "../../data/browseByCategoryData";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {browseByCategoryData.map((item, index) => (
            <div
              className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
              data-wow-delay={`.${index + 1}s`}
              key={index}
            >
              <Link to="/explore" className="icon-box style-2 rounded">
                <i className={`${item.icon}`}></i>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
