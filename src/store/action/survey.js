import getQuestionApi from '../../api/getQuestion';

// action
const GET_SURVEY = 'GET_SURVEY';
const GET_SURVEY_SUCCESS = 'GET_SURVEY_SUCCESS';
const GET_SURVEY_ERROR = 'GET_SURVEY_ERROR'; 

// action creators
export const getSurvey = () => ({type:GET_SURVEY});
export const getSurveySuccess = (data) => ({type: GET_SURVEY_SUCCESS, payload: data});
export const getSurveyError = (e) => ({type: GET_SURVEY_ERROR, payload: e});

const initialState = {
    loading: true,
    data: null,
    error: null
}

export function getQuestionThunk(){
    return async (dispatch) => {
        dispatch(getSurvey());
        try{
            const { data } = await getQuestionApi();
            dispatch(getSurveySuccess(data));
        }catch(err){
            dispatch(getSurveyError());
        }
    }
}

function survey(
    state = initialState,
    action
){
    switch(action.type){
        case GET_SURVEY: {
            return{
                loading: true,
                data: null,
                error: null
            }
        }
        case GET_SURVEY_SUCCESS:{
            return{
                loading: false,
                data: action.payload,
                error: null
            }
        }
        case GET_SURVEY_ERROR:{
            return{
                loading: false,
                data: null,
                error: action.payload
            }
        }
        default:
            return state;
    }
}

export default survey;