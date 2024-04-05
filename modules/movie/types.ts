import { REQUEST_STATUS } from "@/core/api/types";

export interface MovieState {
    items: Movie[]
    status: REQUEST_STATUS
    allPages: number
    currentPage: number
}

export interface Response {
    page: number
    results: Movie[]
}

export interface Movie {
    id: number
    original_title: string
    title: string
    overview: string
    vote_average: number
    vote_count: number
    release_date: string
    poster_path: string
}