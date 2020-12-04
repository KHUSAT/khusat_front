import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const Title = styled.div`
    font-size: 5rem;
    font-weight: bold;
`;

const Position = styled.div`
    font-size: 4.5rem;
`;

const Description = styled.div`
    margin-top: 4rem;
    font-size: 1.4rem;
`;

function ResultPage(){
    const data = useSelector(state=>state.result.data);

    return(
        <>
            {data ? (
                <Container>
                    <Title>{data.high}</Title>
                    <Position>{data.low}</Position>
                    <Description>{data.description}</Description>
                </Container>)
                : <div>로딩중</div>
            }  
        </>
    );
}

export default ResultPage;