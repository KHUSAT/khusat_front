import React from 'react'
import { useSelector } from 'react-redux';
import ResultPage from '../pages/ResultPage';
import Loading from '../components/loading/Loading';

export function ResultPageContainer() {
    const {loading,data,error} = useSelector((state) => state.result);
    return (
        <>
            {loading && <Loading />}
            {data && <ResultPage result={data}/>}
            {error && <div>에러 발생!!</div>}
        </>
    )
}

export default ResultPageContainer;