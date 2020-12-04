import getResultApi from '../../api/getResult';

// action
const GET_RESULT = 'GET_RESULT';
const GET_RESULT_SUCCESS = 'GET_RESULT_SUCCESS';
const GET_RESULT_ERROR = 'GET_RESULT_ERROR'; 

// action creators
export const getResult = () => ({type:GET_RESULT});
export const getResultSuccess = (data) => ({type: GET_RESULT_SUCCESS,payload: data});
export const getResultError = (e) => ({type: GET_RESULT_ERROR, payload: e});

const initialState = {
    loading: true,
    data: null,
    error: null
}

export function getResultThunk(answer){
    return async (dispatch) => {
        dispatch(getResult());
        try{
            const { data } = await getResultApi(answer);
            dispatch(getResultSuccess(data));
        }catch(err){
            dispatch(getResultError());
        }
    }
}

function result(
    state = initialState,
    action
){
    switch(action.type){
        case GET_RESULT: {
            return{
                loading: true,
                data: null,
                error: null
            }
        }
        case GET_RESULT_SUCCESS:{
            return{
                loading: false,
                data: action.payload,
                error: null
            }
        }
        case GET_RESULT_ERROR:{
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

export default result;