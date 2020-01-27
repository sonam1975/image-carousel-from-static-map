import React from "react";

const ListImages = ({ images }) => {
  return (
    <div>
      <img src={images[0].Houses}></img>
      <img src={images[1].Houses}></img>
      <img src={images[2].Houses}></img>
      <img src={images[3].Houses}></img>
      <img src={images[4].Houses}></img>
      <img src={images[5].Houses}></img>
    </div>
  );
};

export default ListImages;
