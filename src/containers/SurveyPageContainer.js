import React from 'react';
import { useSelector } from 'react-redux';
import SurveyPage from '../pages/SurveyPage';
// import { createHashHistory } from 'history'
// const history = createHashHistory();

export function SurveyPageContainer({history}) {
    const data = useSelector((state) => state.survey.data);
    return (
        <>
            <SurveyPage
                history={history}
                question={data}
            />
        </>
    )
}

export default SurveyPageContainer;