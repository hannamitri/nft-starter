import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const NftItem = ({ image, id }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const nftImage = new Image();
    nftImage.src = image;
    nftImage.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(nftImage);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  });

  return img ? (
    <Link to={`/item-details/${id}`}>
      <img src={image} className="lazy nft__item_preview" alt="" />
    </Link>
  ) : (
    <Skeleton width="100%" height="300px" />
  );
};

export default NftItem;
