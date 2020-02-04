import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #fff;
  opacity: 0.5;
`;
const Id1 = styled.div`
  position: absolute;
  top: 72%;
  left: 20%;
  width: 24px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;

  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
  :hover {
    opacity: 1;
  }
`;
const Id2 = styled.div`
  position: absolute;
  top: 78%;
  left: 15%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;
  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
`;
const Id3 = styled.div`
  position: absolute;
  top: 66%;
  left: 45%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;
  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
`;
const Id4 = styled.div`
  position: absolute;
  top: 70%;
  left: 36%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;
  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
`;
const Id5 = styled.div`
  position: absolute;
  top: 58%;
  left: 26%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;
  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
`;
const Id6 = styled.div`
  position: absolute;
  top: 68%;
  left: 30%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid white;
  background-color: #5d8acb;
  p {
    position: absolute;
    /* top: 20%; */
    left: 29%;
    top: -30%;
  }
`;
const Map = ({ id }) => {
  return (
    <Container>
      <Id1>
        <p>1</p>
      </Id1>
      <Id2>
        <p>2</p>
      </Id2>
      <Id3>
        <p>3</p>
      </Id3>
      <Id4>
        <p>4</p>
      </Id4>
      <Id5>
        <p>5</p>
      </Id5>
      <Id6>
        <p>6</p>
      </Id6>
    </Container>
  );
};
export default Map;
