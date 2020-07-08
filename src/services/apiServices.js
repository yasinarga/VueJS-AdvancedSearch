const axios = require('axios');
const qs = require('querystring');



const ApiService = async (path) => {
    const instance = axios.create({
        baseURL: ``,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })

    const postReq = function() {
        return instance.get(path)
    }

    return await postReq();
}


export default ApiService;
