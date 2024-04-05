"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/modules";
import { movieActions } from "@/modules/movie/slice";
import ReactPaginate from "react-paginate";

export const Footer = () => {
    const dispatch = useDispatch();

    const [isLoad, setIsLoad] = useState(false);

    const allPages = useSelector((state: RootState) => state.movie.allPages);
    const currentPage = useSelector(
        (state: RootState) => state.movie.currentPage
    );

    const handlePageClick = ({ selected }: { selected: number }) => {
        const pageNumber = selected + 1;
        dispatch(movieActions.setNextPage(pageNumber));
        dispatch(movieActions.requestMovie());
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    useEffect(() => {
        setIsLoad(true);
    }, []);

    return (
        <div className="sm:py-10 py-5 sm:w-[700px] mx-auto">
            {isLoad ? (
                <ReactPaginate
                    className="flex justify-around text-violet-600 sm:text-lg text-xs items-center"
                    previousClassName="sm:p-2"
                    pageClassName="sm:px-3 px-1 hover:underline hover:underline-offset-2"
                    activeClassName="bg-violet-600 rounded-full text-white hover:no-underline"
                    nextClassName="sm:p-2"
                    breakLabel="..."
                    previousLabel="< prev"
                    nextLabel="next >"
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={3}
                    pageCount={allPages} //500
                    onPageChange={handlePageClick}
                    forcePage={currentPage - 1}
                />
            ) : (
                <div>Pagination</div>
            )}
        </div>
    );
};
