import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/modules";
import { useCallback, useEffect } from "react";
import { movieActions } from "@/modules/movie/slice";
import MovieCard from "@/components/MovieCard";
import Loader from "./Loader";

export default function MovieList() {
    const dispatch = useDispatch();

    const [isLoad, setIsLoad] = useState(false);

    const movies = useSelector((state: RootState) => state.movie.items);

    const requestMovie = useCallback(() => {
        dispatch(movieActions.requestMovie());
    }, [dispatch]);

    useEffect(() => {
        setIsLoad(true);
        requestMovie();
    }, []);
    return (
        <div className={isLoad ? "mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5" : ""}>
            {isLoad ? (
                movies.map((cardsProps) => (
                    <MovieCard cardsProps={cardsProps} key={cardsProps.id} />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
}
