import axios from "axios";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const MOVIE_API_URL = "https://api.themoviedb.org/3";///movie?api_key=${API_KEY}

export const MOVIE_API_IMAGES = "https://image.tmdb.org/t/p/w500"

export const MOVIE_API = axios.create({
    baseURL: MOVIE_API_URL,
});
