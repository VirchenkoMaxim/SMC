import statistic from './Statistic.json'
import Axios from 'axios';



export const statsAPI = {
    getUsers: (page, count) => {
        return Axios.get(`http://localhost:4000/api/user?page=${page}&count=${count}`);
    },
    getStatistic: (from, to) => {
        return Axios.get(`http://localhost:4000/api/stats?from=${from}&to=${to}`);
    }
}