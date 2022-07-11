import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import NftItem from "../UI/NftItem";
import CountDown from "../CountDown";

const ExploreItems = () => {
  const [itemCount, setItemCount] = useState(8);
  const [exploreItems, setExploreItems] = useState([]);

  const getExploreData = async () => {
    const response = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`
    );

    setExploreItems(response.data);
  };

  async function filterItems(filter) {
    const response = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
    );

    setExploreItems(response.data);
  }

  useEffect(() => {
    getExploreData();
  }, []);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => filterItems(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {exploreItems.length ? (
        exploreItems.slice(0, itemCount).map((item, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${item.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={item.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {item.countdownInHours && (
                <CountDown timeInHours={item.countdownInHours} />
              )}

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                        target="_blank"
                      >
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a
                        href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                        target="_blank"
                      >
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <NftItem image={item.nftImage} id={item.nftId} />
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${item.nftId}`}>
                  <h4>{item.title}</h4>
                </Link>
                <div className="nft__item_price">
                  {item.price} ETH<span>{item.date}</span>
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {new Array(8).fill(0).map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Skeleton width="100%" height="400px" />
            </div>
          ))}
        </>
      )}
      <div className="col-md-12 text-center">
        {itemCount !== 16 && (
          <Link
            onClick={() => setItemCount(itemCount + 4)}
            to=""
            id="loadmore"
            className="btn-main wow fadeInUp lead"
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
