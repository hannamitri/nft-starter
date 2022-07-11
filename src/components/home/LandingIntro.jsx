import React from "react";
import { landingIntroData } from "../../data/landingIntroData";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          {landingIntroData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-sm-30" key={index}>
              <div className="feature-box f-boxed style-3">
                <i
                  className={`wow fadeInUp bg-color-2 i-boxed ${item.icon}`}
                ></i>
                <div className="text">
                  <h4 className="wow fadeInUp">{item.title}</h4>
                  <p className="wow fadeInUp" data-wow-delay=".25s">{item.description}</p>
                </div>
                <i className={`wm ${item.icon}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
