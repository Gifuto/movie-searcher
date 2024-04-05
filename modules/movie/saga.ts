import { call, put, select, takeLatest } from "redux-saga/effects";

import { API_KEY, MOVIE_API } from "@/core/api/api";
import { movieActions } from "./slice";
import { RootState } from "..";

//@ts-ignore
function* getMovie({ type }) {
    try {
        const { currentPage } = yield select(
            (state: RootState) => state.movie
        );
        
        //@ts-ignore
        const response = yield call(
            MOVIE_API.get,
            `/movie?api_key=${API_KEY}&page=${currentPage}` ///anime?page=${currentPage}
        ); //${payload}

        yield put(movieActions.setMovie(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchGetMovie() {
    //@ts-ignore
    yield takeLatest(
        [movieActions.requestMovie.type],
        getMovie
    );
}