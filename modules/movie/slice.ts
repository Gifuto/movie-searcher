"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "@/core/api/types";

import { MovieState, Response } from "./types";

export const SLICE_NAME = "movie";

const initialState: MovieState = {
    items: [],
    status: REQUEST_STATUS.INITIAL,
    allPages: 0,
    currentPage: 1,
};

export const movieSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        requestMovie: (state) => {
            state.status = REQUEST_STATUS.LOADING;
        },
        setMovie: (state, action: PayloadAction<Response>) => {
            state.status = REQUEST_STATUS.SUCCESS;
            state.items = action.payload.results;
            state.currentPage = action.payload.page;
            state.allPages = 500; //action.payload.total_pages
        },
        setNextPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const movieActions = movieSlice.actions;