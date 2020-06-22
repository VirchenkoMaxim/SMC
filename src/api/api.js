import statistic from './Statistic.json'
import Axios from 'axios';



export const statsAPI = {
    getUsers: (page, count) => {
        return Axios.get(`http://localhost:4000/user?page=${page}&count=${count}`);
    },
    getStatistic: () => {
        return statistic
    }
}