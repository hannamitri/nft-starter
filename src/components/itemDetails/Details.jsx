import React from "react";
import { Link } from "react-router-dom";
import { detailsData } from "../../data/detailsData";


const Details = () => {
  return (
    <>
      

      <div className="spacer-40"></div>
      <h6>Properties</h6>
      <div className="row gx-2">
        {detailsData.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <a href="#" className="nft_attr">
              <h5>{item.title}</h5>
              <h4>{item.trait}</h4>
              <span>{item.percentageTrait}% have this trait</span>
            </a>
          </div>
        ))}
      </div>
      <div className="spacer-30"></div>
    </>
  );
};

export default Details;
