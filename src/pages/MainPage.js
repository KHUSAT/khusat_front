import React,{useEffect} from 'react';
import {getQuestionThunk} from '../store/action/survey';
import { useDispatch } from 'react-redux';
import {Button} from "antd";
import mainImg from "../assets/main-soldier.png";
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const MainImg = styled.img`
    margin-top: 2rem;
    width: 70rem;
    height: 35rem;
    border-radius: 1rem;
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


function MainPage({history}){
    const dispatch = useDispatch();
    const onClick = () => {
        history.push('/survey');
    }

    useEffect(()=>{
        dispatch(getQuestionThunk());
    },[]);

    return(
        <>
            <Container>
                <MainTitle>KHUSAT</MainTitle>
                <MainDesc>
                    KHUSAT 특별과정, <br></br>
                    여러분의 보직을 추천드립니다.
                </MainDesc>
                <Button 
                    size="large"
                    onClick={onClick}
                    color="#536349"
                    style={{}}
                > 시작하기</Button>
                <MainImg src={mainImg}/>
            </Container>
        </>
    );
}

export default MainPage;
