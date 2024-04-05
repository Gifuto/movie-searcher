"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "@/core/api/types";

import { Features, FeaturesState } from "./types";

export const SLICE_NAME = "features";

const initialState: FeaturesState = {
    items: [],
    status: REQUEST_STATUS.INITIAL,
};

export const featuresSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        requestFeatures: (state) => {
            state.status = REQUEST_STATUS.LOADING
        },
        setFeatures: (state) => {
            
        }
    },
});

export const featuresActions = featuresSlice.actions;