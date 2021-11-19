import axios from 'axios';

export default axios.create({
    baseURL: 'https://watchmode.p.rapidapi.com',
    params: { },
    headers: {
        'x-rapidapi-host': 'watchmode.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_WATCHMODE_API_KEY
    }
});
