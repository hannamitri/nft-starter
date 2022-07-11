import React from "react";
import { Link } from "react-router-dom";
import { historyData } from "../../data/historyData";

const History = () => {
  return (
    <>
      {historyData.map((item, index) => (
        <div className="p_list" key={index}>
          <div className="p_list_pp">
            <Link to="/author">
              <img className="lazy" src={item.author} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          <div className="p_list_info">
            Bid {!index && "accepted"} <b>{item.eth} ETH</b>
            <span>
              by <b>{item.name}</b> at {item.date}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default History;
