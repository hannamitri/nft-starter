import React, { useEffect, useState } from "react";
import SubHeader from "../images/background/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import WOW from "wowjs";

const Explore = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <ExploreItems />
            </div>
          </div>
        </section>
      </div>

      <a href="#" id="back-to-top"></a>
    </div>
  );
};

export default Explore;