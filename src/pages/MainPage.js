import React, { useEffect } from "react";
import { getQuestionThunk } from "../store/action/survey";
import { useDispatch } from "react-redux";
import soldier from "../assets/soldier.png";
import styled, { css } from "styled-components";
import pattern from "../assets/mainPattern.jpeg";

const sizes = {
  desktop: 102.4,
  tablet: 76.8,
  phone: 36,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${pattern});
  background-repeat: none; 
  background-size: cover; 
  background-position: center; 
  color: #ffffff;
`;

// 반응형
const MainImg = styled.img`
  width: 30rem;
  height: auto;
  ${media.tablet`
    width: 25rem;
  `}
  ${media.phone`
    width: 22rem;
  `}
`;

const MainTitle = styled.div`
  margin-top: 3rem;
  font-size: 5rem;
  font-weight: bold;
  ${media.phone`
    font-size: 3rem;
    margin-top: 1.6rem;
  `}
`;

const MainDesc = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  ${media.tablet`
    margin-top: 0.5rem;
    font-size: 1.1rem;
  `}
`;

const MainBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 25rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 1rem;
  border: 1px solid #010101;
  color: #ffffff;
  background-color: #3c441d;
  transform: background-color;
  transition: ease-out 0.3s;
  &:hover {
    background-color: #ffffff;
    color: #010101;
  }
  ${media.phone`
    width: 16rem;
    height: 4rem;
    font-size: 1.2rem;
    margin-top: 0;
  `}
`;

function MainPage({ history }) {
  const dispatch = useDispatch();
  const onClick = () => {
    history.push("/survey");
  };

  useEffect(() => {
    dispatch(getQuestionThunk());
  }, []);

  return (
      <Container>
        <MainTitle>KHUSAT</MainTitle>
        <MainDesc>
          KHUSAT 특별과정, <br></br>
          여러분의 보직을 추천드립니다.
        </MainDesc>
        <MainImg src={soldier} />
        <MainBtn onClick={onClick}>시작하기</MainBtn>
      </Container>
  );
}

export default MainPage;
