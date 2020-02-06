import React from "react";
import styled from "styled-components";
import Image from "../style/ListImages.jsx";
const Div = styled.div`
  position: relative;
  display: inline-block;
`;

const Date = styled.div`
  top: 2%;

  font-family: Arial, sans-serif;
  color: #fff;
  vertical-align: baseline;
  position: absolute;
  display: inline-table;
  margin: 5px 0 5px 5px;

  p {
    background-color: #5d8acb;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 16%;
  font-family: Arial, sans-serif;
  color: white;
  width: 30%;
  p {
    font-weight: 600;
    font-size: 0.975rem;
    text-align: left;
  }
`;

const Location = styled.div`
  position: absolute;
  bottom: 0;
  font-family: Arial, sans-serif;
  color: white;
  width: 33%;
  overflow: visible;
`;
const BottomInfo = styled.div``;
const Info = styled.div`
  position: absolute;
  display: flex;
  bottom: 14;
  padding-left: 30%;
  color: white;
  font-size: 18px;
`;

const MapNumber = styled.div`
  top: 2%;

  font-family: Arial, sans-serif;
  color: #fff;

  position: absolute;
  display: inline-table;

  padding-left: 45%;

  background-clip: content-box;

  p {
    background-color: #5d8acb;
  }
`;

const Beds = styled.div`
  border-right: solid;
`;
const Baths = styled.div`
  border-right: solid;
  padding-left: 4px;
`;
const Area = styled.div`
  padding-left: 4px;
`;

const ListImages = ({ img }) => {
  const {
    id,
    houses,
    soldDate,
    price,
    location1,
    city,
    states,
    zipCode,
    beds,
    baths,
    area
  } = img;
  return (
    <Image>
      <img src={img.Houses}></img>

      <Date>
        <p>{"SOLD " + soldDate}</p>
      </Date>
      <MapNumber>
        <p>{id}</p>
      </MapNumber>

      <Price>
        <p>
          {/* <svg
            viewBox="0 0 32 32"
            class="icon icon-home"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z" />
          </svg> */}
          {"$" + price}
        </p>
      </Price>
      <Location>
        <p>
          {location1 + " "}
          <br></br>
          {city + " "}
          {states + " "}
          {zipCode + " "}
        </p>
      </Location>

      <Info>
        <Beds>
          {beds}
          <br></br>Beds
        </Beds>

        <Baths>
          {baths}
          <br></br>Baths
        </Baths>

        <Area>
          {area}
          <br></br>Sq.Ft
        </Area>
      </Info>
    </Image>
  );
};

export default ListImages;
