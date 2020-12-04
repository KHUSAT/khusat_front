import React from 'react'
import { useSelector } from 'react-redux';
import SurveyPage from '../pages/SurveyPage';

export function SurveyPageContainer() {
    const data = useSelector((state) => state.survey.data);
    return (
        <>
            <SurveyPage
                question={data}
            />
        </>
    )
}

export default SurveyPageContainer;