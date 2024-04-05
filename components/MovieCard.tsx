"use client";

import Image from "next/image";
import Link from "next/link";

import { MOVIE_API_IMAGES } from "@/core/api/api";
import star from "../public/star.svg";
import StarIcon from "./StarIcon";

interface Card {
    cardsProps: {
        id: number;
        original_title: string;
        title: string;
        release_date: string;
        poster_path: string;
    };
}

export default function MovieCard({ cardsProps }: Card) {
    const [year] = cardsProps.release_date.split("-");
    return (
        <div className="w-[172px] mx-auto">
            <Link href="/">
                <Image
                    src={`${MOVIE_API_IMAGES + cardsProps.poster_path}`}
                    alt="poster"
                    width={172}
                    height={258}
                />
            </Link>
            <div className="flex justify-between mt-2">
                <h3 className="truncate overflow-hidden">
                    <Link href="/">{`${cardsProps.title}`}</Link>
                </h3>
                <button className="cursor-pointer">
                    <StarIcon />
                </button>
            </div>
            <div className="text-gray-400 text-sm">{`${year}`}</div>
        </div>
    );
}
