import axios from 'axios';

const getResult = async (answer) => {
    const res = await axios.post("submit",answer);
    return res;
}

export default getResult;