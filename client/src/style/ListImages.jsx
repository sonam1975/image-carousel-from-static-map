import styled from "styled-components";
const Image = styled.div`
  border: 3px;

  transition: all 0.3s linear;
  cursor: pointer;

  max-width: 440px;
  text-align: left;
  margin: 0 auto;
  padding-right: 5px;
  opacity: 0.7;
  img {
    max-width: 330px;
    margin: 0 auto;
    display: block;
    padding-right: 12px;
    &:hover {
      opacity: 1;
    }
  }
`;

export default Image;
