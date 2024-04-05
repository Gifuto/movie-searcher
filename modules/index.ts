"use client"

import { useDispatch as useReduxDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

import { movieSlice, SLICE_NAME as MOVIE } from "./movie/slice";
import { watchGetMovie as watchGetMovieSaga } from "./movie/saga";

export const rootReducer = combineReducers({
    [MOVIE]: movieSlice.reducer
})

const persistConfig = {
    key: "root",
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

function* rootSaga() {
    yield all([
        watchGetMovieSaga(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;

export type RootState = ReturnType<typeof store.getState>;