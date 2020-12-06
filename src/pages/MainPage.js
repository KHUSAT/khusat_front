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

const WrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${pattern});
  background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
  background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
  background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

// 반응형
const MainImg = styled.img`
  width: 30rem;
  height: auto;
  ${media.tablet`
    width: 20rem;
  `}
`;

const MainTitle = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  ${media.tablet`
    font-size: 4rem;
  `}
`;

const MainDesc = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  ${media.tablet`
    font-size: 1.1rem;
  `}
`;

const MainBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    
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
    <>
      <WrapperContainer>
        <Wrapper>
          <Container>
            <MainTitle>KHUSAT</MainTitle>
            <MainDesc>
              KHUSAT 특별과정, <br></br>
              여러분의 보직을 추천드립니다.
            </MainDesc>
            <MainImg src={soldier} />
          </Container>
          <MainBtnWrapper>
            <MainBtn onClick={onClick}>시작하기</MainBtn>
          </MainBtnWrapper>
        </Wrapper>
      </WrapperContainer>
    </>
  );
}

export default MainPage;
