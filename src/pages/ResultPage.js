import React,{useEffect} from "react";
import styled, { css } from "styled-components";
import { lighten,darken } from "polished";
import KakaoBtn from "../components/kakao/KakaoBtn";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 40rem;
  ${media.phone`
    margin-top: 2rem;
    width: 20rem;
  `}
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
  ${media.phone`
    font-size: 3rem;
  `}
`;

const Position = styled.div`
  font-size: 4.5rem;
  font-weight: bold;
  ${media.phone`
    font-size: 1.6rem;
  `}
`;

const ResultImg = styled.img`
  border-radius: 1rem;
  width: 30rem;
  margin-top: 3rem;
  ${media.phone`
    width: 20rem;
    margin-top: 1rem;
  `}
`;

const Description = styled.div`
  color: #222222;
  font-size: 1.2rem;
  ${media.phone`
    font-size: 1rem;
  `}
`;

const DescList = styled.li`
  &::marker{
    color: #536349;
  }
  list-style-position: inside;
  text-indent: -1.6rem;
  padding-left: 1.2rem;
  ${media.phone`
  text-indent: -0.9rem;
  padding-left: 0.8rem;
  `}
`;

const ContentBox = styled.div`
  margin-top: 1rem;
  background-color: #f2f2f2;
  text-align: left;
  border-radius: 1rem;
  padding: 2rem;
  width: 30rem;
  ${media.phone`
    width: 20rem;
  `}
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  ${media.phone`
    width: 20rem;
  `}
`;

const ResetBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 14.5rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 1rem;
  color: #010101;
  background-color: #f2f2f2;
  transform: background-color;
  transition: ease-out 0.3s;
  &:hover {
    background: ${darken(0.1, "#f2f2f2")};
  }
  ${media.phone`
    width: 9rem;
    height: 4rem;
    font-size: 1.2rem;
  `}
`;

function ResultPage({ history, result }) {
  const onClick=()=>{
    history.push('/');
  }
  return (
    <Wrapper>
      {result && (
        <Container>
          <Title>{result.high}</Title>
          <Position>{result.low}</Position>
          <ResultImg src={result.image} />
          <ContentBox>
            <Description>
              {result.description.map((desc,index)=>
                (<DescList key={index}>{desc}</DescList>))}
            </Description>
          </ContentBox>
        </Container>
      )}
      <BtnWrapper>
        <ResetBtn onClick={onClick}>다시하기</ResetBtn>
        <KakaoBtn result={result} />
      </BtnWrapper>
    </Wrapper>
  );
}

export default ResultPage;
