import React from 'react'
import { useSelector } from 'react-redux';
import ResultPage from '../pages/ResultPage';

export function ResultPageContainer() {
    const data = useSelector((state) => state.result.data);
    return (
        <>
            <ResultPage
                result={data}
            />
        </>
    )
}

export default ResultPageContainer;