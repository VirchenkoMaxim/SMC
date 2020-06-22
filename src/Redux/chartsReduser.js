import { createSlice } from '@reduxjs/toolkit'
import { statsAPI } from '../api/api';

const initialState = {
    usersCountPerPage: 10,
    usersPageNumber: null,
    users: null,
    statistic: null,
    totalUsers: null
}


const chartsReduser = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload.data
            state.totalUsers = action.payload.total

        },
        getStatistic: (state, action) => {
            state.statistic = action.payload
        },
        setUsersPageNumber: (state, action) => {
            state.usersPageNumber = action.payload
        }
    }

})
export const { actions, reducer } = chartsReduser
const { getUsers, getStatistic, setUsersPageNumber } = actions

export const setUsers = (usersPageNumber = 1) => (dispatch, getState) => {
    dispatch(setUsersPageNumber(usersPageNumber))
    statsAPI.getUsers(usersPageNumber, getState().charts.usersCountPerPage)
        .then(res => {
            dispatch(getUsers(res.data));
        })

};
export const setStatistic = () => (dispatch) => {
    const statistic = new Promise((res, req) => {
        setTimeout(() => {
            res(statsAPI.getStatistic())
        }, 2000)

    })
    statistic.then(res => {
        dispatch(getStatistic(res));
    })

};


