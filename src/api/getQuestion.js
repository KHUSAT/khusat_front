import axios from 'axios';

const getQuestion = async () =>{
    const res = axios.get("getquestions");
    return res;
}

export default getQuestion;