import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  RightBtnText,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade top>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>

        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {RightBtnText && <RightButton>{RightBtnText}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 13vh;

  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
  font-weight: 500;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
