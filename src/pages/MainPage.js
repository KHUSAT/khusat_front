import React, { useEffect } from "react";
import { getQuestionThunk } from "../store/action/survey";
import { useDispatch } from "react-redux";
import soldier from '../assets/soldier.png';
import styled from "styled-components";
import pattern from '../assets/mainPattern.jpeg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const MainImg = styled.img`
  height: 50vh;
`;

const MainTitle = styled.div`
  margin-top: 5rem;
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
`;

const MainDesc = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const MainBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 25rem;
    height: 5rem;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 1rem;
    border: 1px solid #010101;
    background-color: #3c441d;
    &:hover{
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
      <Wrapper>
        <Container>
          <MainTitle>KHUSAT</MainTitle>
          <MainDesc>
            KHUSAT 특별과정, <br></br>
            여러분의 보직을 추천드립니다.
          </MainDesc>
          <MainImg src={soldier} />
          <MainBtn onClick={onClick}>시작하기</MainBtn>
        </Container>
      </Wrapper>
    </>
  );
}

export default MainPage;
