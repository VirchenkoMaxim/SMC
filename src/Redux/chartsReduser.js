import { createSlice } from '@reduxjs/toolkit'
import { statsAPI } from '../api/api';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
const initialState = {
    usersCountPerPage: 15,
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
        },
        mySaga: (state, action) => {

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
            let lastStatsId = res.data.data[0].id;
            let firstStatsId = lastStatsId - getState().charts.usersCountPerPage + 1
            statsAPI.getStatistic(firstStatsId, lastStatsId)
                .then(res => {
                    dispatch(getStatistic(res.data));
                })
        })

};

// function* fetchUsers(usersPageNumber = 1) {
//     try {
//         yield put(setUsersPageNumber(usersPageNumber));
//         const user = yield call(statsAPI.getUsers(usersPageNumber, 15));
//         yield put(getUsers(user))
//     } catch (e) {
//         yield console.log(e)
//         //    yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }
// export function* setUsers() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchUsers);
// }

