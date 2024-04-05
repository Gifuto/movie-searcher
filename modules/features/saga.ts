import { call, put, takeLatest } from "redux-saga/effects";

import { MOVIE_API } from "@/core/api/api";
import { featuresActions } from "./slice";

interface Features {
    payload: {
        id: number;
    };
}

function* getFeatures({ payload: { id } }: Features) {
    try {
        //@ts-ignore
        const response = yield call(MOVIE_API.get, `/find/${id}`); ///anime/${id}/full

        const updatedFeatures = { ...response.data, id };

        yield put(featuresActions.setFeatures(updatedFeatures));

    } catch (error) {
        console.log(error);
    }
}

export function* watchGetFeatures() {
    //@ts-ignore
    yield takeLatest(featuresActions.requestFeatures.type, getFeatures);
}
