import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { reducer } from "./chartsReduser";
const rootReducer = combineReducers({
    charts: reducer,
})

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

window.store = store
export default store