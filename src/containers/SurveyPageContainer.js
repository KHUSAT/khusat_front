import React from 'react';
import { useSelector } from 'react-redux';
import SurveyPage from '../pages/SurveyPage';
import Loading from '../components/loading/Loading';

export function SurveyPageContainer({history}) {
    const {loading,data,error} = useSelector((state) => state.survey);
    return (
        <>
            {loading && <Loading />}
            {data && <SurveyPage history={history} question={data}/>}
            {error && <div>에러 발생!!</div>}
        </>
    )
}

export default SurveyPageContainer;