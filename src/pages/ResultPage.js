import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
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

function ResultPage({result}){
    return(
        <>
            {result && (
                <Container>
                    <Title>{result.high}</Title>
                    <Position>{result.low}</Position>
                    <Description>{result.description}</Description>
                </Container>)
            }  
        </>
    );
}

export default ResultPage;